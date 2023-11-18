import mongoose from "mongoose";

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
    milestone: {
        target: {
            type: String,
            required: true
        },
        progress: {
            type: String,
            required: true
        }
    },
    payments: {
        count: {
            type: String,
            required: true
        }
    }
},
{
    versionKey: false
})

const campaignModel = mongoose.model('campaign', CampaignSchema)

export default campaignModel