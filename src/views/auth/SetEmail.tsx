import { useState } from 'react'
import { FormSteps } from './Auth'

export default function SetEmail({ changeStep }: { changeStep: any }) {
  const [email, setEmail] = useState<string>('')

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    changeStep(FormSteps.SET_EMAIL, { email })
  }

  return (
    <>
      <h1 className="font-bold text-xl">
        ¿Está listo para dar el siguiente paso?
      </h1>
      <span className="block mt-2 text-gray-500 mb-4">
        Cree una cuenta o inicie sesión
      </span>
      <p className="text-xs">
        Al crear una cuenta o iniciar sesión, usted reconoce y acepta los
        Términos de Indeed. Además, reconoce nuestras Políticas de Cookies y
        Privacidad. Recibirá mensajes de marketing de Indeed y podrá darlos de
        baja en cualquier momento mediante el link para cancelar la suscripción
        que incluimos en nuestros mensajes, o según se detalla en nuestras
        condiciones.
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          <span className="font-bold mt-6 block">
            Dirección de email <span className="text-red-500">*</span>
          </span>
          <input
            type="email"
            className="form-field w-full py-[9px] px-3 border border-[#2d2d2d] active:border-primary"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* TODO: add icon */}
        </label>
        <button className="btn btn-primary w-full mt-6 flex justify-center !py-[9px]">
          Continuar
        </button>
      </form>
    </>
  )
}
