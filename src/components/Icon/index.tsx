import { ICONS } from '~/constants'
import type { IconKeys } from '~/constants'

export type IconProps = {
  type: IconKeys
  width?: number
  height?: number
  color?: string
}

export const Icon = ({
  type,
  width = 18,
  height = width,
  color = 'black'
}: IconProps) => {
  const { viewBox, path } = ICONS[type]

  return (
    <svg fill={color} height={height} viewBox={viewBox} width={width}>
      <path d={path} />
    </svg>
  )
}
