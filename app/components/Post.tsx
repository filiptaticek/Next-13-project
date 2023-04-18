"use client"
import {IPost} from "../types"
import Image from "next/image"

export function Post ({post}:{post:IPost} ) {

  return (
    <div className="my-8 rounded-lg bg-white p-8" key={post.id}>
      <div className="flex items-center gap-2">
        <Image
          src={post.user.image}
          alt="avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
        <p className="ml-2 font-bold text-gray-700">{post.user.name}</p>
      </div>
      <div className="my-8">
        <p className="break-all">{post.title}</p>
      </div>
    </div>
  )
}