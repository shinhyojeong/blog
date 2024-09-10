import { REGEX } from '~/utils'
import { Box } from '../Box'
import { Tag } from '../Tag'

export type PreviewProps = {
  tag: string
  title: string
  content: string
  date: string
  link: string
}

export const Preview = ({ title, content, tag, date, link }: PreviewProps) => (
  <a href={link}>
    <Box className="p-6">
      <div className="cursor-pointer">
        <p className="text-base text-gray-500">{date}</p>
        <div className="mt-1">
          <h2 className="mb-2">{title}</h2>
          <p className="leading-3.5 line-clamp-3 text-ellipsis text-sm text-slate-600">
            {content.replace(REGEX.REMOVE_HTML_TAG, '')}
          </p>
        </div>
        <div className="mt-4">
          <Tag>{tag}</Tag>
        </div>
      </div>
    </Box>
  </a>
)
