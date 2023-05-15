"use client"

import Image from "next/image"
import { signOut } from "next-auth/react"
import Link from "next/link"
import { Button } from "./Button"

export default function Logged({ image }: { image: string }) {
  return (
    <li className="flex items-center gap-8">
      <Button color="blue" text="Logout " onClick={() => signOut()} />
      <Link href="/dashboard">
        <Image
          width={64}
          height={64}
          src={image}
          alt="Flowbite Logo"
          className="mb-2 w-[85%] rounded-full"
          priority
        />
      </Link>
    </li>
  )
}
