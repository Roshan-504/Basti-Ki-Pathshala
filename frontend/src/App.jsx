import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import AuthRedirect from './components/AuthRedirect'
import ProtectedRoute from './components/ProtectedRoute'
import useAuthStore from './stores/authStore'
import { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import AdminPage from './pages/AdminPage'
import AboutUs from './pages/AboutUsPage'


function App() {
  const { initializeAuth } = useAuthStore()


  useEffect(() => {
    initializeAuth()
  }, [])

  return (
    <>
      <Toaster
              position="top-center"
              toastOptions={{
                style: {
                  background: '#363636',
                  color: '#fff',
                },
                duration: 4000,
              }}
            />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={<ProtectedRoute><AdminPage /></ProtectedRoute>} />
        <Route path="*" element={<AuthRedirect/>} />
      </Routes>
    </>
  )
}


export default App