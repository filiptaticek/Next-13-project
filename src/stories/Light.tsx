/* eslint-disable indent */

//component that is used as an example on our storybook client server
import clsx from "clsx"

interface ILight {
  variant: "red" | "yellow" | "green"
}

export function Light({ variant }: ILight) {
  return (
    <div
      className={clsx(
        "w-fit rounded-full border p-6 text-black",
        variant == "red"
          ? "bg-red-500"
          : variant == "green"
          ? "bg-green-500"
          : "bg-yellow-500"
      )}></div>
  )
}
