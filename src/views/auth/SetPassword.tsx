import { useState } from 'react'
import { FormSteps } from './Auth'

export default function SetPassword({ changeStep }: { changeStep: any }) {
  const [password, setPassword] = useState<string>('')

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault()
    changeStep(FormSteps.SET_PASSWORD, { password })
  }

  return (
    <>
      <h1 className="text-xl font-bold">Cree su cuenta.</h1>
      <div className="text-sm my-6">
        Registrarse como pallascodes@gmail.com (No eres tú?)
      </div>
      <form onSubmit={handleSubmit}>
        <label className="form-control">
          <span>
            Contraseña<i>*</i>
          </span>
          <div className="helper">Utilice al menos 8 caracteres</div>
          <input
            type="password"
            className="form-field"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <p className="text-xs mt-6">
          Al crear una cuenta o iniciar sesión, usted reconoce y acepta los
          Términos de Indeed. Además, reconoce nuestras Políticas de Cookies y
          Privacidad. Recibirá mensajes de marketing de Indeed y podrá darlos de
          baja en cualquier momento mediante el link para cancelar la
          suscripción que incluimos en nuestros mensajes, o según se detalla en
          nuestras condiciones.
        </p>
        <button className="btn btn-primary btn-full mt-5">Crear cuenta</button>
      </form>
      <button className="mt-8 font-bold text-primary">
        Un momento, soy una empresa
      </button>
    </>
  )
}
