"use client"

import { Post } from "@/components/client/Post"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import AddComment from "@/components/client/AddComment"
import Image from "next/image"

type URL = {
    params: {
        slug: string
    }
}

const fetchAllPosts = async (slug:string) => {
  const response = await axios.get(`/api/post/${slug}`)
  return response.data
}

export default function PostDetail (url: URL) {

  const {data, error, isLoading} = useQuery({
    queryFn: () => fetchAllPosts(url.params.slug),
    queryKey: ["allPosts"],
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.toString()}</div>

  return(
    <div>
      <p className="my-6 text-center text-2xl font-bold text-gray-700">Post Detail</p>
      <Post post={data} />
      {data?.comments?.length>0&&<p className="my-6 text-center text-2xl font-bold text-gray-700">Comments</p>}
      {data?.comments?.map((comment:any) => (
        <div className="my-2 rounded-md bg-white p-4" key={comment.id}>
          <div className="flex items-center gap-2">
            <Image
              src={comment.user?.image}
              alt="avatar"
              width={40}
              height={40}
              className="rounded-full"
              priority
            />
            <p className="ml-2 font-bold text-gray-700">{comment.user.name}</p>
          </div>
          <div className="mt-2">
            <p className="break-all">{comment.content}</p>
          </div>
        </div>
      ))}
      <p className="my-6 text-center text-2xl font-bold text-gray-700">Add a comment</p>
      <AddComment id={data.id} />
    </div>
  )
}