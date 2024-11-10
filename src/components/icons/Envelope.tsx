import { SvgProps } from '../../types/svgProps.type'

export default function Hamburguer({ height, width, className }: SvgProps) {
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
      <path
        fillRule="evenodd"
        d="M4.3538 4c-1.1046 0-2 .8954-2 2v12c0 1.1046.8954 2 2 2h16c1.1045 0 2-.8954 2-2V6c0-1.1046-.8955-2-2-2h-16zm2.448 3.5834c-.45-.32-1.0743-.2145-1.3944.2356-.32.45-.2146 1.0744.2355 1.3944l5.9239 4.2119a1.5 1.5 0 001.7548-.0118l5.7527-4.208c.4457-.326.5428-.9517.2167-1.3975-.3261-.4457-.9517-.5427-1.3975-.2167l-5.4616 3.9951-5.63-4.003z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}
