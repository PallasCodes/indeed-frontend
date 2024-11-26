import { useEffect, useState } from 'react'

import Btn from '../../components/base/Btn'
import { useGetOwnProfile } from '../../hooks/useGetOwnProfile'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

export function UpdateJobSeekerProfile() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [location, setLocation] = useState('')
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')

  const user = useSelector((state: RootState) => state.auth.user)

  const { data, error, loading } = useGetOwnProfile(user)

  useEffect(() => {
    if (data) {
      const { profile } = data
      setPhoneNumber(profile.phoneNumber)
      setLastName(profile.user.lastName)
      setName(profile.user.name)
      setLocation(profile.user.location)
    }
  }, [data])

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault()
  }

  return (
    <div className="max-w-[570px] mx-auto my-8">
      <h1 className="text-2xl font-bold">Actualizar Perfil</h1>
      <div className="shadow-lg rounded-xl p-8 mt-4">
        <form onSubmit={handleSubmit}>
          {/* NAME */}
          <label className="form-control mb-4">
            <span>
              Nombre(s)<i>*</i>
            </span>
            <input
              type="text"
              className="form-field"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </label>
          {/* LAST NAME */}
          <label className="form-control mb-4">
            <span>
              Apellido(s)<i>*</i>
            </span>
            <input
              type="text"
              className="form-field"
              required
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </label>
          {/* PHONE NUMBER */}
          <label className="form-control mb-4">
            <span>
              Número celular<i>*</i>
            </span>
            <input
              type="text"
              className="form-field"
              required
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
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
            <Btn
              type="submit"
              label="Actualizar"
              className="btn-primary btn-full mt-5"
            />
          </label>
        </form>
      </div>
    </div>
  )
}
