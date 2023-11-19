import Campaign from '../models/Campaign.js'

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