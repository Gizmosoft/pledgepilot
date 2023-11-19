import express from 'express'
import * as campaignController from '../controllers/campaign-controller.js'

// initialize an express Router object
const router = express.Router()

// '/create' API to create a new Campaign
router.route('/create')
    .post(campaignController.addCampaign)   // call addCampaign function in controller

// '/campaigns/:campaign-name' GetCampaign API to get a particular API
router.route('/campaigns/:campaignName')
    .get(campaignController.getCampaign)

export default router