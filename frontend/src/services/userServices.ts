import axios from "axios";
import { User } from "../types/User";
import { setUser } from "../store/UserSlice";
import { store } from "../store/store";
const usersURL = "users";

export const registerUser = async (registerValues: any) => {
  try {
    const response = await axios.post(
      `${usersURL}/register`,
      JSON.stringify(registerValues),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        withCredentials: true,
      }
    );
    return response?.data;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
};
export const loginUser = async (loginValues: any) => {
  try {
    const response = await axios.post(
      `${usersURL}/login`,
      JSON.stringify(loginValues),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        withCredentials: true,
      }
    );
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${response.data["accessToken"]}`;
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const logoutUser = async () => {
  try {
    const response = await axios.get(`/logout`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const updateUserByEmail = async (email: string, user: User) => {
  try {
    const response = await axios.post(
      `/users/email/${email}`,
      JSON.stringify(user),
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
export const updateUserByID = async (id: string, user: any) => {
  try {
    const response = await axios.put(`/users/id/${id}`, JSON.stringify(user), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const getUserByEmail = async (email: string) => {
  try {
    const response = await axios.get(`/users/email/${email}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getUserById = async (id: string) => {
  try {
    const response = await axios.get(`/users/id/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getUserPayments = async (id: string) => {
  try {
    const response = await axios.get(`/userpayments/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getPayment = async (id: string) => {
  try {
    const response = await axios.get(`/payments/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
