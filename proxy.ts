import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt, { JwtPayload } from "jsonwebtoken"

const AUTH_ROUTES = ["/login", "/register"]
const PUBLIC_ROUTES = ["/", "services"]


export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  // console.log(pathname,"pathname");
  // console.log("proxy");

  const accessToken = request.cookies.get("accessToken")?.value;

  const decodedToken = accessToken
    ? (jwt.decode(accessToken) as JwtPayload)
    : null;

  const userRole = decodedToken?.role;

  if (accessToken && AUTH_ROUTES.includes(pathname)) {
    if (userRole === "USER") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    else if (userRole === "ADMIN") {
      return NextResponse.redirect(new URL("/dashboard/admin", request.url));
    }
    else if(userRole === "TECHNICIAN"){
       return NextResponse.redirect(new URL("/dashboard/technician", request.url));
    }
    else{
       return NextResponse.redirect(new URL("/", request.url));
    }
  }


  const isPublicRoute = PUBLIC_ROUTES.some((route)=> pathname === route || pathname.startsWith(route + "/"));

  const isAuthRoute = AUTH_ROUTES.some((route)=> pathname === route || pathname.startsWith(route + "/"));

  if(!accessToken && !isPublicRoute && !isAuthRoute){
     return NextResponse.redirect(new URL("/login", request.url));
  }


  // return NextResponse.redirect(new URL('/', request.url))
  return NextResponse.next();

}

export const config = {
  matcher: [
    // '/dashboard',
    // '/dashboard/admin',
    // '/dashboard/technician'
    '/((?!api|_next/static|_next/image|.*\\.png$).*)',
  ],
}