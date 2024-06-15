import { NextRequest, NextResponse } from "next/server";
import { SignJWT, jwtVerify } from "jose";

const alg = "HS512";
const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_KEY);

export async function encrypt(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setExpirationTime("60 sec from now")
        .sign(secret);
}

export async function decrypt(input: string): Promise<any> {
    const { payload } = await jwtVerify(input, secret, {
        algorithms: [alg],
    });
    return payload;
}

export async function updateSession(request: NextRequest) {    
    const token = request.cookies.get("token")?.value;
    if (!token) return NextResponse.redirect(new URL('/login', request?.url));

    // Refresh the token so it doesn't expire
    const payload = await decrypt(token);
    const expires = new Date(Date.now() + 20 * 1000);
    const jwt = await encrypt(payload);
    const res = NextResponse.next();
    res.cookies.set({
        name: "token",
        value: jwt,
        // httpOnly: true,
        expires: expires,
    });    
    return res;
}