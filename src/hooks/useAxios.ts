import { useState, useEffect } from 'react'
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

// Definir los tipos del hook
export interface UseAxiosResult<T> {
  data: T | null
  error: string | null
  loading: boolean
  refetch: () => void
}

// Hook personalizado para usar axios
export const useAxios = <T = any>(
  config: AxiosRequestConfig,
): UseAxiosResult<T> => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  // Función para realizar la petición
  const fetchData = async () => {
    setLoading(true)
    setError(null) // Resetea el error antes de cada petición

    try {
      const response: AxiosResponse<T> = await axios(config)
      setData(response.data) // Almacena los datos recibidos
    } catch (err) {
      const axiosError = err as AxiosError
      setError(axiosError.message || 'Error desconocido') // Maneja el error
    } finally {
      setLoading(false) // Termina la carga
    }
  }

  // Refetch permite volver a ejecutar la petición manualmente
  const refetch = () => {
    fetchData()
  }

  useEffect(() => {
    // Ejecuta la petición cuando se monta el componente
    fetchData()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return { data, error, loading, refetch }
}
