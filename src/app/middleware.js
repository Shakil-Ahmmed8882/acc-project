// app/middleware.js
import { NextResponse } from "next/server";

export async function  middleware(request) {

  const { pathname } = request.nextUrl;

  // const isAuthenticated = Boolean(request.cookies.get("token")); // Example using a token cookie
  // console.log("User is authenticated:", isAuthenticated);
const isAuthenticated = true
  if (pathname.startsWith("/heritage") && !isAuthenticated) {
    console.log("Redirecting to login");
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/heritage/:path*"], // Add other protected paths as needed
};
