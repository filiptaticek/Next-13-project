import { getServerSession } from "next-auth"
import { authOptions } from "@/authOptions"
import prisma from "../../../../../prisma/client"
import { NextRequest, NextResponse } from "next/server"

export async function DELETE(req:NextRequest) {

  const session = await getServerSession(authOptions)

  if (!session) {
    new NextResponse("Not authenticated", { status: 403 })
  }

  const postId = req.url.substring(req.url.lastIndexOf("/deletePost/") + 12)

  try {
    const result = await prisma.post.delete({
      where: {
        id: postId,
      },
    })
    return NextResponse.json(result)
  } catch (error) {
    new NextResponse(`Some error occured while deleting the post: ${error} `, {
      status: 403,
    })
  }
}
