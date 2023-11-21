import * as campaignService from '../services/campaign-service.js'
import { setResponse, setErrorResponse } from './response-handler.js'

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

// Controller for GetCampaign API
export const getCampaign = async (request, response) => {
    try {
        const campaignName = request.params.campaignName
        const campaign = await campaignService.getCampaignByName(campaignName)
        setResponse(campaign, response)
    } catch (error) {
        setErrorResponse(error, response)
    }
}