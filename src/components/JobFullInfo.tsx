import { ArrowTopRightOnSquareIcon } from '@heroicons/react/16/solid'
import { BookmarkIcon } from '@heroicons/react/24/outline'
import { USDollar } from '../utils/numberToCurrency'
import Btn from './base/Btn'

export default function JobFullInfo({ job }: { job: any }) {
  return (
    <div className="w-full border border-grayIndeed rounded-lg h-full overflow-y-scroll relative">
      <header className="pb-3 shadow px-4 sticky top-0 bg-white pt-10">
        <h2 className="text-2xl font-bold">{job.title}</h2>
        <a
          href={job.employer.website}
          target="_blank"
          className="border-b border-gray-600"
        >
          <span>{job.employer.companyName}</span>
          <ArrowTopRightOnSquareIcon className="w-4 h-4 inline ml-1 mb-1" />
        </a>
        <p>{job.location}</p>
        <p>
          {USDollar.format(job.salaryMin)} a {USDollar.format(job.salaryMax)}{' '}
          por mes - {job.jobType}
        </p>
        <div className="flex items-center">
          <Btn label="Postularse ahora" className="btn-primary btn-lg" />
          <Btn className="btn-text btn-lg">
            <BookmarkIcon className="w-6 h-6" />
          </Btn>
          <Btn className="btn-text btn-lg">
            <BookmarkIcon className="w-6 h-6" />
          </Btn>
        </div>
      </header>
      <div className="py-2 px-4 border-b border-grayIndeed">
        <h2 className="font-bold text-xl mt-4">Información del empleo</h2>
        <p className="text-xs mt-1 text-[#767676]">
          Así es como las especificaciones del empleo se alinean con tu perfil.
        </p>
      </div>
      <div className="py-2 px-4">
        <h2 className="font-bold text-xl mt-4">
          Descripción completa del empleo
        </h2>
        <p>{job.description}</p>
      </div>
    </div>
  )
}
