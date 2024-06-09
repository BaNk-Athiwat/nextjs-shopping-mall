import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { SignJWT } from "jose";
import { cookies } from "next/headers";

const prisma = new PrismaClient();

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

        const secret = new TextEncoder().encode(
            process.env.NEXT_PUBLIC_KEY
        );
        
        const alg = "HS512";

        const jwt = await new SignJWT({
            email,
            role: "admin",
        })
            .setProtectedHeader({ alg })
            .setIssuedAt()
            .setIssuer("urn:example:issuer")
            .setAudience("urn:example:audience")
            .setExpirationTime("1h")
            .sign(secret);

        console.log(jwt);
        cookies().set('token', jwt)

        return Response.json({ msg: "Login success", user }, { status: 200 });
    } catch (error) {
        console.log(error);
        return Response.json({ msg: "Login failed" }, { status: 500 });
    }
}
