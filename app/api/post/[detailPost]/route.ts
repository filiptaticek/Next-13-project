import prisma from "../../../../prisma/client"
import { NextRequest, NextResponse } from "next/server"

export async function GET(
  req: NextRequest,
) {

  const url = req.url
  const zmenena = url.substring(url.lastIndexOf("/post/") + 6)

  try {
    const data = await prisma.post.findUnique({
      where: {
        id: zmenena
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