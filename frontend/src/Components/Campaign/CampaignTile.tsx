import React from 'react'
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import '../../Components/Campaign/CampaignTile.css'

const cardImg = require('../../assets/sample-image.jpg')

const CampaignTile = ({ campaignObject }: any) => {

  const description_threshold = 40;


  const descriptionContent =
    campaignObject.description.length > description_threshold
      ? `${campaignObject.description.substring(0, description_threshold)}...`
      : campaignObject.description;



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

              <div className="campaign-description">{descriptionContent}</div>

              {campaignObject.description.length > description_threshold ? (
                <label className='extended_view'>View campaign</label>
              ) : null}



              <div className='campaign-owner'>{campaignObject.owner}</div>
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
