import express from "express";
import * as refreshTokenController from "../controllers/refresh-token-controller.js"

// initialize an express Router object
const refreshRouter = express.Router();

refreshRouter
  .route("/")
  .get(refreshTokenController.handleRefreshToken);

export default refreshRouter;
