import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { verifyUserEmail } from '../../controllers/auth'

const VerifyEmail = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [result, setResult] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const token = params.get("token")

    const verify = async () => {
    setLoading(true)
      if (token) {
        try {
          const res = await verifyUserEmail(token)
          setResult(res.message)
          setLoading(false)
          setTimeout(() => navigate('/login'), 1500)
        } catch (error) {
          console.error("Error:", error.message)
          setResult(res.error)
          setLoading(false)
        }
        
      } else {
        navigate('/login')
      }
    }

    verify()
  }, [location, navigate])

  return (
    <div className='mt-4 p-3 bg-green-900/20 text-green-400 rounded-lg text-center text-sm'>
        {loading ? "Verifying" : result}
    </div>
  )
}

export default VerifyEmail
