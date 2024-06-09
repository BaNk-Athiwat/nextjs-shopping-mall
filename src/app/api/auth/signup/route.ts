import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        const { name, email, password } = await req.json();
        const saltRounds = 11;
        const hash = bcrypt.hashSync(password.toString(), saltRounds);
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hash
            }
        })
        return Response.json({ msg: 'User is created success', user }, { status: 200 });
        
    } catch (error) {
        console.log(error);
        return Response.json({ msg: 'User could not be created' }, { status: 500 });
    }
}