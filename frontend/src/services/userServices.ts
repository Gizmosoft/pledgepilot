import axios from "axios";
import { User } from "../types/User";
import { setUser } from '../store/UserSlice';
import { store } from "../store/store";
const usersURL = "users";

export const registerUser = async (registerValues: any) => {
  try {
    console.log(registerValues);
    const response = await axios.post(`${usersURL}/register`,
      JSON.stringify(registerValues),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        withCredentials: true,
      }
    );
    console.log(response);
    return response?.data;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
};
export const loginUser = async (loginValues: any) => {
  console.log(loginValues);
  try {
    console.log(loginValues);
    const response = await axios.post(`${usersURL}/login`,
      JSON.stringify(loginValues),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        withCredentials: true,
      }
    );
    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['accessToken']}`
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const logoutUser = async () => {
  
  try {
    const response = await axios.get(`/logout`,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const updateUserByEmail = async (email:string, user:User) => {
  
  try {
    const response = await axios.post(`/users/email/${email}`,
      JSON.stringify(user),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        withCredentials: true,
      }
    );
    console.log(response,"updated User")
    
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const getUserByEmail = async (email:string) => {
  
  try {
    const response = await axios.get(`/users/email/${email}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getUserById = async (id:string) => {
  
  try {
    const response = await axios.get(`/users/email/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        withCredentials: true,
      }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
