import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { getUserById } from '../../services/userServices';

const cardImg = require('../../assets/sample-image.jpg')

const BlogTile = ({ blogTile }: any) => {

  const description_threshold = 40;

debugger;
  const descriptionContent =
    blogTile.blogBody.length > description_threshold
      ? `${blogTile.blogBody.substring(0, description_threshold)}...`
      : blogTile.blogBody;


    useEffect(()=>{
        debugger;
      const fetchUser = async () => {
        let user =  await getUserById(blogTile.owner);
      }
      fetchUser();
    },[])

    const regex = /(<([^>]+)>)/gi;

  return (
    <div className='campaign-tile'>
      <h5 className='campaign-links'>
        <Link to={`/campaigns/campaign/${blogTile.Id}`}>
          {/* {campaignObject.name} */}
          <div>
            <div className="campaign-image-container">
              <img src={cardImg} alt="campaign-img" className="campaign-image" />
            </div>
            <div className='cardText'>
              <div className="campaign-name">{blogTile.blogTitle}</div>

              <div className="campaign-description">{descriptionContent.replace(regex,"")}</div>

              {blogTile.blogBody.length > description_threshold ? (
                <label className='extended_view'>View campaign</label>
              ) : null}



              <div className='campaign-owner'>{blogTile.owner}</div>
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

export default BlogTile
