import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CampaignPayment = new Schema({
    campaignId: {
        type: Schema.Types.ObjectId,
        ref: "Campaign",
    },
    users: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        }
    ],
    totalDonations: {
        type: Number,
        default: 0,
        required: false
    }
},{
    versionKey: false
})

const CampaignPaymentModel = mongoose.model("CampaignPayment", CampaignPayment)

export default CampaignPaymentModel;