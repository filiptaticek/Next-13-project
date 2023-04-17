"use client"

import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import toast from "react-hot-toast"

export default function AddPost () {

  const [title, setTitle] = useState("")
  const [disabled, setDisabled] = useState(false)

  const { mutate } = useMutation(
    async (title: string) => await axios.post("/api/post/addpost", { title }),
    {
      onError: (error:any) => {
        toast.error(error.response.data.message, {})
      },
      onSuccess: (data) => {
        toast.success(data.data.message, {})
        setTitle("")
        setDisabled(false)
      }
    }
  )

  async function submitPost (e:React.FormEvent) {
    e.preventDefault()  
    setDisabled(true)
    mutate(title)
  }

  return(
    <form onSubmit={submitPost}>
      <div>
        <div className="p-5">
          <textarea 
            maxLength={300}
            onChange={(e) =>setTitle(e.target.value)} 
            className="w-full rounded-md border border-black bg-gray-200 p-8 placeholder:text-black"
            name="title" 
            value={title} 
            placeholder="What's your on your mind ?"
          />
          <div className="flex items-center justify-between">
            <p className="font-bold">{title.length}/300</p>
            <button 
              type="submit"
              className="my-2 rounded-md bg-green-600 px-5 py-2 text-white"
              disabled={disabled}
            >
            Submit
            </button> 
          </div>
        </div>
      </div>
    </form>
  )
}