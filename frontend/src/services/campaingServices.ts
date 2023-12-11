import axios from "axios";

const campaignURL = "/campaigns"

const saveCampaign = async (campaignData: any) => {
    try {
        const response = await axios.post(
            campaignURL + "/create",
            JSON.stringify(campaignData),
            {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                withCredentials: true,
            }
        )
        console.log(campaignData);
    }
    catch (error) {
        console.log(error);
    }
}

export default saveCampaign;