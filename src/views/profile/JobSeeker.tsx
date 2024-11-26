import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ChevronRightIcon,
  EyeIcon,
} from '@heroicons/react/24/solid'
import { JobSeeker as JobSeekerProfile } from '../../types/jobSeeker.interface'
import cvIcon from '../../assets/cvIcon.svg'
import { Link } from 'react-router-dom'

export default function JobSeeker({ profile }: { profile: JobSeekerProfile }) {
  const configMenu = [
    {
      title: 'Competencias',
      description: 'Destaca tus habilidades y experiencia.',
      path: '',
    },
    {
      title: 'Preferencias de empleo',
      description:
        'Guarda datos específicos como el horario y el sueldo mínimo deseado.',
      path: '',
    },
    {
      title: 'Ocultar empleos con estos detalles',
      description:
        'Administra las competencias y las preferencias usadas para ocultar empleos de tu búsqueda.',
      path: '',
    },
    {
      title: 'Listo para trabajar',
      description:
        'Haz que las empresas sepan que estás disponible para empezar a trabajar cuanto antes.',
      path: '',
    },
  ]

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-4xl">
          {profile.user.name} {profile.user.lastName}
        </h1>
        <div className="bg-[#424242] rounded-full w-20 h-20 flex items-center justify-center">
          <h2 className="font-bold text-5xl text-white bg-">
            {profile.user.name && profile.user.name[0]}
            {profile.user.lastName && profile.user.lastName[0]}
          </h2>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="py-4 text-sm mt-3">
          <div className="flex items-center">
            <EnvelopeIcon className="w-6 h-6 text-[#767676] mr-3" />
            <span>{profile.user.email}</span>
          </div>
          <div className="flex items-center my-2">
            <PhoneIcon className="w-6 h-6 text-[#767676] mr-3" />
            <span>{profile.phoneNumber}</span>
          </div>
          <div className="flex items-center">
            <MapPinIcon className="w-6 h-6 text-[#767676] mr-3" />
            <span>{profile.user.location}</span>
          </div>
        </div>
        <Link to="/update-profile">
          <ChevronRightIcon className="w-5 h-5 text -gray-700" />
        </Link>
      </div>
      <div>
        <h3 className="font-bold text-xl mt-7">CV</h3>
        <div className="rounded-lg border border-grayIndeed mt-4 p-4 flex cursor-pointer hover:shadow transition-shadow">
          <img src={cvIcon} alt="CV Icon" className="mr-4" />
          <div>
            <h5 className="font-semibold">CV Indeed</h5>
            <span className="block text-sm text-[#767676]">
              Actualizado el Step 25, 2024
            </span>
            <div className="flex items-center text-sm text-[#767676] mt-[2px]">
              <EyeIcon className="w-5 h-5 mr-1" />
              <span>Que aparezca en los resultados de búsqueda</span>
            </div>
          </div>
          <button className="ml-auto">
            <ChevronRightIcon className="w-5 h-5 text -gray-700" />
          </button>
        </div>
      </div>

      <h2 className="font-bold text-xl mt-9 border-b border-b-gray-300 pb-4">
        Mejora los empleos compatibles
      </h2>
      <div>
        {configMenu &&
          configMenu.map((config) => (
            <div
              key={config.title}
              className="border-b border-b-gray-300 py-4 flex items-center justify-between cursor-pointer hover:bg-[#faf9f8] transition-colors"
            >
              <div className="pr-5">
                <h3 className="font-bold mb-1">{config.title}</h3>
                <span className="text-sm text-[#767676]">
                  {config.description}
                </span>
              </div>
              <button>
                <ChevronRightIcon className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          ))}
      </div>
    </>
  )
}
