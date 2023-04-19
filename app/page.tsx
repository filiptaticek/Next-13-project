"use client"

import AddPost from "./components/AddPost"
import { Post } from "./components/Post"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { IPost } from "./types"

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
  console.log(data)

  return (
    <main>
      <AddPost />
      {data?.map((post:IPost) => {
        return(
          <Post post={post} key={post.id} />
        )
      })}
    </main>
  )
}
