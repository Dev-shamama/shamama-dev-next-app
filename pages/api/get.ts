import prisma from "../../db/db";
const handler = async (req: any, res: any) => {
    const data = await prisma.user.findMany()
    res.json({ success: true, message: "successfully connection.", data })
}

export default handler;