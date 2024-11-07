import { useState } from 'react'
import LocationPin from './icons/LocationPin'
import MagnifyingGlass from './icons/MagnifyingGlass'

export default function JobSearchBar({
  className,
  findJobs,
}: {
  className?: string
  findJobs: any
}) {
  const [location, setLocation] = useState<string>('')
  const [title, setTitle] = useState<string>('')

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault()
    findJobs(location, title)
  }

  return (
    <form
      className={`${className} border border-[#949494] flex max-w-[836px] px-2 shadow-xl items-center rounded-lg`}
      onSubmit={handleSubmit}
    >
      <div className="flex-grow flex items-center">
        <span className="mx-2">
          <MagnifyingGlass className="w-6 h-6" />
        </span>
        <input
          type="text"
          placeholder="Título del empleo, palabras clave o empresa"
          className="h-[3.75rem]"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className="w-[1px] bg-grayIndeed h-10"></div>
      <div className="flex-grow flex items-center">
        <span className="mx-2">
          <LocationPin className="w-6 h-6" />
        </span>
        <input
          type="text"
          placeholder="Ciudad, región, código postal o trabajo remoto"
          className="h-full"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
        />
      </div>
      <button className="btn btn-primary text-smd !px-4 !py-3">
        Buscar empleos
      </button>
    </form>
  )
}
