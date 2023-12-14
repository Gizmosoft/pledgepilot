import BookmarkIcon from '@mui/icons-material/Bookmark';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getUserInTheSession } from '../../Utils/SessionStorage';

const FollowButton = (campaign: any) => {
  // state for following
  const [isFollowing, setIsFollowing] = useState<boolean>()
  // const [user, setUser] = useState<any>()
  const navigate = useNavigate();

  // get session user
  const user = getUserInTheSession()
  const campaignId = campaign.campaign._id


  const handleFollowClick = async () => {
    console.log(campaignId);
    const currUser = await fetch('http://localhost:3001/users/id/' + user._id)
    const currUserData = await currUser.json()
    currUserData.projectsFollowed.push(campaignId)
    console.log(currUserData);
    const userResponse = await fetch('http://localhost:3001/users/id/' + currUserData._id, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ projectsFollowed: currUserData.projectsFollowed })
        })
    }


    // if (user === null) {
    //   navigate('/login')
    // }
    // else {
    //   console.log(getUserInTheSession());
    //   const currUserData = await fetchCurrentUser(getUserInTheSession())
    //   console.log(currUserData);
    //   // check if the current campaign in followed by the user
    //   console.log(Object.values(currUserData.projectsFollowed).indexOf(campaign.campaign._id));
    //   if (Object.values(currUserData.projectsFollowed).indexOf(campaign.campaign._id) === -1) {
    //     currUserData.projectsFollowed.push(campaign.campaign._id)
    //     // console.log(currUserData);
    //   }
      
      
      
      
    //   // pass this updated user object to the model
    //   // if (Object.values(currUserData.projectsFollowed).indexOf(campaign.campaign._id) === -1) {
    //   //   const userResponse = await fetch('http://localhost:3001/users/id/' + currUserData._id, {
    //   //     method: 'PUT',
    //   //     headers: {
    //   //       'Content-Type': 'application/json',
    //   //     },
    //   //     body: JSON.stringify({ projectsFollowed: currUserData.projectsFollowed })
    //   //   })
    //   //   // set isFollowing Flag correctly
    //   //   setIsFollowing(true)
    //   //   setUser(currUserData)
    //   // }

      
    //   // console.log(typeof currUser);

    //   // setUser(JSON.parse(JSON.stringify(currUser)))
    //   // console.log(isFollowing);
    //   // console.log(isFollowing);
    // }
 

  return (
    <div className='follow-button'>
      <Button variant="outlined" onClick={handleFollowClick}>
        Follow <BookmarkIcon fontSize='medium' color='primary' />
      </Button>
    </div>
  )
}

export default FollowButton
