import React from 'react'
import { Link } from 'react-router-dom'

const CampaignTile = ({campaignObject}:any) => {
  return (
    <div className='campaign-tile'>
        <h5 className='campaign-links'>
                <Link to={`/campaigns/campaign/${campaignObject._id}`}>
                    {campaignObject.name}
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
