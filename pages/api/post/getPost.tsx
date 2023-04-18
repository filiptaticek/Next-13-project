import type { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../../prisma/client"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {

    //Fetch all posts
    try {
      const data = await prisma.post.findMany({
        include: {
          user: true,
        },
      })
      res.status(200).json(data)
    }
    catch(error){res.status(404).json({message:"Error fetching post"})}
  }
}