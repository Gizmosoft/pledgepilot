import express from 'express'
import * as blogController from '../controllers/community-blog-controller.js'

// initialize an express Router object
const router = express.Router()

router.route('/')
    .post(blogController.createBlogPost)
  
router.route('/:campaignId')
    .get(blogController.getBlogPostsForCampaign)
    .patch(blogController.updateBlog)


export default router