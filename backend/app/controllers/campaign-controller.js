import { response } from 'express'
import * as campaignService from '../services/campaign-service.js'
import { setDataResponse, setDataErrorResponse } from './simple-response-handler.js'

// Controller for Discover API
export const discover = async (request, response) => {
    try {
        const params = {...request.query}
        const campaigns = await campaignService.searchAll(params)
        setDataResponse(campaigns, response)
    } catch (error) {
        setDataErrorResponse(error, response)
    }
}

// Controller for Create API
export const addCampaign = async (request, response) => {
    try {
        const newCampaign = {...request.body}
        const campaign = await campaignService.create(newCampaign)
        setDataResponse(campaign, response) 
    } catch (error) {
        console.log(error);
        setDataErrorResponse(error, response)
    }
}

// Controller for GetCampaign API
export const getCampaign = async (request, response) => {
    try {
        const campaignName = request.params.campaignName
        const campaign = await campaignService.getCampaignByName(campaignName)
        setDataResponse(campaign, response)
    } catch (error) {
        setDataErrorResponse(error, response)
    }
}

// Controller for GetCampaignById API
export const getCampaignById = async(request, response) => {
    try {
        const campaignId = request.params.campaignId
        const campaign = await campaignService.getCampaignById(campaignId)
        setDataResponse(campaign, response)
    } catch (error) {
        setDataErrorResponse(error, response)
    }
}

// TESTING: DO NOT TOUCH
export const uploadCampaignImages = async(request, response) => {
    try {
        //const uploadResponse = campaignService.uploadImages(request, response)
        // const uploadResponse = 
        await campaignService.fileUpload(request, response);
        //setDataResponse(uploadResponse, uploadResponse)
    } catch (error) {
        //console.log(response);
        setDataErrorResponse(error, response)
    }
}

// Controller for updating API
export const updateCampaign = async (request, response) => {
    try {
        const newCampaign = {...request.body}
        const campaignId = request.params.campaignId
        const campaign = await campaignService.updateCampaign(campaignId, newCampaign)
        setDataResponse(campaign, response) 
    } catch (error) {
        console.log(error);
        setDataErrorResponse(error, response)
    }
}