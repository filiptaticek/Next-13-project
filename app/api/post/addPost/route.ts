//import type { NextApiRequest } from "next"
import { getServerSession } from "next-auth"
import { authOptions } from "@/authOptions"
import prisma from "../../../../prisma/client"
import { NextRequest, NextResponse } from "next/server"


export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)

  if (!session) {
    new NextResponse("You are not logged in.", { status: 403 })
  }

  const request = await req.json()
  const title: string = request.title
  //Get user
  const prismaUser = await prisma.user.findUnique({
    where: { email: session?.user?.email },
  })

  //Check on the title
  if (title.length > 300)
    new NextResponse("This string is too long!", { status: 403 })
  if (title.length == 0)
    new NextResponse("You did not give me content of your post!", {
      status: 403,
    })

  //Create post
  try {
    const data = await prisma.post.create({
      data: {
        title,
        userId: prismaUser.id,
      },
    })

    return NextResponse.json(data)
  } catch (error) {
    new NextResponse(`Some error occured while sending the post: ${error} `, {
      status: 403,
    })
  }
}
