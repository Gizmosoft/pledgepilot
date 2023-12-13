import express from 'express'
import * as milestoneController from '../controllers/milestone-controller.js'

// initialize an express Router object
const router = express.Router()

router.route('/:campaignId')
    .get(milestoneController.getMilestone)
    .post(milestoneController.addMilestone)
    .delete(milestoneController.deleteMilestone)

export default router