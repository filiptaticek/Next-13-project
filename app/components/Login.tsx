"use client"

import { signIn } from "next-auth/react"

export default function Login () {
  return (
    <li>
      <button onClick={() => signIn()} className="bg-red-500">
        SignIn
      </button>
    </li>
  )
}