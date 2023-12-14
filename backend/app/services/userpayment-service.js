import UserPaymentModel from '../models/UserPayment.js'

export const getPaymentHistoryByUserId = async (userId) => {
    const paymentHistory = await UserPaymentModel.findOne({ userId: userId }).exec();
    return paymentHistory
}