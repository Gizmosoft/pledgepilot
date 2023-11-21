import express from 'express'
import * as campaignController from '../controllers/campaign-controller.js'

// initialize an express Router object
const router = express.Router()

// '/discover' API to show all campaigns in the system
router.route('/discover')
    .get(campaignController.discover)   // call discover function in the controller

// '/create' API to create a new Campaign
router.route('/create')
    .post(campaignController.addCampaign)   // call addCampaign function in controller

export default router