import React, { useEffect, useState } from 'react'
import { Table } from '../../Components/Table/Table'
import { getUserInTheSession } from '../../Utils/SessionStorage'
import { UserStats } from '../../Components/Stats/UserStats'
import { Button } from "@mui/material";
import './UserProfile.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';

export const UserProfile = () => {
  // const currentUser = getUserInTheSession()
  // console.log(currentUser, ' currentuser');

  // const userId = currentUser._id
  // // set states
  // const [payArr, setPayArr] = useState<any>()

  // const userPaymentObject = await fetch('http://localhost:3001/userpayments/' + userId)
  // const userPaymentInfo = await userPaymentObject.json()
  // const paymentObj = await fetch('http://localhost:3001/payments/' + payment);
  // const paymentObjData = await paymentObj.json();

  const navigate = useNavigate()
  function redirectToRewards(): void {
    navigate('/rewards')
  }

  return (
    <div className='profile-page'>
      {/* <Table payArr={payArr} /> */}
      <UserStats />
      <div className='redirect-button'>
        <Button
          onClick={redirectToRewards}
          variant="outlined"
          sx={{
            backgroundColor: "#EF476F",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#D3365E",
            },
          }}
          size="medium"
        >
          Redeem Rewards
        </Button>
      </div>
    </div>
  )
}
