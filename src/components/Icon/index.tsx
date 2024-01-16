import { IconKeys } from '~/constants'
import { ICONS } from '~/constants'

export type IconProps = {
  type: IconKeys
  width?: number
  height?: number
}

export const Icon = ({ type, width = 18, height = width }: IconProps) => {
  const { viewBox, path } = ICONS[type]

  return (
    <svg viewBox={viewBox} width={width} height={height}>
      <path d={path} />
    </svg>
  )
}
