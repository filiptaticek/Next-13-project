import type { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth"
import { authOptions } from "@/authOptions"
import prisma from "../../../prisma/client"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession( req, res, authOptions )
  if (!session) { return res.status(403).json({ err: "Not authenticated" })}
  //Delete a post
  if (req.method === "DELETE") {
    const postId = req.body
    try{
      const result = await prisma.post.delete({
        where: {
          id: postId,
        }
      }) 
      res.status(200).json(result)
    }

    catch(err){
      res.status(403).json({ err: "Error has occured while deleting a post" })
    }
  }
}