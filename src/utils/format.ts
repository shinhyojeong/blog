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
