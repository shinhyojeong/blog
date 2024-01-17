export type PreviewProps = {
  title: string
  content: string
  date: string
  onClick?: () => void
}

export const Preview = ({ title, content, date, onClick }: PreviewProps) => {
  const handleClick = () => {
    onClick?.()
  }

  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <p className="text-base text-gray-500 ">{date}</p>
      <div className="mt-1">
        <h2 className="mb-2">{title}</h2>
        <p className="line-clamp-3 text-ellipsis text-base text-slate-600">
          {content}
        </p>
      </div>
    </div>
  )
}
