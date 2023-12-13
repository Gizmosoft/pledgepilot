import MilestoneModel from "../models/Milestone.js"

export const createNewMilestone = async (milestoneObj) => {
    const checkMilestone = await getMilestoneByCampaignId(milestoneObj.campaignId)
    console.log(checkMilestone);
    if(checkMilestone !== null){
        await removeMilestoneByCampaignId(checkMilestone.campaignId)
    }
    const milestone = new MilestoneModel(milestoneObj)
    return milestone.save()
}

export const getMilestoneByCampaignId = async (campaignId) => {
    const milestone = await MilestoneModel.findOne({ campaignId: campaignId }).exec()
    return milestone
}

export const removeMilestoneByCampaignId = async (campaignId) => {
    // call the above function to get the milestone
    const milestone = await getMilestoneByCampaignId(campaignId)
    return await MilestoneModel.findByIdAndDelete(milestone._id)
}