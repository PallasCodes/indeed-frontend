import { JobPreview } from '../types/jobPreview.interface'

export default function JobCard({
  job,
  className,
}: {
  job: JobPreview
  className?: string
}) {
  return (
    <div
      className={`${className} max-w-[562px] border rounded-lg border-grayIndeed p-4 pt-6 text-sm`}
    >
      <h2 className="text-[20px] font-bold">{job.title}</h2>
      <div className=" my-2">
        {/* <div>{job.company}</div> */}
        <div>{job.location}</div>
      </div>
      <div>
        <span>Postulación vía Indeed</span>
      </div>
      <ul style={{ listStyleType: 'circle' }} className="pl-4 py-5">
        <li>
          <p className="text-[#6f6f6f]">{job.description}</p>
        </li>
      </ul>
      {/* <span className="text-[#6f6f6f] !text-xs">
        {job.createAt.toDateString()}
      </span> */}
    </div>
  )
}
