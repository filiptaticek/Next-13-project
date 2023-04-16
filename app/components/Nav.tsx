import Link from "next/link"
import Login from "./Login"

export default async function Nav() {
  return (
    <nav className="flex items-center justify-between p-8">
      <Link href="/" >
            Ich gehe nirgendwo hin
      </Link>
      <ul>
        <Login />
      </ul>
    </nav>
  )   
}