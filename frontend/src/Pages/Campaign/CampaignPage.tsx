import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PaymentButton } from '../../Components/Payment/PaymentButton'
import { getUserInTheSession } from '../../Utils/SessionStorage'
import PersonIcon from '@mui/icons-material/Person';
import './CampaignPage.css'
import Gallery from '../../Components/ImageGrid/Gallery';
import { RedirectButton } from '../../Components/Payment/RedirectButton';
import Footer from '../../Components/Footer/Footer';
import { Milestone } from '../../Components/Milestone/Milestone';
import { useNavigate } from 'react-router-dom';
import FollowButton from '../../Components/Buttons/FollowButton';

const CampaignPage = () => {
    // define state for campaign
    const [campaign, setCampaign] = useState<any>([])
    // state for user
    const [user, setUser] = useState<any>([])

    // get campaignName from params
    const { campaignId } = useParams()

    const navigate = useNavigate();

    // get session user
    const sessionUser = getUserInTheSession()

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
            if(userData.length === 0){
                setUser({
                    firstName: 'Admin',
                    lastName: ''
                })
            }
            else
                setUser(userData)
        }
        fetchCampaign()
    }, []
    )

    if (!campaign || !campaign._id) {
        return <h1>404: Campaign Not Found!</h1>
    }

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
                    {/* THIS IS BUGGY - NOT WORKING */}
                    <FollowButton campaign={campaign}/>
                    <br />
                    <div className='payment-button'>
                    {sessionUser !== null ? <PaymentButton campaign={campaign} /> : <RedirectButton />}
                    </div>
                </div>
                {/* <p>User in the session: {sessionUser.firstName}</p> */}
            </div>
            <hr />
            <Milestone campaignId={campaignId}/>
            <hr />
            {/* <Footer /> */}
        </div>
    )
}

export default CampaignPage
