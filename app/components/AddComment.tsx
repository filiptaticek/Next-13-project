"use client"

import { useState } from "react"
import axios from "axios"
import { useQueryClient, useMutation } from "@tanstack/react-query"
import { toast } from "react-hot-toast"

export default function AddComment ({id}:{id:string}) {

  const [ title, setComment ] = useState("")
  const [ disabled, setDisabled ] = useState(false)

  async function handleSubmit (e:any) {
    e.preventDefault()
    setComment("")
    setDisabled(true)
    mutate({title, postId: id})
  }

  const queryClient = useQueryClient()

  const { mutate } = useMutation(
    async (data: { title:string,postId:string }) => await axios.post("/api/post/addComment", { data }),
    {
      onError: (error:any) => {
        if (error) {
          toast.error("Something went wrong", {id: "toastPostID"})
          console.log("Error sending post:", error)
        }
        setDisabled(false)
      },
      onSuccess: (data) => {
        toast.success("Post has been made! ", {id: "toastPostID"})
        console.log("Post succesful: ", data.data)
        setDisabled(false)
        queryClient.invalidateQueries(["allPosts"]) //if we add new post, the old query is refetched
      }
    }
  )

  return(
    <form className="my-8" onSubmit={handleSubmit}>
      <div className="bg-gray-200 py-5">
        <textarea 
          maxLength={300}
          onChange={(e) =>setComment(e.target.value)} 
          className="w-full rounded-md bg-white p-8 placeholder:text-black"
          name="title" 
          value={title} 
          placeholder="What's your on your mind ?"
        />
        <div className="flex items-center justify-between">
          <p>{title.length}/300</p>
          <button 
            type="submit"
            className="my-2 rounded-md bg-green-600 px-5 py-2 text-white"
            disabled={disabled}
          >
            Submit
          </button> 
        </div>
      </div>
    </form>

  )
}

