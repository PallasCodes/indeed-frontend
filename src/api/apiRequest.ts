import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export const api = axios.create({ baseURL: import.meta.env.VITE_API_URL })

/**
 * Reusable function to make API calls using Axios.
 *
 * @param {string} method - HTTP method (GET, POST, PUT, DELETE, etc.)
 * @param {string} url - The endpoint URL.
 * @param {any} [data] - Payload to send with the request (for POST, PUT, DELETE).
 * @param {AxiosRequestConfig} [config] - Additional Axios config (headers, params, etc.)
 * @returns {Promise<AxiosResponse>} - The response from the API.
 * @throws {Error} - Throws an error if the request fails.
 */
export async function apiRequest(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse> {
  try {
    let response: AxiosResponse

    switch (method) {
      case 'GET':
        response = await api.get(url, config)
        break
      case 'POST':
        response = await api.post(url, data, config)
        break
      case 'PUT':
        response = await api.put(url, data, config)
        break
      case 'DELETE':
        response = await api.delete(url, config)
        break
      default:
        throw new Error(`Unsupported method: ${method}`)
    }

    return response
  } catch (error: any) {
    // Error handling: Customize as needed
    if (error.response) {
      // Request made and server responded
      console.error(`Error: ${error.response.data}`)
      console.error(`Status: ${error.response.status}`)
      console.error(`Headers: ${JSON.stringify(error.response.headers)}`)
      throw new Error(
        `API call failed with status code ${error.response.status}`,
      )
    } else if (error.request) {
      // Request was made but no response was received
      console.error('Error: No response received from the API')
      throw new Error('No response received from the API')
    } else {
      // Something happened in setting up the request
      console.error('Error:', error.message)
      throw new Error('An error occurred during the API request')
    }
  }
}
