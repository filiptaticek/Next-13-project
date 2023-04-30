import type { NextApiRequest } from "next"
import prisma from "../../../../prisma/client"
import { NextResponse } from "next/server"

export async function GET(
  req: NextApiRequest,
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
    return NextResponse.json( data )
  } catch (error) {
    new NextResponse(`Error while fetching the post: ${error} `, { status: 403 })
  }
}