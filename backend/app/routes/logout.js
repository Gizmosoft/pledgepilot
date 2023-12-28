import express from "express";
import * as logoutController from "../controllers/logoutController.js";
//logout route
const logoutRouter = express.Router();

logoutRouter.route("/").get(logoutController.handleLogout);

export default logoutRouter;
