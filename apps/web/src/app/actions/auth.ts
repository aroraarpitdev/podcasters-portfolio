'use server';

import { cookies } from 'next/headers';

const API_BASE_URL = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000").replace(/\/+$/, '');

export async function loginAction(username: string, pass: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password: pass }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[loginAction] Failed: ${response.status} ${response.statusText} - ${errorText}`);
      
      if (response.status === 403) {
        return { success: false, error: 'locked', message: 'Account locked. Try again later.' };
      }
      
      if (response.status === 401) {
        return { success: false, error: 'invalid', message: 'Invalid credentials' };
      }
      
      return { success: false, error: 'server', message: `Server error: ${response.status}` };
    }

    const data = await response.json();
    
    if (data.success && data.access_token) {
      const cookieStore = await cookies();
      cookieStore.set('auth_token', data.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 2 * 60 * 60, // 2 hours in seconds
        path: '/',
      });
      return { success: true };
    }

    return { success: false, error: 'invalid', message: 'Invalid response from server' };
  } catch (error) {
    console.error('Login action error:', error);
    return { success: false, error: 'server', message: 'Server error' };
  }
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete('auth_token');
}
