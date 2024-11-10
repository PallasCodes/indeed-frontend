interface BtnProps {
  className?: string
  label?: string
  children?: React.ReactNode
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Btn({
  className,
  label,
  children,
  disabled = false,
  type = 'button',
  onClick,
}: BtnProps) {
  return (
    <button
      className={`btn ${className}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
      <span>{label}</span>
    </button>
  )
}
