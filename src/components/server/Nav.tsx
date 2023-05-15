import Link from "next/link"
import Login from "../client/Login"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../authOptions"
import Logged from "../client/Logged"
import { Button } from "../client/Button"

export default async function Nav() {
  const session = await getServerSession(authOptions)

  return (
    <nav className="flex items-center justify-between p-8">
      <Link href="/">
        <Button color="green" text="Home" />
      </Link>
      <ul>
        {session?.user ? (
          <Logged image={session.user.image || ""} />
        ) : (
          <Login />
        )}
      </ul>
    </nav>
  )
}
