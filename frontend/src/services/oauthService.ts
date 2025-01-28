import axios from "axios";

export const userDB = async (email: any) => {
  try {
    const response = await axios.get(
      `users/oauth/${email}`,
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

export const registerUserViaOauth = async (user: any) => {
  try {
    const response = await axios.post(
      `users/oauth/register`,
      JSON.stringify(user),
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