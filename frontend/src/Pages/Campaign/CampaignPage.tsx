import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PaymentButton } from '../../Components/Payment/PaymentButton'
import { getUserInTheSession } from '../../Utils/SessionStorage'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonIcon from '@mui/icons-material/Person';
import './CampaignPage.css'
import Gallery from '../../Components/ImageGrid/Gallery';
import { RedirectButton } from '../../Components/Payment/RedirectButton';

const CampaignPage = () => {
    // define state for campaign
    const [campaign, setCampaign] = useState<any>([])
    // state for user
    const [user, setUser] = useState<any>([])
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
            // fetchCampaignOwner()
            const userResponse = await fetch('http://localhost:3001/users/id/' + campaignData.owner)
            const userData = await userResponse.json()            
            // set user data
            setUser(userData)
        }
        fetchCampaign()
    }, []
    )
    
    // const fetchCampaignOwner = async () => {          
    //     // fetch user
    //     const userResponse = await fetch('http://localhost:3001/users/id/' + campaign.owner)
    //     const userData = await userResponse.json()            
    //     // set user data
    //     setUser(userData)
    // }
    
    if (!campaign || !campaign._id) {
        return <h1>404: Campaign Not Found!</h1>
    }

    const sessionUser = getUserInTheSession()


    return (
        <div className='container campaign-page'>
            <div className='campaign-info'></div>
            <h1>{campaign.name}</h1>
            <Gallery />
            <hr />
            <div className="grid-container-campaign">
                <div className="grid-child-left">
                    <div className='grid-description'>
                        <p>{campaign.description} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae repellendus earum doloribus laboriosam totam inventore nihil officia fugiat maxime ex quisquam consectetur quia sed nisi, error vitae distinctio id architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eaque nam, laboriosam laudantium, blanditiis ipsum veritatis sunt suscipit at excepturi architecto libero sed tempore similique quos reprehenderit. Ad, dicta ex.</p>
                    </div>
                    <div className='grid-owner'>
                        <p><PersonIcon fontSize='medium' />{user.firstName} {user.lastName}</p>
                    </div>
                </div>
                <div className="grid-child-right">
                    {sessionUser !== null ? <PaymentButton campaign={campaign} /> : <RedirectButton />}
                </div>
                {/* <p>User in the session: {sessionUser.firstName}</p> */}
            </div>
            
            {/* <BookmarkIcon fontSize='large' color='primary' /> */}
        </div>
    )
}

export default CampaignPage
