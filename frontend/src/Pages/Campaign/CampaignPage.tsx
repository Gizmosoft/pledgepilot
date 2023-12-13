import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PaymentButton } from '../../Components/Payment/PaymentButton'
import { getUserInTheSession } from '../../Utils/SessionStorage'

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
    const markup = { __html: campaign.description };

    if (sessionUser === null) {
        return (
            <div className='container campaign-page'>
                <h1>{campaign.name}</h1>
                <p>We are on the campaign page... It will be updated soon!</p>
                <label>Donate to {campaign.name}</label>
                <PaymentButton campaign={campaign}/>
            </div>
        )
    } else {
        return (
            <div className='container campaign-page'>
                <h1>{campaign.name}</h1>
                <p>We are on the campaign page... It will be updated soon!</p>
                <label>Donate to {campaign.name}</label>
                <p>User in the session: {sessionUser.firstName}</p>
                <div className='campaingContainer' dangerouslySetInnerHTML={markup}></div>
                <PaymentButton campaign={campaign} />
            </div>
        )
    }
}

export default CampaignPage
