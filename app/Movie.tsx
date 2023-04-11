import Link from "next/link"
import Image from "next/image"


export default function Movie ({title, id, posterPath, releaseDate}:any) {
    const imagePath = "https://image.tmdb.org/t/p/original"

    return(
        <div className="mb-10 w-[20%] text-center" key={id}>
            <h1 className="font-bold">{title}</h1>
            <p>{releaseDate}</p>
            <Link href={id.toString()}>
                {<Image className="m-auto" src={imagePath+posterPath} width={200} height={400} alt="" />}
            </Link>

        </div>
    )
}