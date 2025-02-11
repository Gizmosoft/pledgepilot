import mongoose from "mongoose";
import UserModel from "./User.js";

const Schema = mongoose.Schema

const CampaignSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ownerName: {
        type: String,
        required: true
    },
    owner: { type: Schema.Types.ObjectId, ref: "User" },
    community: {
        comment: {
            id: {
                type: String,
                //required: true
            },
            body: {
                type: String,
                //required: true
            },
            owner: {
                userId: {
                    type: String,
                    //required: true
                }
            }
        },
        blog: {
            id: {
                type: String,
                //required: true
            },
            body: {
                type: String,
                //required: true
            },
            owner: {
                userId: {
                    type: String,
                    //required: true
                }
            }
        }
    },
    milestone: {
        target: {
            type: String,
            //required: true
        },
        progress: {
            type: String,
            //required: true
        }
    },
    payments: {
        count: {
            type: String,
            //required: true
        }
    }
},
{
    versionKey: false
})

const campaignModel = mongoose.model('Campaign', CampaignSchema)

export default campaignModel