import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Profile from '../icons/Profile'
import Hamburguer from '../icons/Hamburguer'
import Logo from '../base/Logo'
import './Navbar.css'
import { RootState } from '../../store'
import { useAuth } from '../../hooks/useAuth'

// todo fix desktop navbar styles

export default function Navbar() {
  const { logout } = useAuth()
  const user = useSelector((state: RootState) => state.auth.user)

  return (
    <nav className="py-2 flex justify-between items-center px-4 sm:py-5 sm:px-[22px] sm:border border-grayIndeed">
      <div className="flex items-end h-full">
        <Link to="/">
          <Logo className="h-5 w-[75px] sm:h-7 sm:w-28 mr-6" />
        </Link>
        <div className="h-full">
          <ul className="flex text-smd desktop-navbar h-full">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/">Evaluaciones de empresa</Link>
            </li>
            <li>
              <Link to="/">Puestos y Sueldos</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* hidden in mobile */}
      {!user && (
        <div className="text-smd hidden sm:flex">
          <Link to="/auth" className="font-bold text-primary">
            Ingresar
          </Link>
          <div className="w-[1px] bg-gray-300 mx-5 h-6"></div>
          <Link to="/auth">Empresas/Publicar empleos</Link>
        </div>
      )}
      {user && (
        <div className="flex">
          <button
            onClick={logout}
            className="text-primary font-bold text-sm mr-8"
          >
            Cerrar sesión
          </button>
          <Link className="text-primary font-bold text-sm" to={'/profile'}>
            Perfil
          </Link>
        </div>
      )}

      {/* hidden in desktop */}
      <div className="flex items-center sm:hidden">
        <button className="btn btn-primary mr-4">
          <Profile className="mr-2 w-6 h-6" />
          <Link to="/auth">Ingresar</Link>
        </button>
        <span>
          <Hamburguer className="w-6 h-6" />
        </span>
      </div>
    </nav>
  )
}
