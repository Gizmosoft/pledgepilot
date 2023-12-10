import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Editor from '../../Components/Editor/Editor'

const CampaignPage = () => {

    const [campaignData, setCampaignData] = useState({
        name: "",
        description: "",
        owner: "",
        community: "",
        milestone: "",
        payments: ""
      });

      const createCampaign = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        setCampaignData(campaignData);
      }

      return (
        <div className='campaign-page'>
            <p>We are on the campaign page... It will be updated soon!</p>
            <Editor />
        </div>
      )
}

export default CampaignPage
