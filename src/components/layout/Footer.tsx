import { Link } from 'react-router-dom'

import './Footer.css'

export default function Footer() {
  return (
    <footer className="border-t border-rgb(45, 45, 45) text-smd pt-3 pb-8 px-4">
      <div className="flex justify-between max-w-[1600px] mx-auto flex-wrap">
        <div>
          <ul className="flex footer-nav">
            <li>
              <Link to="/">Orientación profesional</Link>
            </li>
            <li>
              <Link to="/">Ver empleos</Link>
            </li>
            <li>
              <Link to="/">Salarios</Link>
            </li>
            <li>
              <Link to="/">Eventos Indeed</Link>
            </li>
            <li>
              <Link to="/">Países</Link>
            </li>
            <li>
              <Link to="/">Acerca de</Link>
            </li>
            <li>
              <Link to="/">Centro de asistencia</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex footer-nav">
            <li>
              <Link to="/">© {new Date().getFullYear()} Indeed</Link>
            </li>
            <li>
              <Link to="/">Accesibilidad en Indeed</Link>
            </li>
            <li>
              <Link to="/">
                Centro de privacidad y Preferencias de publicidad
              </Link>
            </li>
            <li>
              <Link to="/">Condiciones</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
