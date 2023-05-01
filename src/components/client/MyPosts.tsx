"use client"

import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { IPost } from "../../types"
import { Post } from "./Post"

async function fetchAuthPosts () {
  const response = await axios.get("/api/post/authPost")
  return (response.data)
}

export default function MyPosts () {

  const {data, error, isLoading} = useQuery({
    queryFn: fetchAuthPosts,
    queryKey: ["allPosts"],
  })

  if (error) return <div>{error.toString()}</div>
  if (isLoading) return <div>Loading...</div>

  return(

    <div>
      {data?.posts?.map((post: IPost) => {
        return(
          <Post
            key={post.id}
            post={post}
            deleteButton
          />
        )
      })
      }
    </div>
  )
}