import { useEffect, useState } from 'react'
import { apiRequest } from '../api/apiRequest'

export const useGetJob = (id: string) => {
  const [_data, setData] = useState<any>(null)
  const [_error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const fetchData = async () => {
    setLoading(true)
    setError(null)

    const { data, error } = await apiRequest('GET', `/jobs/${id}`)

    setData(data)

    if (error) {
      setError('Ocurrió un error, vuelve a intentarlo más tarde')
    }
    setLoading(false)
  }

  const refetch = () => {
    fetchData()
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { data: _data, error: _error, loading, refetch }
}
