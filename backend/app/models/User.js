import mongoose from "mongoose";

const Schema = mongoose.Schema;

const User = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    LastName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
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
    Location: {
      AddressLine1: {
        type: String,
        required: true,
      },
      AddressLine2:{
        type: String,
        required: false,
      },
      city:{
        type: String,
        required: true,
      },
      state:{
        type: String,
        required: true,
      },
      pin:{
        type: String,
        required: true,
      }
    },
    ProjectBackings: {
      type: Array,
      required: false,
    },
    CreatedProjects: {
      type: Array,
      required: false,
    },
    AccountCreationDate: {
      type: Date,
      required: false,
    },
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("User", User);

export default UserModel;
