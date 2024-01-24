import prisma from "../../db/db";
import { randomUser } from "random-user-data";

const handler = async (req: any, res: any) => {
    try {

        const data = await prisma.user.create({
            data: {
                name: randomUser().name,
                email: randomUser().email,
                password: "admin",
                gender: "male",
            }
        })
        res.json({ success: true, message: "successfully connection.", data })

    } catch (error: any) {
        console.log("Custom Message:", error.message)
    }
}

export default handler;