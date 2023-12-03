import Campaign from '../models/Campaign.js'

// searchAll is a helper service function
export const searchAll = async (params = {}) => {
    const campaigns = Campaign.find(params).exec()  // find() is a model function 
    return campaigns
}

// save is a helper service function
export const create = async (newCampaign) => {
    const campaign = new Campaign(newCampaign)
    return campaign.save()     // save() is a model function
}