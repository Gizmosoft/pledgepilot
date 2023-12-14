import React, { useState } from 'react'
import './UserStats.css'
import {useEffect} from 'react';
import { getUserInTheSession } from '../../Utils/SessionStorage';

export const UserStats = () => {
    const user = getUserInTheSession()

    // set data in state
    const [donations, setDonations] = useState<any>()
    const [rewards, setRewards] = useState<any>()

    useEffect(() => {
        const getUserStats = async () => {
            const userPaymentInfo = await fetch('http://localhost:3001/userpayments/' + user._id)
            const userPaymentData = await userPaymentInfo.json()
            if(userPaymentData.totalDonations === undefined) {
                setDonations(0)
            } else {
                setDonations(userPaymentData.totalDonations)
            }
            if(userPaymentData.totalRewards === undefined){
                setRewards(0)
            }else {
                setRewards(userPaymentData.totalRewards)
            }
        }
        getUserStats()
    },[]
    )
  return (
    <div className='grid-stats container'>
        <div className='grid-stats-left'>
            <p>Donations Made</p>
            <h1>${donations}</h1>
        </div>
        <div className='grid-stats-right'>
            <p>Rewards Earned</p>
            <h1>${rewards}</h1>
        </div>
    </div>
  )
}
