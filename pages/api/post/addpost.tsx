import type { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const session = await getServerSession( req, res, authOptions )
    if (!session) {
      res.status(401).json("Signin you dumbass")

    }
    
    const title:string = (req.body)

    //Check on the title
    if (title.length >=300) return res.status(403).json({message:"So long, my friend.."})
  }
}