import StripePayment from 'stripe'
import * as paymentService from '../services/payment-service.js'
import { setDataErrorResponse, setDataResponse } from './simple-response-handler.js';

export const stripePaymentHandler = async (request, response) => {
    const stripe = StripePayment(process.env.ADMIN_STRIPE_SECRET_KEY)
    try{
        const { token, donationAmount } = request.body
        console.log('token:' + token);
        console.log(donationAmount);

        const payment = await paymentService.stripePaymentService(token, donationAmount, request, response, stripe)
        // setDataResponse(payment, response)
    } catch (error) {
        // setDataErrorResponse(error, response)
        console.log(error);
    }  
}

export const addPaymentToPaymentDB = async (request, response) => {
    try {
        const newPayment = {...request.body}
        const payment = await paymentService.createPayment(newPayment)
        setDataResponse(payment, response)
    } catch (error) {
        setDataErrorResponse(error, response)
    }
}