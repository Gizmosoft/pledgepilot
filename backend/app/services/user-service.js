import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// create function will create a user and store it in the DB
const salt = 10;
export const create = async (newUser) => {
  try {
    const user = new User(newUser);
    const password = newUser.password;
    const hashedPassword = await bcrypt.hash(password, salt);

    console.log(
      "first name: " +
        user.firstName +
        "last name: " +
        user.lastName +
        "email: " +
        user.hashedPassword +
        "HashPassword: " +
        hashedPassword
    );
    user.hashedPassword = hashedPassword;
    user.salt = salt;
    return user.save();
  } catch (err) {
    console.log(error);
  }
};
//createOauthUser will create an Oauth user
export const createOauthUser = async (newUser) => {
  try {
    const user = new User(newUser);
    return user.save();
  } catch (error) {
    console.log(error);
  }
};
//userLogin is there for login and creating JWT
export const userLogin = async (email, password) => {
  const user = await findByEmailId(email);
  if (!user) {
    throw new Error("User not found");
  }
  const match = await bcrypt.compare(password, user.hashedPassword);
  if (match) {
    const accessToken = jwt.sign(
      {
        user: user.emailAddress,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "30s",
      }
    );
    const refreshToken = jwt.sign(
      {
        user: user.emailAddress,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );
    user.refreshToken = refreshToken;
    new User(user).save();
    //save this user in the db
    return { accessToken, refreshToken, user };
  } else {
    console.log("incorrect password");
  }
};
// find user using id
export const findById = async (id) => {
  const user = await User.findById(id).exec();
  return user;
};
// find user using email id
export const findByEmailId = async (email) => {
  const user = await User.find({ emailAddress: email }).populate(["projectsFollowed", "createdProjects"]);
  return user[0];
};

// find OAuth user in the DB
export const findOAuthUser = async (email) => {
  const user = await User.find({ emailAddress: email });
  return user;
};
//findByRefreshToken finds refresh token in the db and returns the user 
export const findByRefreshToken = async (userRefreshToken) => {
  const user = await User.find({ refreshToken: userRefreshToken });
  return user[0];
};

//find user from query params
export const search = async (params = {}) => {
  const users = await User.find(params).exec();
  return users;
};
//update user by id
export const update = async (updateUser, id) => {
  const user = await User.findByIdAndUpdate(id, updateUser).exec();
};
// update user by id
export const updateByEmailAddress = async (updateUser, emailAddress) => {
  const updatedUser = await User.findOneAndUpdate(
    { emailAddress: emailAddress },
    { $set: updateUser },
    { new: true } // Return the updated document
  );
};
//remove user
export const remove = async (id) => {
  try {
    return await User.findByIdAndDelete(id).exec();
  } catch (err) {
    console.log(err);
  }
};
