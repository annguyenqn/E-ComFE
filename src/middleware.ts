import { NextRequest, NextResponse } from 'next/server';
import { PagePath, PublicPaths } from './constants';
import AuthService from './service/auth';

export function middleware(req: NextRequest) {
  const cookies = req.cookies;
  const url = req.url;
  const credential = AuthService.getCredentialFromCookie(cookies);
  const isNotPublicPath = !PublicPaths.some((publicPath) =>
    req.nextUrl.pathname.endsWith(publicPath)
  );
  // if (!credential && isNotPublicPath) {
  //   return NextResponse.redirect(new URL(PagePath.LOG_IN, url));
  // }
  // if (credential && !req.nextUrl.pathname.startsWith(PagePath.MAIN)) {
  //   return NextResponse.redirect(new URL(PagePath.MAIN, url));
  // }
  return;
}
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
};
