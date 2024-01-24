import prisma from "../../db/db";
import { randomUser } from "random-user-data";

const handler = async (req: any, res: any) => {
    const data = await prisma.user.create({
        data: {
            name: randomUser().name,
            email: randomUser().email,
            password: "admin",
            gender: "male",
        }
    })
    res.json({ success: true, message: "successfully connection.", data })
}

export default handler;