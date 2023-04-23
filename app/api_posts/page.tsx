async function getData () {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await result.json()
  return data
}

//this is how to correctly return data in Next 13

export default async function AboutMePage () {
  const data = await getData()

  

  return (
    <div>
      <h1>Some of the posts:</h1>
      {data.map((post: any) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )
      )}
    </div>
  )
}