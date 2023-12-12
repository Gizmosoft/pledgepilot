import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PaymentButton } from '../../Components/Payment/PaymentButton'
import { getUserInTheSession } from '../../Utils/SessionStorage'
import BookmarkIcon from '@mui/icons-material/Bookmark';

const CampaignPage = () => {
    // define state
    const [campaign, setCampaign] = useState<any>([])
    // get campaignName from params
    const { campaignId } = useParams()

    useEffect(() => {
        const fetchCampaign = async () => {
            // collect response
            const campaignResponse = await fetch('http://localhost:3001/campaigns/campaign/' + campaignId)
            // get campaign Data
            const campaignData = await campaignResponse.json()
            // set the campaign data to be received by the UI
            setCampaign(campaignData)
        }
        fetchCampaign()
    }, [campaignId]
    )

    if (!campaign || !campaign._id) {
        return <h1>404: Campaign Not Found!</h1>
    }

    const sessionUser = getUserInTheSession()

    if (sessionUser === null) {
        return (
            <div className='container campaign-page'>
                <h1>{campaign.name}</h1>
                <p>We are on the campaign page... It will be updated soon!</p>
                <label>Donate to {campaign.name}</label>
                <PaymentButton campaign={campaign}/>
                {/* <BookmarkIcon /> */}
            </div>
        )
    } else {
        return (
            <div className='container campaign-page'>
                <h1>{campaign.name}</h1>
                <p>We are on the campaign page... It will be updated soon!</p>
                <label>Donate to {campaign.name}</label>
                <p>User in the session: {sessionUser.firstName}</p>
                <PaymentButton campaign={campaign} />
                {/* <BookmarkIcon fontSize='large' color='primary' /> */}
            </div>
        )
    }
}

export default CampaignPage
