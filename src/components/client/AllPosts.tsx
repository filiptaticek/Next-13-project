"use client"

import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { IPost } from "../../types"
import { Post } from "./Post"

async function allPosts() {
  const response = await axios.get("/api/post/getPost")
  return response.data
}

export default function AllPosts() {
  const { data, error, isLoading } = useQuery<IPost[]>({
    queryFn: allPosts,
    queryKey: ["allPosts"],
  })

  if (error) return <div>{error.toString()}</div>
  if (isLoading) return <div>Loading...</div>

  return (
    <>
      {Array.isArray(data) &&
        data.reverse()?.map((post: IPost) => {
          return <Post post={post} key={post.id} />
        })}
    </>
  )
}
