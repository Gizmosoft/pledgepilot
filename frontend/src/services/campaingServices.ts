import axios from "axios";

const campaignURL = "/Campaign"

const saveCampaign = async (campaignData: any) =>{
    try{
        console.log(campaignData);
    }
    catch(error)
    {
        console.log(error);
    }
}

export default saveCampaign;