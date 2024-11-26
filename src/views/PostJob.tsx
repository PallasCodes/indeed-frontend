import { useState } from 'react'
import Select from 'react-select'
import { useNavigate } from 'react-router-dom'

import Btn from '../components/base/Btn'
import { apiRequest } from '../api/apiRequest'

export function PostJob() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [jobType, setJobType] = useState()
  const [location, setLocation] = useState('')
  const [jobModality, setJobModality] = useState()
  const [appDeadline, setAppDeadline] = useState('')
  const [salaryMin, setSalaryMin] = useState(0)
  const [salaryMax, setSalaryMax] = useState(0)

  const navigate = useNavigate()

  const jobMadalities = [
    { value: 'Hybrid', label: 'Hybrid' },
    { value: 'Remote (Home Office)', label: 'Remote (Home Office)' },
    { value: 'In Person', label: 'In Person' },
  ]

  const jobTypes = [
    { value: 'Full Time', label: 'Full Time' },
    { value: 'Part Time', label: 'Part Time' },
    { value: 'Contract', label: 'Contract' },
  ]

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault()

    const payload = {
      title,
      description,
      jobType: jobType.value, // TODO: fix this
      location,
      jobModality: jobModality.value,
      appDeadline,
      salaryMin,
      salaryMax,
    }

    const { data, error, message } = await apiRequest('POST', '/jobs', payload)

    // TODO: fix bug, message doesn't exist
    message?.display()

    // TODO: redirect to job description
    if (!error) navigate('/')
  }

  return (
    <div className="max-w-[570px] mx-auto my-8">
      <h1 className="text-2xl font-bold">Publicar Vacante</h1>
      <div className="shadow rounded-xl p-8 mt-4">
        <form onSubmit={handleSubmit}>
          {/* JOB TITLE */}
          <label className="form-control mb-4">
            <span>
              Título del empleo<i>*</i>
            </span>
            <input
              type="text"
              className="form-field"
              required
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </label>
          {/* JOB DESCRIPTION */}
          <label className="form-control mb-4">
            <span>
              Descripción del empleo<i>*</i>
            </span>
            <textarea
              className="form-field"
              required
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </label>
          {/* SALARY */}
          <label className="form-control mb-4">
            <span>
              Salario<i>*</i>
            </span>
            <div className="flex gap-3">
              <div>
                <span className="text-sm !font-normal text-gray-700">
                  Mínimo
                </span>
                <input
                  type="number"
                  className="form-field"
                  required
                  onChange={(e) => setSalaryMin(+e.target.value)}
                  value={salaryMin}
                />
              </div>
              <div>
                <span className="text-sm !font-normal text-gray-700">
                  Máximo
                </span>
                <input
                  type="number"
                  className="form-field"
                  required
                  onChange={(e) => setSalaryMax(+e.target.value)}
                  value={salaryMax}
                />
              </div>
            </div>
          </label>
          {/* JOB TYPE */}
          <label className="form-control mb-4">
            <span>
              Tipo de empleo<i>*</i>
            </span>
            <Select
              className="form-field"
              required
              onChange={(option: any) => setJobType(option)}
              value={jobType}
              options={jobTypes}
            />
          </label>
          {/* LOCATION */}
          <label className="form-control mb-4">
            <span>
              Ubicación<i>*</i>
            </span>
            <input
              type="text"
              className="form-field"
              required
              onChange={(e) => setLocation(e.target.value)}
              value={location}
            />
          </label>
          {/* JOB MODALITY */}
          <label className="form-control mb-4">
            <span>
              Modalidad<i>*</i>
            </span>
            <Select
              className="form-field"
              required
              onChange={(option: any) => setJobModality(option)}
              value={jobModality}
              options={jobMadalities}
            />
          </label>
          {/* APPLICATION DEADLINE */}
          <label className="form-control mb-4">
            <span>
              Fecha límite de postulación<i></i>
            </span>
            <input
              type="date"
              className="form-field"
              onChange={(e) => setAppDeadline(e.target.value)}
              value={appDeadline}
            />
          </label>
          <Btn
            type="submit"
            label="Publicar"
            className="btn-primary btn-full mt-5"
          />
        </form>
      </div>
    </div>
  )
}
