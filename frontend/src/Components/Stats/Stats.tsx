import React, { useEffect, useState } from "react";
import "./Stats.css"
import { campaignStats } from "../../services/statsServices";

const Stats = () => {
    const [campaignStatsData, setCampaignStatsData]: any = useState<any>();
    const [paymentStatsData, setPaymentStatsData]: any = useState<any>();
    const [rewardStatsData, setRewardStatsData]: any = useState<any>();

    useEffect(()=> {
        const campaignData = async () => {
            try {
                const response:any = await campaignStats();
                const data = await response.json(); // Assuming the data is in JSON format
                console.log(data, 'response of stats in UI')
                // Set the data in the component state
                setCampaignStatsData(data.campaignCount); 
                setPaymentStatsData(data.paymentCount);
                setRewardStatsData(data.rewardCount);
            } catch (error) {
                console.error('Error fetching campaign stats:', error);
            }
        }
        campaignData()
    },[campaignStatsData])

    return (
        <div className="grid-container">
            <div className="grid-item">{campaignStatsData !== null ? `${campaignStatsData}` : 'N/A'} <br/> campaigns listed</div>
            <div className="grid-item">{paymentStatsData !== null ? `$${paymentStatsData}` : 'N/A'} <br/> total donations made</div>
            <div className="grid-item">{rewardStatsData !== null ? `$${rewardStatsData}` : 'N/A'} <br/> total rewards earned</div>
        </div>
    )
}

export default Stats;