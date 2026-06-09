'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { loginAction } from '../actions/auth';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [state, setState] = useState<'login' | 'loading' | 'failure' | 'success' | 'locked'>('login');
  const [errorMessage, setErrorMessage] = useState('The credentials provided do not match our secure records.');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      const glow = document.getElementById('glow-bg');
      if (glow) {
        glow.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(245, 166, 35, 0.08) 0%, transparent 70%)`;
      }
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('loading');

    const result = await loginAction(username, password);

    if (result.success) {
      setState('success');
      setTimeout(() => {
        const bar = document.getElementById('progress-bar');
        if (bar) bar.style.width = '100%';
      }, 50);

      setTimeout(() => {
        router.push('/admin-dashboard');
      }, 2000);
    } else {
      if (result.error === 'locked') {
        setState('locked');
      } else {
        setErrorMessage(result.message || 'Invalid credentials');
        setState('failure');
      }
    }
  };

  const resetState = () => {
    setState('login');
    setUsername('');
    setPassword('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0A0A0A] overflow-hidden" style={{ backgroundImage: 'radial-gradient(rgba(245, 166, 35, 0.03) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      <div id="glow-bg" className="fixed inset-0 pointer-events-none -z-10 transition-colors" style={{ background: 'radial-gradient(circle at center, rgba(245, 166, 35, 0.08) 0%, transparent 70%)' }}></div>
      
      {state === 'success' && (
        <div className="fixed inset-0 pointer-events-none transition-opacity duration-500 opacity-100" style={{ background: 'radial-gradient(circle at center, rgba(34, 197, 94, 0.05) 0%, transparent 80%)' }}></div>
      )}

      <main className="w-full max-w-[420px] px-6 md:px-0 relative z-10">
        <div className={`bg-[#1A1A1A] border border-[#2A2A2A] rounded-[16px] p-10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-400 ${state === 'failure' ? 'animate-[shake_0.4s_ease-in-out]' : ''}`}>
          
          {/* State 1: Login Form */}
          <div className={`transition-all duration-300 ${state === 'login' || state === 'loading' ? 'opacity-100 translate-y-0 relative' : 'opacity-0 translate-y-2 absolute pointer-events-none'}`}>
            <header className="mb-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-4 h-4 bg-[#f5a623]"></div>
                <span className="font-syne text-[12px] text-[#eee0d2] uppercase tracking-[0.08em] font-bold">CMS</span>
              </div>
              <h1 className="font-syne text-[32px] font-bold text-[#eee0d2] mb-2 leading-tight tracking-tight">Welcome Back</h1>
              <p className="font-dm-sans text-[14px] text-[#eee0d2]/60">Sign in to manage your content</p>
            </header>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block font-dm-sans text-[12px] font-bold tracking-widest text-[#eee0d2]/60 mb-2">USERNAME</label>
                <div className="relative group rounded-lg focus-within:shadow-[0_0_0_3px_rgba(245,166,35,0.15)] transition-shadow">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#eee0d2]/40 text-[20px]">person</span>
                  <input
                    className="w-full bg-[#111111] border border-[#2A2A2A] focus:border-[#f5a623] text-[#eee0d2] rounded-lg py-3 pl-12 pr-4 font-dm-sans text-[14px] transition-colors outline-none"
                    id="username" placeholder="Enter your username" required type="text"
                    value={username} onChange={(e) => setUsername(e.target.value)} disabled={state === 'loading'}
                  />
                </div>
              </div>
              
              <div>
                <label className="block font-dm-sans text-[12px] font-bold tracking-widest text-[#eee0d2]/60 mb-2">PASSWORD</label>
                <div className="relative group rounded-lg focus-within:shadow-[0_0_0_3px_rgba(245,166,35,0.15)] transition-shadow">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#eee0d2]/40 text-[20px]">lock</span>
                  <input
                    className="w-full bg-[#111111] border border-[#2A2A2A] focus:border-[#f5a623] text-[#eee0d2] rounded-lg py-3 pl-12 pr-12 font-dm-sans text-[14px] transition-colors outline-none"
                    id="password" placeholder="••••••••" required type={showPassword ? 'text' : 'password'}
                    value={password} onChange={(e) => setPassword(e.target.value)} disabled={state === 'loading'}
                  />
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#eee0d2]/40 hover:text-[#eee0d2] transition-colors"
                    onClick={() => setShowPassword(!showPassword)} type="button" tabIndex={-1}>
                    <span className="material-symbols-outlined text-[20px]">{showPassword ? 'visibility_off' : 'visibility'}</span>
                  </button>
                </div>
              </div>
              
              <button
                className="w-full bg-[#f5a623] hover:bg-[#f5a623]/90 active:scale-[0.98] text-[#644000] font-dm-sans font-medium text-[14px] h-[48px] rounded-lg flex items-center justify-center gap-2 transition-all group disabled:opacity-70 disabled:pointer-events-none"
                type="submit" disabled={state === 'loading'}>
                
                {state === 'loading' ? (
                  <svg className="animate-spin h-5 w-5 text-[#644000]" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path>
                  </svg>
                ) : (
                  <>
                    <span>Sign In</span>
                    <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </>
                )}
              </button>
            </form>
            
            <footer className="mt-8 text-center">
              <p className="font-dm-sans font-bold tracking-widest text-[10px] text-[#eee0d2]/40 uppercase">Dashboard access is restricted.</p>
            </footer>
          </div>

          {/* State 2: Failure */}
          <div className={`transition-all duration-300 flex flex-col items-center text-center py-4 ${state === 'failure' ? 'opacity-100 translate-y-0 relative' : 'opacity-0 translate-y-2 absolute pointer-events-none hidden'}`}>
            <div className="w-[64px] h-[64px] rounded-full border-2 border-red-500/30 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-red-500 text-[32px]">cancel</span>
            </div>
            <h2 className="font-syne font-bold text-[24px] text-[#eee0d2] mb-2">Access Denied</h2>
            <p className="font-dm-sans text-[14px] text-[#eee0d2]/60 mb-8">{errorMessage}</p>
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full mb-10">
              <span className="material-symbols-outlined text-red-500 text-[18px]">warning</span>
              <span className="font-dm-sans font-bold tracking-widest text-[12px] text-red-500">NOT AUTHENTICATED</span>
            </div>
            <button className="font-dm-sans font-medium text-[14px] text-[#eee0d2] border border-[#524534] hover:bg-[#3c332a] px-8 py-3 rounded-lg transition-colors" onClick={resetState}>
              Try Again
            </button>
          </div>

          {/* State 3: Locked */}
          <div className={`transition-all duration-300 flex flex-col items-center text-center py-4 ${state === 'locked' ? 'opacity-100 translate-y-0 relative' : 'opacity-0 translate-y-2 absolute pointer-events-none hidden'}`}>
            <div className="w-[64px] h-[64px] rounded-full border-2 border-red-500/30 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-red-500 text-[32px]">lock</span>
            </div>
            <h2 className="font-syne font-bold text-[24px] text-[#eee0d2] mb-2">Account Locked</h2>
            <p className="font-dm-sans text-[14px] text-[#eee0d2]/60 mb-8">Too many failed attempts. Try again in an hour.</p>
            <button className="font-dm-sans font-medium text-[14px] text-[#eee0d2] border border-[#524534] hover:bg-[#3c332a] px-8 py-3 rounded-lg transition-colors" onClick={() => router.push('/')}>
              Return Home
            </button>
          </div>

          {/* State 4: Success */}
          <div className={`transition-all duration-300 flex flex-col items-center text-center py-4 ${state === 'success' ? 'opacity-100 translate-y-0 relative' : 'opacity-0 translate-y-2 absolute pointer-events-none hidden'}`}>
            <div className="w-[72px] h-[72px] rounded-full border-2 border-green-500/30 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-green-500 text-[40px]">check_circle</span>
            </div>
            <h2 className="font-syne font-bold text-[24px] text-[#eee0d2] mb-2">Welcome Back</h2>
            <p className="font-dm-sans text-[14px] text-[#eee0d2]/60 mb-10">Redirecting to dashboard...</p>
            <div className="w-full max-w-[200px] h-[4px] bg-[#3c332a] rounded-full overflow-hidden">
              <div id="progress-bar" className="h-full bg-[#f5a623] w-0 transition-all duration-[1800ms] ease-linear"></div>
            </div>
          </div>

        </div>
      </main>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shake {
          10%, 90% { transform: translate3d(-1px, 0, 0); }
          20%, 80% { transform: translate3d(2px, 0, 0); }
          30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
          40%, 60% { transform: translate3d(4px, 0, 0); }
        }
      `}} />
    </div>
  );
}
