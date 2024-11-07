import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom'

import JobsListing from './views/JobsListing'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Auth from './views/auth/Auth'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="h-screen flex flex-col justify-between">
          <div>
            <Navbar />

            <Routes>
              <Route path="/" element={<JobsListing />}></Route>
            </Routes>
            <Routes>
              <Route path="/auth" element={<Auth />}></Route>
            </Routes>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
