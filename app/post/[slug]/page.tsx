"use client"

import { Post } from "@/app/components/Post"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"

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
  console.log(data)

  return(
    <div>
      <p>hello</p>
    </div>
  )
}