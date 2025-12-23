import { useState } from 'react'
import { Link } from 'react-router-dom'
import UserFields from '../components/signup/UserFields'
import RestaurantFields from '../components/signup/RestaurantFields'
import '../styles/Signup.css'
import Logo from '../assets/Logo.png'
export default function Signup() {
  const [type, setType] = useState('user')

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Signup as:', type)
  }

  return (
    <div className="signup-container">
        <img src={Logo} alt="TabFood Logo" className="onboarding-logo" />
      <h1>Create Account</h1>

      {/* Toggle */}
      <div className="signup-toggle">
        <button
          className={type === 'user' ? 'active' : ''}
          onClick={() => setType('user')}
        >
          User
        </button>

        <button
          className={type === 'restaurant' ? 'active' : ''}
          onClick={() => setType('restaurant')}
        >
          Restaurant
        </button>
      </div>

      {/* Form */}
      <form className="signup-form" onSubmit={handleSubmit}>
        {type === 'user' ? <UserFields /> : <RestaurantFields />}

        <button type="submit" className="primary-btn">
          Sign Up
        </button>
      </form>

      {/* Login link */}
      <p className="login-text">
        Already have an account?{' '}
        <Link to="/login" className="login-link">
          Login
        </Link>
      </p>
    </div>
  )
}
