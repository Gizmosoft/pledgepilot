import React, { useState } from 'react'
import StripeCheckout from 'react-stripe-checkout'

export const PaymentButton = () => {
    const [product, setProduct] = useState({
        name: "React from Campaign",
        price: 10,
        productBy: "PledgePilot"
      })
    
      const makePayment = async (token) => {
        const body = {
          token,
          product
        }
        const headers = {
          "Content-Type": "application/json"
        }
    
        try {
              const response = await fetch(`http://localhost:3001/payment`, {
                  method: "POST",
                  headers,
                  body: JSON.stringify(body)
              })
              console.log("RESPONSE: ", response)
              const { status } = response
              console.log("STATUS: ", status)
          } catch (error) {
              return console.log(error)
          }
      }
  return (
    <div>
        <StripeCheckout
          stripeKey='pk_test_51OFqNiEPRj1zaiex4lxQVyzwMSJtsB9w1yEJ6qUcbWFUq8QaE5lrNv0e2FZe6OK86On0CDRRvnYch17VyXFV6zba006DYhm4EI'
          token={makePayment}
          name='Donate'
          amount={product.price*100}
        >
          <button className='donate-button'>Donate ${product.price}</button>
        </StripeCheckout>
    </div>
  )
}
