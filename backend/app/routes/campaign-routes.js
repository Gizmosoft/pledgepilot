import express from 'express'
import * as campaignController from '../controllers/campaign-controller.js'
import verifyJWT from '../middleware/verifyJWT.js'

// initialize an express Router object
const router = express.Router()

// '/discover' API to show all campaigns in the system
router.route('/discover')
    .get(campaignController.discover)   // call discover function in the controller

// '/create' API to create a new Campaign
router.route('/create')
    .post(campaignController.addCampaign)   // call addCampaign function in controller

// '/campaigns/:campaignName' GetCampaign API to get a particular API
router.route('/:campaignName')
    .get(campaignController.getCampaign)

// '/campaigns/campaign/:campaignId' GetCampaign API by ID to get a particular API
router.route('/campaign/:campaignId')
    .get(campaignController.getCampaignById)

// testing: '/camapigns/upload
router.route('/upload')
    .post(campaignController.uploadCampaignImages)

// '/update' API to create a update Campaign
router.route('/update/:campaignId')
.patch(campaignController.updateCampaign)   // call addCampaign function in controller

export default router