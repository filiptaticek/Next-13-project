import Link from "next/link"
import Login from "./Login"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../pages/api/auth/[...nextauth]"
import Logged from "./Logged"

export default async function Nav() {

  const session = await getServerSession(authOptions)
  console.log(session)

  return (
    <nav className="flex items-center justify-between p-8">
      <Link href="/" >
            Ich gehe nirgendwo hin
      </Link>
      <ul>
        {session?.user? <Logged image={session.user.image || ""} />:<Login />}
      </ul>
    </nav>
  )   
}