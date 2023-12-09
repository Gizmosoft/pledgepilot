import mongoose from "mongoose";
import commentModel from "./Comment.js";
import blogModel from "./Blog.js";

const Schema = mongoose.Schema

const CommunitySchema = new Schema({
    communityName: {
        type: String,
        required: true
    },
    campaignID: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    numberOfPosts: {
        type: Number,
        required: true
    },
    postsID:{
        type: Array,
        required: false
    },
    commentsCount: {
        type: Number,
        required: false
    },
    createdDateTime:{
        type: String,
        required: true
    },
    comments: { type: Schema.Types.ObjectId, ref: commentModel },
    blogs: { type: Schema.Types.ObjectId, ref: blogModel }
},
{
    versionKey: false
})

const communityModel = mongoose.model('community', CommunitySchema)

export default communityModel