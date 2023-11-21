import * as campaignService from '../services/campaign-service.js'
import { setResponse, setErrorResponse } from './response-handler.js'

// Controller for Discover API
export const discover = async (request, response) => {
    try {
        const params = {...request.query}
        const campaigns = await campaignService.searchAll(params)
        setResponse(campaigns, response)
    } catch (error) {
        setErrorResponse(error, response)
    }
}

// Controller for Create API
export const addCampaign = async (request, response) => {
    try {
        const newCampaign = {...request.body}
        const campaign = await campaignService.create(newCampaign)
        setResponse(campaign, response)        
    } catch (error) {
        setErrorResponse(error, response)
    }
}