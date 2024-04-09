import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const loginState = request.cookies.get("login-state")
    console.log(`loginState:${loginState?.value}`)
    if (!loginState?.value) {
        const url = new URL('/auth', request.url);
        const params = new URLSearchParams(url.search);
        params.set("redirect-url", request.nextUrl.pathname)
        url.search = params.toString();
        return NextResponse.redirect(url)
    } else {
        return NextResponse.next();
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        "/dashboard",
        "/my-wallet"
    ],
}