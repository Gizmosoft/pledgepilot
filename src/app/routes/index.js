import userRouter from './user-routes.js'
import campaignRouter from "./campaign-routes.js"
import communityRouter from "./community-routes.js"

// define endpoints related to campaign model
export default (app) => {
    app.use('/campaigns', campaignRouter);
    app.use("/users",userRouter);
    app.use("/community", communityRouter);
}