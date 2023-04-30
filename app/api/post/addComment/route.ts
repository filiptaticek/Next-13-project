import { getServerSession } from "next-auth"
import { authOptions } from "@/authOptions"
import prisma from "../../../../prisma/client"
import { NextResponse, NextRequest } from "next/server"

export async function POST(
  req: NextRequest,
) {
  const session = await getServerSession( authOptions )
  if (!session) new NextResponse("Not authenticated.", { status: 403 })
  //Get the user
  const user = await prisma.user.findUnique({
    where: { email: session?.user?.email }
  })

  try{
    const request: {data:{title:string, postId: string}} = await req.json()
    const { title, postId }:{title:string, postId: string} = request.data

    if (!title) new NextResponse("Content missing.", { status: 403 })

    const result = await prisma.comment.create({
      data: {
        content:title,
        userId: user?.id,
        postId : postId
      }})

    return NextResponse.json(result)
  }

  catch(err){
    new NextResponse("Error while adding a comment.", { status: 403 })
  }
}