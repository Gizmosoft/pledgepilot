import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserPayment = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    totalDonations: {
      type: Number,
      default: 0,
      required: false,
    },
    totalRewards: {
      type: Number,
      default: 0,
      required: false,
    },
    payments: [
      {
        type: Schema.Types.ObjectId,
        ref: "PaymentModel",
      },
    ],
    campaigns: [
      {
        type: Schema.Types.ObjectId,
        ref: "Campaign"
      }
    ]
  },
  {
    versionKey: false,
  }
);

const UserPaymentModel = mongoose.model("UserPayment", UserPayment);

export default UserPaymentModel;
