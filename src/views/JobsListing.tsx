import { Link } from 'react-router-dom'
import JobSearchBar from '../components/JobSearchBar'
import JobCard from '../components/JobCard'
import { JobPreview } from '../types/jobPreview.interface'
import { apiRequest } from '../api/apiRequest'
import { useState } from 'react'
import JobFullInfo from '../components/JobFullInfo'

export default function JobsListing() {
  const [jobs, setJobs] = useState<JobPreview[]>([])
  const [selectedJob, setSelectedJob] = useState(null)

  async function findJobs(location?: string, title?: string) {
    const { data } = await apiRequest('GET', '/jobs', null, {
      params: { location, title },
    })
    setJobs(data.jobs)
  }

  async function handleJobCardClick(jobId: string) {
    const { data } = await apiRequest('GET', `/jobs/${jobId}`)
    setSelectedJob(data.job)
  }

  return (
    <>
      <div className="my-7 mx-auto">
        <JobSearchBar className="mx-auto" findJobs={findJobs} />
      </div>
      <div className="max-w-[435px] mx-auto text-center">
        <Link to="/" className="font-bold text-primary">
          Publica tu CV
        </Link>
        <span> - Postúlate a miles de empleos desde cualquier dispositivo</span>
      </div>

      <div className="!max-w-[1352px] mx-auto mt-4 px-4 flex">
        <div className="flex-grow-0 flex-shrink-0">
          {jobs &&
            jobs.map((job: JobPreview) => (
              <JobCard
                job={job}
                key={job.id}
                className="mb-3"
                handleJobCardClick={handleJobCardClick}
              />
            ))}
        </div>
        <div className="ml-6 w-full sticky top-4 mb-4 h-[96svh]">
          {selectedJob && <JobFullInfo job={selectedJob} />}
        </div>
      </div>
    </>
  )
}
