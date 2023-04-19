"use client"

import Image from "next/image"
import { IPost } from "../types"

export default function MyPost ({post, user ,image}:{post:IPost, user:string, image:string}) {
  return(
    <div className="my-8 rounded-lg bg-white p-8">
      <div className="flex place-items-center gap-4">
        <Image src={image} alt="avatar" width={40} height={40} className="rounded-full" />
        <h3 className="font-bold text-gray-700">{user}</h3>
      </div>
      <div className="my-8">
        <p className="break-all">{post.title}</p>
      </div>
      <div className="my-8 flex gap-4">
        <p className="break-all font-bold">{post.comments?.length} comments</p>
        <p>Delete</p>
      </div>
      
    </div>
  )
}