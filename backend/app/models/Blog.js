import mongoose from "mongoose";
import UserModel from "./User.js";
import campaign from './Campaign.js';

const Schema = mongoose.Schema

const blogSchema = new Schema({
    _id: Schema.Types.ObjectId,
    blogTitle: String,
    blogBody: String,
    owner: { type: Schema.Types.ObjectId, ref: UserModel },
    campaignID: String
})

const blogModel = mongoose.model('Blog', blogSchema)

export default blogModel