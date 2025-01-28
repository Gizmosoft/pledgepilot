import axios from "axios";

const campaignsURL = "campaigns";

export const discoverCampaign = async () => {
  try {
    const response = await axios.get(`${campaignsURL}/discover`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
};
