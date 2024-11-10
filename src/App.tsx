import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from './store'
import { useEffect } from 'react'

import JobsListing from './views/JobsListing'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Auth from './views/auth/Auth'
import { useAuth } from './hooks/useAuth'
import Profile from './views/profile/Profile'

function App() {
  const { setAuthUser } = useAuth()
  const user = useSelector((state: RootState) => state.auth.user)

  useEffect(() => {
    let authUser = localStorage.getItem('user')

    if (authUser) {
      authUser = JSON.parse(authUser)
      setAuthUser(authUser)
    }
  }, [])

  return (
    <>
      <BrowserRouter>
        <div className="h-screen flex flex-col justify-between">
          <div>
            <Navbar />

            <Routes>
              <Route path="/" element={<JobsListing />} />
              <Route
                path="/auth"
                element={user ? <Navigate to="/" /> : <Auth />}
              />
              <Route
                path="/profile"
                element={user ? <Profile /> : <Navigate to="/auth" />}
              />
            </Routes>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
