import express from 'express'
import * as paymentController from '../controllers/payment-controller.js'

// initialize an express Router object
const paymentRouter = express.Router()

paymentRouter.route('/')
    .post(paymentController.stripePaymentHandler)

paymentRouter.route('/create')
    .post(paymentController.addPaymentToPaymentDB)

export default paymentRouter