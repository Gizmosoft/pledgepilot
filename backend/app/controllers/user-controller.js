import * as userService from "../services/user-service.js";
import { setResponse, setErrorResponse } from "./response-handler.js";
import { setDataResponse, setDataErrorResponse } from "./simple-response-handler.js";

// Controller to Create user
export const addUser = async (request, response) => {
  try {
    const newUser = { ...request.body };
    // const firstName = newUser.fir
    const user = await userService.create(newUser);
    setResponse({"type": "REGISTER", "data":user}, response);
  } catch (error) {
    setErrorResponse(error, response);
  }
};

export const oauthAddUser = async (request, response) => {
  try {
    const newUser = { ...request.body };
    // const firstName = newUser.fir
    const user = await userService.createOauthUser(newUser);
    setDataResponse(user, response)
    // setResponse({"type": "REGISTER", "data":user}, response);
  } catch (error) {
    setDataErrorResponse(error, response);
  }
};

export const userLogin = async (request,response) =>{
    try{
        const userCredentials = {...request.body};
        const email = userCredentials.emailAddress;
        const password = userCredentials.password;
        const login = await userService.userLogin(email,password);
        setResponse({"type": "LOGIN", "data":login}, response);
    } catch(error){
        console.log(error);
        setErrorResponse(error, response);
    }
  
}

// Controller for get user by id
export const getUser = async (request, response) => {
  try {
    const id = request.params.id;
    const user = await userService.findById(id);
    setResponse({"type":"GET_USER_BY_ID","data":user}, response);
  } catch (error) {
    setErrorResponse(error, response);
  }
};

export const getUserByEmailId = async (request, response) => {
  try {
    const email = request.params.email;
    const user = await userService.findByEmailId(email);
    setResponse({"type":"SEARCH_BY_EMAILID","data":user}, response);
  } catch (error) {
    setErrorResponse(error, response);
  }
};

// controller to handle OAuth 
export const getOAuthUser = async (request, response) => {
  try{
    const email = request.params.email;
    const user = await userService.findOAuthUser(email);
    setDataResponse(user, response)
  } catch (error){
    setDataErrorResponse(error, response)
  }
}

export const searchUsers = async (request, response) => {
  try {
    const params = { ...request.query };
    const users = await userService.search(params);
    setResponse({"type":"SEARCH_USERS","data":users}, response);
  } catch (error) {
    setErrorResponse(error, response);
  }
};
export const updateUser = async (request, response) => {
  try {
    const id = request.params.id;
    const updateUser = { ...request.body };
    await userService.update(updateUser, id);
    const updatedUser = await userService.findById(id);
    setResponse({"type":"UPDATE_USER","data":updatedUser}, response);
  } catch (error) {
    setErrorResponse(error, response);
  }
};
export const updateUserByEmailAddress = async (request, response) => {
  try {
    const emailAddress = request.params.email;
    const updateUser = { ...request.body };
    await userService.updateByEmailAddress(updateUser, emailAddress);
    const updatedUser = await userService.findByEmailId(emailAddress);
    setResponse({"type":"UPDATE_USER","data":updatedUser}, response);
  } catch (error) {
    setErrorResponse(error, response);
  }
};
export const removeUser = async (request, response) => {
  try {
    const id = request.params.id;
    await userService.remove(id);
    const removedUser = `deleted user with id ${id}`;
    setResponse({"type":"REMOVE_USER","data":removedUser}, response);
  } catch (error) {
    setErrorResponse(error, response);
  }
};
