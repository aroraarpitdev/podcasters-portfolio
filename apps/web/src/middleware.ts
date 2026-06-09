import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import * as jose from 'jose';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value;

  // Protect the admin-dashboard routes
  if (request.nextUrl.pathname.startsWith('/admin-dashboard')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
      // In middleware, we use jose to verify the JWT edge-safely without Node.js modules
      const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'super-secret-fallback-key');
      await jose.jwtVerify(token, secret);
      return NextResponse.next();
    } catch (error) {
      // Invalid token
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Redirect authenticated users away from the login page
  if (request.nextUrl.pathname === '/login' && token) {
    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'super-secret-fallback-key');
      await jose.jwtVerify(token, secret);
      return NextResponse.redirect(new URL('/admin-dashboard', request.url));
    } catch (error) {
      // Token invalid, allow them to view the login page
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin-dashboard/:path*', '/login'],
};
