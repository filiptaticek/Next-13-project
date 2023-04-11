import Image from "next/image"

export default async function Movie ({params}:{params:any}) {

    const imagePath = "https://image.tmdb.org/t/p/original"
    const {movie} = params
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`)
    const res = await data.json()

    return(
        <div className="text-center">
            <h1>{res.title}</h1>
            <h1>{res.release_date}</h1>
            {<Image className="m-auto" src={imagePath+res.poster_path} width={200} height={400} alt="" />}
            <p>Runtime: {res.runtime} minutes</p>
            <p>{res.released}</p>
            <p className="mt-10">{res.overview}</p>
        </div>
    )
}