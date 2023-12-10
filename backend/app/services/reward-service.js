import RewardModel from "../models/Reward.js";

export const addReward = async (reward) => {
    try {
        const rewardObject = new RewardModel(reward);
        return rewardObject.save();
      } catch (error) {
        console.log(error);
      }
}

export const getAllRewards = async(params = {}) => {
    const rewards = await RewardModel.find(params).exec();
    return rewards
}

export const getRewardById = async(rewardId) => {
    const reward = await RewardModel.findById(rewardId).exec();
    return reward
}