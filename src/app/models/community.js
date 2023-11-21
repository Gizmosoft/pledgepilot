import mongoose from "mongoose";

const Schema = mongoose.Schema

const CommunitySchema = new Schema({
    communityName: {
        type: String,
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
        type: number,
        required: false
    },
    createdDateTime:{
        type: String,
        required: true
    }
},
{
    versionKey: false
})

const communityModel = mongoose.model('community', CommunitySchema)

export default communityModel