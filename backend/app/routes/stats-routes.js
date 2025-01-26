import express from 'express'
import * as statsController from '../controllers/stats-controller.js'

// initialize an express Router object
const router = express.Router()

// get call to get campaign stats
router.route('')
    .get(statsController.getAllStats)

export default router