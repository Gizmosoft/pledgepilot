import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Milestone = new Schema({
    campaignId: {
        type: Schema.Types.ObjectId,
        ref: "Campaign",
    },
    target: {
        type: Number,
        required: true
    },
    received: {
        type: Number,
        default: 0
    }
},
{
    versionKey: false
})

const MilestoneModel = mongoose.model("Milestone", Milestone)

export default MilestoneModel