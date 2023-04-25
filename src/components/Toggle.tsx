interface IToggle {
    deletePost: () => void
    setToggle: (toggle:boolean) => void
}

export default function Toggle ({deletePost, setToggle}:IToggle) {

  return(
    <div onClick={() => setToggle(false)} className="fixed left-0 top-0 z-20 h-full w-full bg-black/50">
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-6 rounded-lg bg-white p-12">
        <h1 className="text-2xl font-bold">
            Are you sure you want to delete this post ?
        </h1>
        <p className="text-center text-sm text-red-400">
            This action cannot be undone
        </p>
        <button onClick={deletePost} className="m-auto w-[100px] rounded-lg bg-red-400 p-2 text-white">
            Delete
        </button>
      </div>
    </div>
  )
}