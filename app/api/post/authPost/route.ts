import { getServerSession } from "next-auth"
import { authOptions } from "@/authOptions"
import prisma from "../../../../prisma/client"
import { NextResponse } from "next/server"

export async function GET() {
  const session = await getServerSession(authOptions)
  try {
    const data = await prisma.user.findUnique({
      where: {
        email: session?.user?.email,
      },
      include: {
        posts: {
          orderBy: {
            createdAt: "desc",
          },
          include: {
            comments: true,
            user: true
          },
        },
      },
    })
    return NextResponse.json( data )
  } catch (err) {
    new NextResponse(null, { status: 403 })
  }
}