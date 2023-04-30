import type { NextApiRequest } from "next"
import { getServerSession } from "next-auth"
import { authOptions } from "@/authOptions"
import prisma from "../../../../prisma/client"
import { NextResponse } from "next/server"

export default async function handler(
  req: NextApiRequest,
) {
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
          },
        },
      },
    })
    return NextResponse.json({
      authenticated: !!session,
      session,
    })
  } catch (err) {
    new NextResponse(null, { status: 403 })
  }
}