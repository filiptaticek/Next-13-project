import Link from "next/link"
import Login from "./Login"
import { getServerSession } from "next-auth/next"
//import authOptions from "../../../app/api/auth/[...nextauth]"
import { authOptions } from "../../authOptions"
import Logged from "./Logged"

export default async function Nav() {

  const session = await getServerSession(authOptions)

  return (
    <nav className="flex items-center justify-between p-8">
      <Link href="/" >
        <button className="mb-2 ml-4 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Home 
        </button>
      </Link>
      <ul>
        {session?.user? <Logged image={session.user.image || ""} />:<Login />}
      </ul>
    </nav>
  )   
}