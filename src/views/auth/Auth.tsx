import { useState } from 'react'

import Logo from '../../components/base/Logo'
import SetEmail from './SetEmail'
import SelectUserType from './SelectUserType'
import SetPassword from './SetPassword'
import { apiRequest } from '../../api/apiRequest'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

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

  const navigate = useNavigate()
  const { login, signup } = useAuth()

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
          await login(email, payload.password)
        } else {
          await signup(email, payload.password, role)
        }

        navigate('/')
        break
    }
  }

  async function checkIfEmailIsRegistered(email: string): Promise<boolean> {
    const { data, error, message } = await apiRequest(
      'POST',
      '/auth/check-email-registered',
      {
        email,
      },
    )

    if (error) {
      message?.display()
    }

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
