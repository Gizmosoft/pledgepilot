import React, { useEffect, useState } from 'react'
import './Milestone.css'

export const Milestone = (campaignId: any) => {
  const [txns, setTxns] = useState<any>()
  const [donationsReceived, setDonationsReceived] = useState<any>()

  useEffect(() => {
    const getMilestoneStats = async () => {
      const paymentInfo = await fetch('http://localhost:3001/campaignpayments/' + campaignId.campaignId)
      const paymentInfoData = await paymentInfo.json()
      if (paymentInfoData === null) {
        setTxns(0)
        setDonationsReceived(0)
      } else {
        setTxns(paymentInfoData.users.length)
        setDonationsReceived(paymentInfoData.totalDonations)
      }
    }
    getMilestoneStats()
  }, [])

  return (
    <div className='milestones'>
      <h1>Milestones</h1>
      <div className='grid-milestone'>
        {/* TODO: Data fetch from milestone DB */}
        <div className='grid-milestone-left'>
          <p>Milestone</p>
          <h2>$1000</h2>
        </div>
        <div className='grid-milestone-right'>
          <p>Donations Received</p>
          <h2>${donationsReceived}</h2>
        </div>
        <div className='grid-milestone-right'>
          <p>Number of Transactions</p>
          <h2>{txns}</h2>
        </div>
      </div>
    </div>
  )
}
