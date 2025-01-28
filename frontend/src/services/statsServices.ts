import axios from "axios";

export const campaignStats = async () => {
  try {
    const response = await axios.get(`/stats`, {
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
