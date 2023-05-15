interface IButton {
  text: string
  onClick?: any
  color: "blue" | "green"
  disabled?: boolean
}

export const Button = ({ text, onClick, color, disabled }: IButton) => {
  return (
    <button
      className={
        color === "blue"
          ? "mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
          : "mb-2 mr-2 rounded-lg bg-green-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-300"
      }
      disabled={disabled}
      onClick={onClick}>
      {text}
    </button>
  )
}
