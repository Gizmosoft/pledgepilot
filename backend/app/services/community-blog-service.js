import blogModel from '../models/Blog.js'

//creating new blogpost
export const createNewBlog = async (newBlog) => {
    const blogPost = new blogModel(newBlog);
    return await blogPost.save();    // save() is a model function
}

// funtion to get all blog posts for the particular community
export const getBlogPostsForCampaign = async (communityID) => {
    const blogPosts = await blogModel.find({campaignID:communityID});
    return blogPosts;
}

// funtion to get a particular blog details
export const getBlogPost = async (blogID) => {
    const blogPosts = await blogModel.findById(blogID).exec();
    return blogPosts;
}

//Function to update a blog post
export const updateBlogPost = async(blogID, updatedBlog) => {
    const Blog = await blogModel.findByIdAndUpdate(blogID, updatedBlog).exec();
    return Blog;
}

//Function to delete Blog post
export const deleteBlogPost = async(blogID) => {
    const Blog = await blogModel.findByIdAndDelete(blogID).exec();
    return Blog;
}