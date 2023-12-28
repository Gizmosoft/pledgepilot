import express from 'express'
import * as rewardController from '../controllers/reward-controller.js'


// initialize an express Router object
const rewardRouter = express.Router()

rewardRouter.route('/')
    .get(rewardController.getAllRewards)

rewardRouter.route('/:rewardId')
    .get(rewardController.getRewardById)

export default rewardRouter;