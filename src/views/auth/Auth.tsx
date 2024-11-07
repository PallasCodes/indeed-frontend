import { useState } from 'react'
import { useDispatch } from 'react-redux'

import Logo from '../../components/base/Logo'
import SetEmail from './SetEmail'
import SelectUserType from './SelectUserType'
import SetPassword from './SetPassword'
import { apiRequest, api } from '../../api/apiRequest'
import { setUser } from '../../store/slices/authSlice'

export enum FormSteps {
  SET_EMAIL = 'setEmail',
  SELECT_USER_TYPE = 'selectUserType',
  SET_PASSWORD = 'setPassword',
}

export default function Signup() {
  const [step, setStep] = useState<FormSteps>(FormSteps.SET_EMAIL)
  const [email, setEmail] = useState<string>('')
  const [emailIsRegistered, setEmailIsRegistered] = useState<boolean>()
  const [role, setRole] = useState<string>('')

  const dispatch = useDispatch()

  async function changeStep(step: FormSteps, payload: any) {
    switch (step) {
      case FormSteps.SET_EMAIL:
        setEmail(payload.email)
        const isRegistered = await checkIfEmailIsRegistered(payload.email)
        setEmailIsRegistered(isRegistered)

        if (isRegistered) {
          setStep(FormSteps.SET_PASSWORD)
        } else {
          setStep(FormSteps.SELECT_USER_TYPE)
        }
        break

      case FormSteps.SELECT_USER_TYPE:
        setRole(payload.role)
        setStep(FormSteps.SET_PASSWORD)
        break

      case FormSteps.SET_PASSWORD:
        if (emailIsRegistered) {
          login(email, payload.password)
        } else {
          signup(email, payload.password, role)
        }

        break
    }
  }

  async function signup(email: string, password: string, role: string) {
    const { data } = await apiRequest('POST', '/auth/signup', {
      email,
      role,
      password,
    })

    // TODO: implement custom response in axios req

    api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
    dispatch(setUser(data))
    console.log(data)
  }

  async function login(email: string, password: string) {
    const { data } = await apiRequest('POST', '/auth/login', {
      email,
      password,
    })

    api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
    dispatch(setUser(data))
    console.log(data)
  }

  async function checkIfEmailIsRegistered(email: string): Promise<boolean> {
    const { data } = await apiRequest('POST', '/auth/check-email-registered', {
      email,
    })

    return data.emailIsRegistered
  }

  return (
    <>
      <Logo className="mx-auto w-[113px] h-[30px] mt-20 mb-10" />
      <div className="auth-card">
        {step === FormSteps.SET_EMAIL && <SetEmail changeStep={changeStep} />}
        {step === FormSteps.SELECT_USER_TYPE && (
          <SelectUserType changeStep={changeStep} />
        )}
        {step === FormSteps.SET_PASSWORD && (
          <SetPassword changeStep={changeStep} />
        )}
      </div>
    </>
  )
}
