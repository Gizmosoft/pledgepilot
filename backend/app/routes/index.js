import userRouter from './user-routes.js'
import campaignRouter from "./campaign-routes.js"
import communityRouter from "./community-routes.js"
import blogsRouter from "./community-blog-routes.js"
import paymentRouter from './payment-routes.js'
import refreshRouter from './refresh-token-route.js'
import logoutRouter from './logout.js'
import campaignpaymentsRouter from './campaignpayment-route.js'
import milestoneRouter from './milestone-routes.js'
import userpaymentRouter from './userpayment-route.js'


// define endpoints related to campaign model
export default (app) => {
    app.use('/refresh',refreshRouter);
    app.use('/campaigns', campaignRouter);
    app.use("/users",userRouter);
    app.use("/community", communityRouter);
    app.use("/blog", blogsRouter);
    app.use("/payments", paymentRouter);
    app.use("/campaignpayments", campaignpaymentsRouter);
    app.use("/milestones", milestoneRouter);
    app.use("/logout",logoutRouter);
    app.use("/userpayments", userpaymentRouter);
}