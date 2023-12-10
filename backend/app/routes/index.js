import userRouter from './user-routes.js'
import campaignRouter from "./campaign-routes.js"
import communityRouter from "./community-routes.js"
import blogsRouter from "./community-blog-routes.js"
import paymentRouter from './payment-routes.js'

// define endpoints related to campaign model
export default (app) => {
    app.use('/campaigns', campaignRouter);
    app.use("/users",userRouter);
    app.use("/community", communityRouter);
    app.use("/blog", blogsRouter);
    app.use("/payments", paymentRouter);
}