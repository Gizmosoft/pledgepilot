import express from 'express'
import * as communityController from '../controllers/community-controller.js'

// initialize an express Router object
const router = express.Router()

router.route('/')
    .post(communityController.createCommunity)
  
router.route('/:id')
    .get(communityController.getCommunityData)
    .patch(communityController.updateCommunity)


export default router