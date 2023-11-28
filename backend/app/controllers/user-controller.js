import * as userService from '../services/user-service.js';
import { setResponse, setErrorResponse } from './response-handler.js';

// Controller to Create user
export const addUser = async (request, response) => {
    try {
        const newUser = {...request.body}
        const user = await userService.create(newUser)
        setResponse(user, response)        
    } catch (error) {
        setErrorResponse(error, response)
    }
}

// Controller for Create user
export const getUser = async (request, response) => {
    try {
      const id = request.params.id;
      const user = await userService.findById(id);
        setResponse(user, response)        
    } catch (error) {
        setErrorResponse(error, response)
    }
}

export const searchUsers = async (request, response) => {
    try {
      const params = {...request.query};
      const users = await userService.search(params);
      setResponse(users,response);       
    } catch (error) {
        setErrorResponse(error, response)
    }
}
export const updateUser = async (request, response) => {
    try {
      const id = request.params.id;
      const updateUser = {...request.body};
      await userService.update(updateUser,id);
      const updatedUser = await userService.findById(id);
      setResponse(updatedUser,response);       
    } catch (error) {
        setErrorResponse(error, response)
    }
}
export const removeUser = async (request, response) => {
  try {
    const id = request.params.id;
    await userService.remove(id);
    const removedUser = `deleted user with id ${id}`;
    setResponse(removedUser,response);       
  } catch (error) {
      setErrorResponse(error, response)
  }
}