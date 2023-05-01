"use client"

import Image from "next/image"
import { signOut } from "next-auth/react"
import Link from "next/link"

export default function Logged({image}: {image: string}) {
  return(
    <li className="flex items-center gap-8">
      <button 
        onClick={() =>signOut()} 
        className="mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
            Logout
      </button>
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