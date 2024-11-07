import { SvgProps } from '../../types/svgProps.type'

export default function MagnifyingGlass({
  height,
  width,
  className,
}: SvgProps) {
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
        d="M14.4959 15.9106c-1.2016.9066-2.6973 1.4441-4.3185 1.4441C6.2134 17.3547 3 14.1413 3 10.1774 3 6.2134 6.2134 3 10.1774 3c3.9639 0 7.1773 3.2134 7.1773 7.1774 0 1.6215-.5377 3.1174-1.4445 4.3191l4.7969 4.7969c.3906.3905.3906 1.0237 0 1.4142-.3905.3906-1.0236.3906-1.4142 0l-4.797-4.797zm.8588-5.7332c0 2.8593-2.318 5.1773-5.1773 5.1773C7.318 15.3547 5 13.0367 5 10.1774 5 7.318 7.318 5 10.1774 5c2.8593 0 5.1773 2.318 5.1773 5.1774z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}
