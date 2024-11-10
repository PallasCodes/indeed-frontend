import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { Message, MessageComponent, MessageType } from '../utils/message'

export const api = axios.create({ baseURL: import.meta.env.VITE_API_URL })

export interface Reponse {
  message: Message | null
  error: boolean
  data: any
}

export interface CustomResponse {
  message: Message
  error: boolean

  [key: string]: any
}

// TODO: add isloading option

export async function apiRequest(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<Reponse> {
  try {
    let axiosResponse: AxiosResponse<CustomResponse>
    const response: Reponse = {
      message: null,
      error: false,
      data: null,
    }

    switch (method) {
      case 'GET':
        axiosResponse = await api.get(url, config)
        break
      case 'POST':
        axiosResponse = await api.post(url, data, config)
        break
      case 'PUT':
        axiosResponse = await api.put(url, data, config)
        break
      case 'DELETE':
        axiosResponse = await api.delete(url, config)
        break
      default:
        throw new Error(`Unsupported method: ${method}`)
    }

    const { message, error, ...responseData } = axiosResponse.data

    response.message = message
    response.data = responseData
    response.error = error

    return response
  } catch (error: any) {
    console.error(error)

    return {
      data: null,
      error: true,
      message: handleRequestError(),
    }
  }
}

function handleRequestError(): Message {
  const message = new Message({
    component: MessageComponent.TOAST,
    message: 'Ocurrió un error, inténtalo más tarde',
    dialogTitle: 'Error',
    type: MessageType.ERROR,
  })

  return message
}
