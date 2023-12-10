import express from "express";
import * as logoutController from "../controllers/logoutController.js";
// initialize an express Router object
const logoutRouter = express.Router();

logoutRouter.route("/").get(logoutController.handleLogout);

export default logoutRouter;
