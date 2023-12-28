import { response } from 'express'
import * as milestoneService from '../services/milestone-service.js'
import { setDataResponse, setDataErrorResponse } from './simple-response-handler.js'

export const addMilestone = async (request, response) => {
    try {
        const milestone = {...request.body}
        const newMilestone = await milestoneService.createNewMilestone(milestone)
        setDataResponse(newMilestone, response)
    } catch (error) {
        setDataErrorResponse(error, response)
    }
}

export const getMilestone = async (request, response) => {
    try {
        const campaignId = request.params.campaignId
        const milestone = await milestoneService.getMilestoneByCampaignId(campaignId    )
        setDataResponse(milestone, response)
    } catch (error) {
        setDataErrorResponse(error, response)
    }
}

export const deleteMilestone = async (request, response) => {
    try {
        const campaignId = request.params.campaignId
        const removedMilestone = await milestoneService.removeMilestoneByCampaignId(campaignId)
        setDataResponse(removedMilestone, response)
    } catch (error) {
        setDataErrorResponse(error, response)
    }
}