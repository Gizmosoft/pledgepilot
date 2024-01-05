import { response } from 'express'
import * as statsService from '../services/stats-service.js'
import {setDataResponse, setDataErrorResponse} from './simple-response-handler.js';

export const getCampaignStats = async (request, response) => {
    try {
        const campaignCount = await statsService.getCampaignStats()
        setDataResponse(campaignCount, response);
    } catch (error) {
        console.log(error);
        setDataErrorResponse(error, response);
    }
}