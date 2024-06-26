import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./libs/lib";

export async function middleware(request: NextRequest) {
    try {
        if(request?.nextUrl.pathname === "/") {
            return NextResponse.redirect(new URL('/products', request?.url))
        }
        return await updateSession(request);
    } catch (error) {
        return NextResponse.redirect(new URL('/', request?.url))
    }
}
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|login|product/*).*)'],
  }
  
