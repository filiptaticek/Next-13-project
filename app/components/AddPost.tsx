"use client"

import { useState } from "react"

export default function AddPost () {

  const [title, setTitle] = useState("")

  return(
    <form>
      <div>
        <textarea 
          onChange={(e) =>setTitle(e.target.value)} 
          className="bg-gray-200 rounded-md p-8 border border-black"
          name="title" 
          value={title} 
          placeholder="What's your on your mind ?"
        />
      </div>
    </form>
  )
}