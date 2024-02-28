import { REGEX } from './regex'

const MONTH = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
] as const

export const formatDate = (date: string) => {
  const [year, month, day] = date.split('T')[0].split('-')

  return `${MONTH[Number(month) - 1]} ${day}, ${year}`
}

const MAX_DESCRIPTION_COUNT = 150

export const formatMetaDescription = (content: string) =>
  content.replace(REGEX.REMOVE_HTML_TAG, '').slice(0, MAX_DESCRIPTION_COUNT)
