import React, { useEffect, useState } from 'react'
import CampaignTile from '../../Components/Campaign/CampaignTile';
import './DiscoverPage.css';
import Search from '../../Components/SearchBar/SearchBar';
import { discoverCampaign } from '../../services/discoverServices';
const DiscoverPage = () => {
    // create a state for campaigns
    const [campaigns, setCampaigns] = useState<any>()


    // function to get required campaigns corresponding to the search results

    const handleCampaign = (arr: any[], search_field: any) => {
        const result = arr.filter(item => item.name === search_field);
        console.log(JSON.stringify(result));
        if (result != null) {
            setCampaigns(result);
        }else {
            setCampaigns("");

        }
    }


    // onpageload operations
    useEffect(() => {
        const fetchAllCampaigns = async () => {
            // call Discover API
            // const campaignsResponse = await fetch('http://localhost:3001/campaigns/discover')
            const campaignsData = await discoverCampaign();
            // get the response in json
            // const campaignsData = await campaignsResponse.json()
            console.log(campaignsData);
            // set the campaignData to the state to be received by the UI
            setCampaigns(campaignsData)
        }
        fetchAllCampaigns()
        // below empty array is called dependecy list which tells about how many times the useEffect needs to be called. Not defining this will cause an infinte loop of useEffects being called. Empty array signifies that call useEffect only once at 
    }, [])

    if (!campaigns) {
        return <p>No campaigns in the database!</p>
    }
    return (
        <div className='discover-page'>
            <Search campaigns={campaigns} getmyCampaign={handleCampaign} />
            <div className='card-container' id='content-display'>
                {
                    campaigns.map((campaign: any) => <CampaignTile key={campaign._id} campaignObject={campaign} />)
                }
            </div>
            {/* Grid to show the campaigns in UI */}
            {/* <div className='campaigns-grid'>
            { campaigns.map((campaign: { _id: any; name: any; }) => <CampaignTile key={campaign._id} campaignId={campaign._id} campaignName={campaign.name} />)}
        </div> */}
        </div>
    )
}

export default DiscoverPage
