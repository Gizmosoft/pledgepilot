import React from 'react'
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import '../../Components/Campaign/CampaignTile.css'

const cardImg = require('../../assets/sample-image.jpg')

const CampaignTile = ({ campaignObject }: any) => {
  return (
    <div className='campaign-tile'>
      <h5 className='campaign-links'>
        <Link to={`/campaigns/campaign/${campaignObject._id}`}>
          {/* {campaignObject.name} */}
          <div>
            <div className="campaign-image-container">
              <img src={cardImg} alt="campaign-img" className="campaign-image" />
            </div>
            <div className='cardText'>
              <div className="campaign-name">{campaignObject.name}</div>
              <div className="campaign-description">{campaignObject.description}</div>
            </div>

          </div>

        </Link>
      </h5>
      {/* <h3 className="campaign-links">
                <Link to={`/campaigns/${campaignId}`}>
                    {campaignName}
                </Link>
        </h3> */}
    </div>
  )
}

export default CampaignTile
