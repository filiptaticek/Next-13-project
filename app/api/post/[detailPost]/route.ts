import type { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../../../prisma/client"
import { NextResponse } from "next/server"

export default async function GET(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await prisma.post.findUnique({
      where: {
        id: req.query.detailPost,
      },
      include: {
        user: true,
        comments: {
          include: {
            user: true,
          },
        }
      },
    })
    return NextResponse.json({ data })
  } catch (err) {
    res.status(403).json({ err: "Error has occured while making a post" })
  }
}