import { response } from 'express'
import * as campaignpaymentsService from '../services/campaignpayments-service.js'
import {setDataResponse, setDataErrorResponse} from './simple-response-handler.js'

export const getPaymentInfo = async (request, response) => {
    try {
        const campaignId = request.params.campaignId
        const paymentInfo = await campaignpaymentsService.getPaymentInfoByCampaignId(campaignId)
        setDataResponse(paymentInfo, response)
    } catch (error) {
        setDataErrorResponse(error, response)
    }
}