import { SvgProps } from '../../types/svgProps.type'

export default function LocationPin({ height, width, className }: SvgProps) {
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
      <path d="M12 2C8.13 2 5 5.13 5 9c0 4.5229 5.1954 11.0927 6.6344 12.8256.1934.2329.5378.2329.7312 0C13.8046 20.0927 19 13.5229 19 9c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
    </svg>
  )
}
