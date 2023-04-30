import type { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"
import prisma from "../../../prisma/client"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const session = await getServerSession( req, res, authOptions )
    if (!session) {
      res.status(401).json("Signin you dumbass")
    }
    
    const title:string = (req.body.title)
    //Get user
    const prismaUser = await prisma.user.findUnique({
      where: {email:session?.user?.email }
    })


    //Check on the title
    if (title.length >300) return res.status(403).json({message:"So long, my friend.."})
    if (title.length==0) return res.status(403).json({message: "Please do not leave this empty"})

    //Create post
    try {
      const result = await prisma.post.create({
        data: {
          title,
          userId: prismaUser.id,
        }
      })
      res.status(200).json({message:"Everything is alright"})
    }
    catch(error){res.status(404).json({message:"Something went REALLY wrong.."})}
  }
}