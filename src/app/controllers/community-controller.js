import * as communityService from '../services/community-service.js'
import { setResponse, setErrorResponse } from './response-handler.js'

// API for creating a new community for a newly created campaing
export const createCommunity = async (request, response) => {
    try {
        const newCommunity = {...request.body}
        const createdCommunity = await communityService.createNewCommnunity(newCommunity)
        setResponse(createdCommunity, response)        
    } catch (error) {
        setErrorResponse(error, response)
    }
}

// API for fetching community data for a specific ID
export const getCommunityData = async (request, response) => {
    try {
        const communityID = request.params.communityID
        const community = await communityService.getCommunityByID(communityID)
        setResponse(community, response)
    } catch (error) {
        setErrorResponse(error, response)
    }
}

// API for creating a new community for a newly created campaing
export const updateCommunity = async (request, response) => {
    try {
        const communityData = {...request.body}
        const communityID = request.params.communityID
        const updatedCommunity = await communityService.updateCommunityByID(communityID, communityData)
        setResponse(updatedCommunity, response)        
    } catch (error) {
        setErrorResponse(error, response)
    }
}