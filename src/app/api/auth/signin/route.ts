// import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { SignJWT } from "jose";
import { cookies } from "next/headers";
import prisma from '@/db/db'

// const prisma = new PrismaClient();

async function encrypt(payload: any) {
    const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_KEY);
    const alg = "HS512";

    return await new SignJWT(payload)
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setExpirationTime("60 sec from now")
        .sign(secret);
}

export async function POST(req: Request) {
    try {
        // get body from request
        const { email, password } = await req.json();

        // find the user exist in db
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (!user)
            return Response.json(
                { msg: "Email or Password are wrong" },
                { status: 500 }
            );

        // existed the user, compare password
        const isCompare = bcrypt.compareSync(
            password?.toString(),
            user?.password
        );

        if (!isCompare)
            return Response.json(
                { msg: "Email or Password are wrong" },
                { status: 500 }
            );

        const jwt = await encrypt({ email, role: "admin"});
        const expires = new Date(Date.now() + 60 * 1000);
        
        cookies().set("token", jwt, { expires });

        return Response.json({ msg: "Login success", user }, { status: 200 });
    } catch (error) {
        console.log(error);
        return Response.json({ msg: "Login failed" }, { status: 500 });
    }
}
