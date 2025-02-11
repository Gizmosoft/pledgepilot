import { setDataErrorResponse } from "../controllers/simple-response-handler.js";
import PaymentModel from "../models/Payment.js";
import UserPaymentModel from "../models/UserPayment.js";
import CampaignPaymentModel from "../models/CampaignPayment.js";

export const stripePaymentService = async (
  token,
  donation,
  request,
  response,
  stripe
) => {
  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.charges.create({
        amount: donation * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
      });
    })
    .then((result) => response.status(200).json(result))
    .catch((err) => console.log(err));
};

export const createPayment = async (newPayment) => {
  try {
    const payment = new PaymentModel(newPayment);
    let paymentSaved =  await payment.save();
    return paymentSaved;
  } catch (error) {
    console.log(error);
  }
};

export const getPaymentById = async (payId) => {
  const payment = await PaymentModel.findById(payId).exec();
  return payment;
};

export const findUserPaymentByUserId = async (userId) => {
  const userPayment = await UserPaymentModel.findOne({ userId: userId}).exec()
  // if(Object.keys(userPayment).length===0)
  if(userPayment === null){
    return {
      userId: {},
      totalDonations: 0,
      totalRewards: 0,
      payments: [],
      campaigns: []
    }
  }
  else
    return userPayment
}

export const addUserPayment = async (payment) => {
  try {
    const userPaymentObject = await findUserPaymentByUserId(payment.paidBy)
    userPaymentObject.userId = payment.paidBy
    userPaymentObject.totalDonations += payment.amount
    userPaymentObject.totalRewards += payment.rewardGenerated
    userPaymentObject.payments.unshift(payment._id)
    userPaymentObject.campaigns.unshift(payment.campaignName)

    const userPaymentModel = new UserPaymentModel(userPaymentObject)
    return userPaymentModel.save()
  } catch (error) {
    console.log(error);
  }
}

export const findCampaignPaymentByCampaignId = async (campaignId) => {
  const campaignPayment = await CampaignPaymentModel.findOne({ campaignId: campaignId}).exec()
  if(campaignPayment === null){
    return {
      campaignId: {},
      users: [],
      totalDonations: 0
    }
  }
  else
    return campaignPayment
}

export const addCampaignPayment = async (payment) => {
  try {
    const campaignPaymentObject =  await findCampaignPaymentByCampaignId(payment.campaignName)
    campaignPaymentObject.campaignId = payment.campaignName
    campaignPaymentObject.users.unshift(payment.paidBy)
    campaignPaymentObject.totalDonations += payment.amount

    const campaignPaymentModel = new CampaignPaymentModel(campaignPaymentObject)
    return campaignPaymentModel.save()
  } catch (error) {
    console.log(error);
  }
}
