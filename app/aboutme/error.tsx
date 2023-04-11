//this file handles errors that occure on about me page

"use client"

export default function Error ({error, reset}:{error:any,reset:any}){
    return(
        <div>
            This is not working: {error.message}
            <button onClick={() => reset()}>Reload</button>
        </div>
    )
}