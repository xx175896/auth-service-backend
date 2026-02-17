import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { authAPI } from '../services/api'
import './Auth.css'

function VerifyEmail() {
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (token) {
      verifyEmail()
    } else {
      setError('Verification token is missing')
    }
  }, [token])

  const verifyEmail = async () => {
    setLoading(true)
    setError('')
    setMessage('')

    try {
      const response = await authAPI.verifyEmail(token)
      setMessage(response.data.message)
    } catch (err) {
      setError(err.response?.data?.message || 'Verification failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Email Verification</h1>
        {loading && <p>Verifying your email...</p>}
        {message && (
          <>
            <p className="success-message">{message}</p>
            <Link to="/login" className="link-button">Go to Login</Link>
          </>
        )}
        {error && (
          <>
            <p className="error-message">{error}</p>
            <Link to="/login" className="link-button">Go to Login</Link>
          </>
        )}
        {!token && !loading && (
          <>
            <p className="error-message">No verification token provided</p>
            <Link to="/login" className="link-button">Go to Login</Link>
          </>
        )}
      </div>
    </div>
  )
}

export default VerifyEmail
