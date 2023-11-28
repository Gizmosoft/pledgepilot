import express from "express";
import * as userController from "../controllers/user-controller.js";

// initialize an express Router object
const userRouter = express.Router();

userRouter
  .route("/")
  .post(userController.addUser)
  .get(userController.searchUsers);

// '/create' API to create a new Campaign
userRouter
  .route("/:id")
  .get(userController.getUser)
  .put(userController.updateUser)
  .delete(userController.removeUser); // call addCampaign function in controller

export default userRouter;
