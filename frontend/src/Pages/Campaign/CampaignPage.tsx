import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { PaymentButton } from '../../Components/Payment/PaymentButton'
import { getUserInTheSession } from '../../Utils/SessionStorage'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import './CampaignPage.css'
import Gallery from '../../Components/ImageGrid/Gallery';
import { RedirectButton } from '../../Components/Payment/RedirectButton';
import Footer from '../../Components/Footer/Footer';
import { Milestone } from '../../Components/Milestone/Milestone';
import '../../assets/ckEditorStyles/ckEditorStyles.css'

const CampaignPage = () => {
    // define state for campaign
    const [campaign, setCampaign] = useState<any>([])
    // state for user
    const [user, setUser] = useState<any>([])
    // get campaignName from params
    const { campaignId } = useParams()

    const navigate = useNavigate();

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
            // if (userData.length === 0) {
            //     // const customUser = {
            //     //     firstName: 'Admin',
            //     //     lastName: ''
            //     // }
            //     // console.log(customUser);
            //     // console.log('here');

            //     setUser({
            //         firstName: 'Admin',
            //         lastName: ''
            //     })
            // }
            // else
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
    const editCampaign = () =>{
        navigate("/create/"+campaignId);
    }

    if (!campaign || !campaign._id) {
        return <h1>404: Campaign Not Found!</h1>
    }

    const loggedInUser = user._id;

    function Greeting() {
        if (loggedInUser == campaign.owner) {
            return (<div className="btn-forgot-password">
            <button type="submit" onClick={editCampaign}>Edit</button>
          </div>)
        }
        else{
            return (<></>)
        }
    }

    const sessionUser = getUserInTheSession()
    const markup = { __html: campaign.description };

    return (
        <div className='container campaign-page'>
            <div className='campaign-info'></div>
            <h1>{campaign.name}</h1>
            {/* <Gallery /> */}
            {/* <hr /> */}
            <div className="grid-container-campaign">
                <div className="grid-child-left">
                    <div className='grid-description'>
                        <div className='campaignContainer ck-content' dangerouslySetInnerHTML={markup}></div>
                    </div>
                    <div className='grid-owner'>
                        {user !== null && 
                            <p><PersonIcon fontSize='medium' />{user.firstName} {user.lastName}</p>
                        }
                    </div>
                </div>
                <div className="grid-child-right">
                    <div className='follow-button'>
                        <Button variant="outlined" href="#outlined-buttons">
                            Follow <BookmarkIcon fontSize='large' color='primary' />
                        </Button>
                    </div><br />
                    <div className='payment-button'>
                        {sessionUser !== null ? <PaymentButton campaign={campaign} /> : <RedirectButton />}
                    </div>
                </div>
                {/* <p>User in the session: {sessionUser.firstName}</p> */}
            </div>
            <Greeting/>
            <hr />
            <Milestone campaignId={campaignId} />
            <hr />
            {/* <Footer /> */}
        </div>
    )
}

export default CampaignPage
