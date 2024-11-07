import WelcomeIllustration from '../../assets/welcomeIllustration.svg'
import { FormSteps } from './Auth'

export default function SelectUserType({ changeStep }: { changeStep: any }) {
  function selectUserType(role: string) {
    changeStep(FormSteps.SELECT_USER_TYPE, { role })
  }

  return (
    <>
      <img src={WelcomeIllustration} className="max-w-[205px] mx-auto w-full" />
      <span className="block text-center font-bold text-xl text-[#595959] mt-2">
        Le damos la bienvenida!
      </span>
      <h1 className="font-bold mt-5">¿Listo para dar el siguiente paso?</h1>
      <span className="text-[#595959] text-sm">
        Cree una cuenta para obtener las herramientas que necesita
      </span>
      <div className="mt-5">
        <button
          className="btn btn-white btn-full"
          onClick={() => selectUserType('jobSeeker')}
        >
          Candidato
        </button>
        <button
          className="btn btn-white btn-full mt-2"
          onClick={() => selectUserType('employee')}
        >
          Empresa
        </button>
      </div>
    </>
  )
}
