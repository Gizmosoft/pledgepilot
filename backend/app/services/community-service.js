import communityModel from '../models/community.js'

// create is a helper service function
export const createNewCommnunity = async (newCommunity) => {
    const community = new communityModel(newCommunity);
    return await community.save();    // save() is a model function
}

// getCampaignByName is a service function to fetch a requested campaign
export const getCommunityByID = async (communityID) => {
    const community = await communityModel.findById(communityID).exec();
    return community;
}

export const updateCommunityByID = async(communityID, updatedCommunity) => {
    const Community = await communityModel.findByIdAndUpdate(communityID, updatedCommunity).exec();
    return Community;
}