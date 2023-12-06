import Campaign from '../models/Campaign.js'

// searchAll is a helper service function
export const searchAll = async (params = {}) => {
    const campaigns = Campaign.find(params).exec()  // find() is a model function 
    return campaigns
}

// create is a helper service function
export const create = async (newCampaign) => {
    const campaign = new Campaign(newCampaign)
    return campaign.save()     // save() is a model function
}

// getCampaignByName is a service function to fetch a requested campaign
export const getCampaignByName = async (campaignName) => {
    const campaign = await Campaign.find({ name: campaignName })
    return campaign
}

// getCampaignById is a service function to fetch a requested campaign by id
export const getCampaignById = async (campaignId) => {
    const campaign = await Campaign.findById(campaignId).exec()
    return campaign
}