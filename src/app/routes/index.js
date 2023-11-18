import campaignRouter from './campaign-routes.js'

// define endpoints related to campaign model
export default (app) => {
    app.use('/', campaignRouter)
}