//if we fetch some data, we want the component to be server-side, so we are not using useState in this case
import Movie from "./Movie"

export default async function Home() {

  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const result = await data.json()

  return (
    <main>
      <div className="flex flex-wrap">
      {result.results.map((div: any) => {
        return(
          <Movie title={div.title} key={div.id} id={div.id} posterPath={div.poster_path} releaseDate={div.release_date} />
          )
        })}
      </div>
    </main>
  )
}
