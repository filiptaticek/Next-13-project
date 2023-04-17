"use client"

import { signIn } from "next-auth/react"

export default function Login () {
  return (
    <li>
      <button onClick={() => signIn()} className="mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Log in
      </button>
    </li>
  )
}