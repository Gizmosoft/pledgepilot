import mongoose from "mongoose";

const Schema = mongoose.Schema;

const User = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: false,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: Buffer,
      required: false,
    },
    aboutMe: {
      type: String,
      required: false,
    },
    projectsFollowed: [
      {
        type: Schema.Types.ObjectId,
        ref: "Campaign", // Reference to the Campaign model
      },
    ],
    createdProjects: [
      {
        type: Schema.Types.ObjectId,
        ref: "Campaign", // Reference to the Campaign model
      },
    ],    
    accountCreationDate: {
      type: String,
      required: false,
    },
    hashedPassword: { type: String, required: false },
    refreshToken: {
      type: String,
      required: false
    },
    salt: { type: String, required: false },
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
