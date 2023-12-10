import axios from "axios";

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