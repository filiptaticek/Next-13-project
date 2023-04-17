//if we fetch some data, we want the component to be server-side, so we are not using useState in this case

import AddPost from "./components/AddPost"

export default async function Home() {

  return (
    <main>
      <p>Home page</p>
      <AddPost />
    </main>
  )
}
