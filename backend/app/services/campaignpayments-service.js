import CampaignPaymentModel from "../models/CampaignPayment.js";

// Get the campaignPayment object from the DB and return that object
export const getPaymentInfoByCampaignId = async (campaignId) => {
    const paymentInfo = await CampaignPaymentModel.findOne({ campaignId: campaignId }).exec();
    return paymentInfo
}