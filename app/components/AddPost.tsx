"use client"

import { useState } from "react"

export default function AddPost () {

  const [title, setTitle] = useState("")

  const onSubmit = (e:any) => {
    e.preventDefault()
    console.log(title)
  }

  return(
    <form>
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
              disabled={title === ""}
              onSubmit={onSubmit}
            >
            Submit
            </button> 
          </div>
        </div>
      </div>
    </form>
  )
}