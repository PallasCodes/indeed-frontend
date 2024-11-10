import { Link } from 'react-router-dom'
import JobSearchBar from '../components/JobSearchBar'
import JobCard from '../components/JobCard'
import { JobPreview } from '../types/jobPreview.interface'
import { apiRequest } from '../api/apiRequest'
import { useState } from 'react'
import JobFullInfo from '../components/JobFullInfo'
import { useGetJob } from '../hooks/useGetJob'

// const jobs: JobPreview[] = [
//   {
//     id: '1',
//     title: 'Junior Software Developer',
//     company: 'Tech Solutions',
//     location: 'Mexico City, Mexico',
//     minSalary: 25000,
//     maxSalary: 35000,
//     jobModality: 'Remote',
//     postulationType: 'Easy Apply',
//     description:
//       'Looking for a junior developer to work on web applications using JavaScript and React.',
//     createAt: new Date('2024-10-28'),
//   },
//   {
//     id: '2',
//     title: 'Senior Backend Engineer',
//     company: 'Global FinTech',
//     location: 'New York, USA',
//     minSalary: 90000,
//     maxSalary: 120000,
//     jobModality: 'Hybrid',
//     postulationType: 'Regular Apply',
//     description:
//       'We are seeking an experienced backend engineer with expertise in Node.js and microservices.',
//     createAt: new Date('2024-11-01'),
//   },
//   {
//     id: '3',
//     title: 'Full Stack Developer',
//     company: 'Innovative Startups Inc.',
//     location: 'Berlin, Germany',
//     minSalary: 60000,
//     maxSalary: 75000,
//     jobModality: 'On-site',
//     postulationType: 'Easy Apply',
//     description:
//       'A fast-growing startup looking for a full stack developer with experience in Vue.js and Node.js.',
//     createAt: new Date('2024-10-30'),
//   },
//   {
//     id: '4',
//     title: 'Data Analyst',
//     company: 'Market Insights',
//     location: 'Toronto, Canada',
//     minSalary: 50000,
//     maxSalary: 65000,
//     jobModality: 'Remote',
//     postulationType: 'Easy Apply',
//     description:
//       'Join our team of data experts to analyze market trends and produce actionable insights.',
//     createAt: new Date('2024-11-02'),
//   },
//   {
//     id: '5',
//     title: 'DevOps Engineer',
//     company: 'Cloud Services Co.',
//     location: 'San Francisco, USA',
//     minSalary: 110000,
//     maxSalary: 130000,
//     jobModality: 'Remote',
//     postulationType: 'Regular Apply',
//     description:
//       'Looking for a DevOps engineer with extensive experience in AWS, Docker, and CI/CD pipelines.',
//     createAt: new Date('2024-10-29'),
//   },
//   {
//     id: '6',
//     title: 'Mobile App Developer',
//     company: 'App Creators Ltd.',
//     location: 'London, UK',
//     minSalary: 55000,
//     maxSalary: 70000,
//     jobModality: 'Hybrid',
//     postulationType: 'Easy Apply',
//     description:
//       'We are seeking a mobile developer proficient in React Native to build cutting-edge mobile applications.',
//     createAt: new Date('2024-11-03'),
//   },
//   {
//     id: '7',
//     title: 'UX/UI Designer',
//     company: 'Creative Agency',
//     location: 'Barcelona, Spain',
//     minSalary: 45000,
//     maxSalary: 60000,
//     jobModality: 'On-site',
//     postulationType: 'Regular Apply',
//     description:
//       'Join our design team to create user-friendly and visually appealing web interfaces.',
//     createAt: new Date('2024-10-31'),
//   },
//   {
//     id: '8',
//     title: 'Project Manager',
//     company: 'Enterprise Solutions',
//     location: 'Sydney, Australia',
//     minSalary: 75000,
//     maxSalary: 90000,
//     jobModality: 'Remote',
//     postulationType: 'Easy Apply',
//     description:
//       'Looking for an experienced project manager to lead cross-functional teams in delivering enterprise software solutions.',
//     createAt: new Date('2024-10-27'),
//   },
//   {
//     id: '9',
//     title: 'Front-end Developer',
//     company: 'E-commerce Platforms',
//     location: 'Los Angeles, USA',
//     minSalary: 80000,
//     maxSalary: 95000,
//     jobModality: 'On-site',
//     postulationType: 'Regular Apply',
//     description:
//       'A front-end developer with solid experience in React.js and Tailwind CSS to build e-commerce websites.',
//     createAt: new Date('2024-11-01'),
//   },
//   {
//     id: '10',
//     title: 'Machine Learning Engineer',
//     company: 'AI Innovations',
//     location: 'Dublin, Ireland',
//     minSalary: 100000,
//     maxSalary: 120000,
//     jobModality: 'Hybrid',
//     postulationType: 'Easy Apply',
//     description:
//       'Work with cutting-edge AI technologies to build and deploy machine learning models at scale.',
//     createAt: new Date('2024-10-29'),
//   },
// ]

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
    const { data, error } = await apiRequest('GET', `/jobs/${jobId}`)
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

      <div className="max-w-[1352px] mx-auto mt-4 px-4 flex">
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
        <div className="ml-6 flex-grow flex-shrink-0">
          {selectedJob && <JobFullInfo job={selectedJob} />}
        </div>
      </div>
    </>
  )
}
