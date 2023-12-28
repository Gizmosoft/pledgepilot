import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PaymentSchema = new Schema(
  {
    campaignName: {
      type: Schema.Types.ObjectId,
      ref: "Campaign",
    },
    paidBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    amount: {
      type: Number,
      required: true,
    },
    rewardGenerated: {
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

const PaymentModel = mongoose.model("Payment", PaymentSchema);

export default PaymentModel;
