import { AIcon } from "@/app/lib/definitions";

export function Icon({ svgUrl, twStyle, isSelected }: AIcon) {
  const bg = isSelected ? 'bg-[--secGreen]' : 'bg-[--grey300]'
  return (
    <div
      style={{ mask: `url(${svgUrl}) center / contain no-repeat` }}
      className={`${bg} ${twStyle}`}>
    </div>
  )
}