import prisma from "../../../../prisma/client"
import { NextResponse } from "next/server"

export default async function GET(
) {
  try {
    const data = await prisma.post.findMany({
      include: {
        user: true,
        comments: true
      },
    })
    return NextResponse.json({ data })
  }
  catch(error){return NextResponse.json({ error })}
}