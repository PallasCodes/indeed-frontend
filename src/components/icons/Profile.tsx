import { SvgProps } from '../../types/svgProps.type'

export default function Profile({ height, width, className }: SvgProps) {
  return (
    <svg
      className={className}
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      role="img"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 12c2.4862 0 4.5-2.0137 4.5-4.5S14.4862 3 12 3C9.5137 3 7.5 5.0137 7.5 7.5S9.5137 12 12 12zm0 2.25c-3.0038 0-9 1.5075-9 4.5v1.75a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-1.75c0-2.9925-5.9963-4.5-9-4.5z"></path>
    </svg>
  )
}
