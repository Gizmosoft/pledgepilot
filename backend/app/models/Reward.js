import mongoose from "mongoose";

const Schema = mongoose.Schema;

const RewardSchema = new Schema(
  {
    paymentId: {
      type: Schema.Types.ObjectId,
      ref: "PaymentModel",
    },
    campaign: {
      type: Schema.Types.ObjectId,
      ref: "Campaign"
    },
    rewardedTo: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    rewardAmt: {
      type: Number,
      required: true,
    },
    txnDate: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const RewardModel = mongoose.model("Reward", RewardSchema);

export default RewardModel;
