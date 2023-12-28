import express from 'express'
import * as userPaymentController from '../controllers/userpayment-controller.js'

const router = express.Router()

router.route('/:userId')
    .get(userPaymentController.getPaymentHistory)


export default router