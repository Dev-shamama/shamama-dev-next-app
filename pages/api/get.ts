// import prisma from "../../db/db";
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();
const handler = async (req: any, res: any) => {
    const data = await prisma.user.findMany();
    return res.json({ success: true, message: "successfully connection.", data })
}

export default handler;