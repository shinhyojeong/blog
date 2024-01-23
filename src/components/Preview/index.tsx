import { REGEX } from '~/utils'

export type PreviewProps = {
  title: string
  content: string
  date: string
  link: string
}

export const Preview = ({ title, content, date, link }: PreviewProps) => (
  <a href={link}>
    <div className="cursor-pointer">
      <p className="text-base text-gray-500">{date}</p>
      <div className="mt-1">
        <h2 className="mb-2">{title}</h2>
        <p className="line-clamp-3 text-ellipsis !text-base text-slate-600">
          {content.replace(REGEX.REMOVE_HTML_TAG, '')}
        </p>
      </div>
    </div>
  </a>
)
