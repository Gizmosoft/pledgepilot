import * as blogService from '../services/community-blog-service.js'
import { setResponse, setErrorResponse } from './response-handler.js'

// API for creating a new blog post
export const createBlogPost = async (request, response) => {
    try {
        const newBlogPost = {...request.body};
        const createNewBlog = await blogService.createNewBlog(newBlogPost);
        setResponse(createNewBlog, response);        
    } catch (error) {
        setErrorResponse(error, response);
    }
}

// API for fetching blog data for a specific ID
export const getBlogPost = async (request, response) => {
    try {
        const blogID = request.params.id;
        const blogPost = await blogService.getBlogPost(blogID);
        setResponse(blogPost, response);
    } catch (error) {
        setErrorResponse(error, response);
    }
}

// API for fetching blog data for a specific campaign
export const getBlogPostsForCampaign = async (request, response) => {
    try {
        const campaignId = request.params.id;
        const blogPosts = await blogService.getBlogPostsForCampaign(campaignId);
        setResponse(blogPosts, response);
    } catch (error) {
        setErrorResponse(error, response);
    }
}

// API for creating a new community for a newly created campaign
export const updateBlog = async (request, response) => {
    try {
        const blogData = {...request.body};
        const blogID = request.params.id;
        const updatedBlog = await blogService.updateBlogPost(blogID, blogData);
        setResponse(updatedBlog, response);       
    } catch (error) {
        setErrorResponse(error, response)
    }
}

