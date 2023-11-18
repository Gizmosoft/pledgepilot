import Campaign from '../models/Campaign.js'

// save is a helper service function
export const create = async (newCampaign) => {
    const campaign = new Campaign(newCampaign)
    return campaign.save()     // save() is a model function
}