import React from 'react'
import { useNavigate } from 'react-router-dom'
import './PaymentButton.css'

export const RedirectButton = () => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('/login')
    }
  return (
    <div className="payment-box">
        <button type="button" className="redirect-button" onClick={handleOnClick}>
            Login to Donate
        </button>
    </div>
  )
}
