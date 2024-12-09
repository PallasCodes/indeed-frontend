import { useDispatch } from 'react-redux'
import { api, apiRequest } from '../api/apiRequest'
import { setUser, setAuthIsReady } from '../store/slices/authSlice'

export const useAuth = () => {
  const dispatch = useDispatch()

  function setAuthUser(user: any) {
    api.defaults.headers.common['Authorization'] = `Bearer ${user.token}`
    localStorage.setItem('user', JSON.stringify(user))
    dispatch(setUser(user))
    dispatch(setAuthIsReady(true))
  }

  async function signup(email: string, password: string, role: string) {
    const { data, message, error } = await apiRequest('POST', '/auth/signup', {
      email,
      role,
      password,
    })

    if (error) message?.display()

    setAuthUser(data.user)
  }

  async function login(email: string, password: string) {
    const { data, message, error } = await apiRequest('POST', '/auth/login', {
      email,
      password,
    })

    if (error) message?.display()

    setAuthUser(data.user)
  }

  function logout() {
    dispatch(setUser(null))
    api.defaults.headers.common['Authorization'] = ''
    localStorage.removeItem('user')
  }

  return {
    login,
    signup,
    setAuthUser,
    logout,
  }
}
