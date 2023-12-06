import mongoose from "mongoose";

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
    Email: {
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
    ProjectsFollowed: {
      type: Array,
      required: false,
    },
    CreatedProjects: {
      type: Array,
      required: false,
    },
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
