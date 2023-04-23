interface IButton {
  text: string
  onClick?: any
  main_color?: boolean
}

export const Button = ({ text, onClick }: IButton) => {
  return (
    <button
      className="mb-2 rounded-lg bg-purple-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      onClick={onClick}
    >
      {text}
    </button>
  )
}
