import mongoose from "mongoose";
import campaignModel from "./Campaign.js";

const Schema = mongoose.Schema;

const User = new Schema(
  {
    FirstName: {
      type: String,
      required: true,
    },
    LastName: {
      type: String,
      required: true,
    },
    Role: {
      type: String,
      required: false,
    },
    EmailAddress: {
      type: String,
      required: true,
    },
    ProfilePicture: {
      type: Buffer,
      required: false,
    },
    AboutMe: {
      type: String,
      required: false,
    },
    ProjectsFollowed: [{
      type: Schema.Types.ObjectId,
      ref: "Campaign", // Reference to the Campaign model
    }],
    CreatedProjects: [{
      type: Schema.Types.ObjectId,
      ref: "Campaign", // Reference to the Campaign model
    }],
    AccountCreationDate: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("User", User);

export default UserModel;

// {
//   FirstName: {
//     type: String,
//     required: true,
//   },
//   LastName: {
//     type: String,
//     required: true,
//   },
//   Email: {
//     type: String,
//     required: true,
//   },
//   ProfilePicture: {
//     type: Buffer,
//     required: false,
//   },
//   AboutMe: {
//     type: String,
//     required: false,
//   },
//   ProjectsFollowed: {
//     type: [projectSchema],
//     required: false,
//   },
//   CreatedProjects: {
//     type: [projectSchema],
//     required: false,
//   },
//   AccountCreationDate: {
//     type: String,
//     required: true,
//   },
//   stats: {
//     totalPledged: Number,
//     successfulBackedProjects: Number,
//     createdProjectsCount: Number,
//     totalRaised: Number,
//   },
// },