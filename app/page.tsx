"use client"

import AddPost from "../src/server/components/AddPost"
import { Post } from "../src/server/components/Post"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { IPost } from "../src/server/types"

async function allPosts () {
  const response = await axios.get("/api/post/getPost")
  return(response.data)
}

export default function Home () {

  const {data, error, isLoading} = useQuery<IPost[]>({
    queryFn: allPosts,
    queryKey: ["allPosts"],
  })

  if (error) return <div>{error.toString()}</div>
  if (isLoading) return <div>Loading...</div>

  return (
    <main>
      <AddPost />
      {Array.isArray(data)&&data?.map((post:IPost) => {
        return(
          <Post post={post} key={post.id} />
        )
      })}
    </main>
  )
}
