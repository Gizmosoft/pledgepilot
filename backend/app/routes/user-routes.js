import express from "express";
import * as userController from "../controllers/user-controller.js";
import verifyJWT from "../middleware/verifyJWT.js";
// initialize an express Router object
const userRouter = express.Router();

userRouter
  .route("/")
  .get(userController.searchUsers);

// '/create' API to create a new Campaign
userRouter
  .route("/id/:id")
  .get(userController.getUser)
  .put(userController.updateUser)
  .delete(userController.removeUser) // call addCampaign function in controller

// userRouter.route(verifyJWT,"/email/:email").get(userController.getUserByEmailId);
userRouter.route("/email/:email").get(userController.getUserByEmailId);
// OAuth route
userRouter.route('/oauth/:email')
  .get(userController.getOAuthUser)
userRouter
  .route("/register").post(userController.addUser);

  userRouter
  .route("/login").post(userController.userLogin);

userRouter.route("/oauth/register")
  .post(userController.oauthAddUser)

export default userRouter;
