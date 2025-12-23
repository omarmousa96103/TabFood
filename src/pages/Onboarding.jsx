import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { slides } from './OnBoardingData'
import '../styles/Onboarding.css'
import Logo from '../assets/Logo.png'
export default function Onboarding() {
  const [index, setIndex] = useState(0)
  const navigate = useNavigate()

  const nextSlide = () => {
    if (index < slides.length - 1) {
      setIndex(index + 1)
    }
  }

  const isLast = index === slides.length - 1

  return (
    <div className="onboarding-container">
      {/* Skip */}
      <button
        className="skip-button"
        onClick={() => navigate('/signup')}
      >
        Skip
      </button>
      <img src={Logo} alt="TabFood Logo" className="onboarding-logo" />
      {/* Content */}
      <h1 className="onboarding-title">
        {slides[index].title}
      </h1>

      <img
        src={slides[index].image}
        alt={slides[index].title}
        className="onboarding-image"
      />

      <p className="onboarding-description">
        {slides[index].description}
      </p>

      {/* Dots */}
      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={i === index ? 'dot active' : 'dot'}
          />
        ))}
      </div>

      {/* Buttons */}
      <div className="onboarding-buttons">
        {!isLast ? (
          <button
            className="primary-btn"
            onClick={nextSlide}
          >
            Next
          </button>
        ) : (
          <>
            <button
              className="primary-btn"
              onClick={() => navigate('/login')}
            >
              Log In
            </button>
            <button
              className="secondary-btn"
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </div>
  )
}
