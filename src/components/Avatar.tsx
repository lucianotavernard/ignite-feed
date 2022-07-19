type AvatarProps = Pick<HTMLImageElement, 'src' | 'alt'> & {
  hasBorder?: boolean
}

export function Avatar({ hasBorder, ...rest }: AvatarProps) {
  const className = hasBorder
    ? 'w-14 h-14 p-0.5 rounded-lg border-2 border-[#00875F]'
    : 'w-14 h-14 p-0.5 rounded-lg'

  return <img className={className} {...rest} />
}
