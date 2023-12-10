import PaymentModel from "../models/Payment.js";

export const stripePaymentService = async (
  token,
  donation,
  request,
  response,
  stripe
) => {
  // update stripe backend with the payment
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
      console.log("Payment success!");
      // update donated field of user DB

      //update payments received field of campaign DB

      // update Payment DB of the app
    })
    .then((result) => response.status(200).json(result))
    .catch((err) => console.log(err));
};

export const createPayment = async (newPayment) => {
  try {
    const payment = new PaymentModel(newPayment);
    return payment.save();
  } catch (error) {
    console.log(error);
  }
};
