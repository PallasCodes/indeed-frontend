interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
}

export default function Modal({
  isOpen,
  onClose,
  children,
  className = '',
}: ModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* MODAL CONTAINER */}
      <div
        className={`bg-white rounded-lg shadow-lg p-6 max-w-lg w-full ${className}`}
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>

        {/* MODAL CONTENT */}
        {children}
      </div>
    </div>
  )
}
