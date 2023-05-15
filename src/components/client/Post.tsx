"use client"
import { IPost } from "../../types"
import Image from "next/image"
import Toggle from "../server/Toggle"
import axios from "axios"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-hot-toast"
import { useState, useRef } from "react"
import Link from "next/link"

export function Post({
  post,
  deleteButton
}: {
  post: IPost
  deleteButton?: boolean
}) {
  const [show, setShow] = useState(false)
  const queryClient = useQueryClient()
  const toastPostID = useRef("")

  const { mutate } = useMutation(
    async () =>
      await axios.delete(`/api/post/deletePost/${post.id.toString()}`),
    {
      onError: () => {
        toast.success("Post has not been deleted.", { id: "" })
        toast.remove(toastPostID.current)
      },
      onSuccess: () => {
        toast.success("Post has been deleted.", { id: "" })
        queryClient.invalidateQueries(["allPosts"])
        toast.remove(toastPostID.current)
      }
    }
  )

  const deletePost = () => {
    toastPostID.current = toast.loading("Deleting your post...")
    mutate()
  }

  console.log(post)

  return (
    <div className="rounded-lg bg-white p-8">
      <div className="flex place-items-center gap-4">
        <Image
          src={post.user?.image}
          alt="avatar"
          width={40}
          height={40}
          className="rounded-full"
          priority
        />
        <h3 className="font-bold text-gray-700">{post.user?.name}</h3>
      </div>
      <div className="my-8">
        <p className="break-all">{post.title}</p>
      </div>
      <div className="mt-8 flex gap-4">
        <Link href={`/post/${post.id}`}>
          <p className="text-sm font-bold text-gray-700">
            {post.comments?.length} Comments
          </p>
        </Link>
        {deleteButton && (
          <p
            className="cursor-pointer font-bold text-red-500"
            onClick={() => setShow(!show)}>
            Delete
          </p>
        )}
      </div>
      {show && <Toggle setToggle={setShow} deletePost={deletePost} />}
    </div>
  )
}
