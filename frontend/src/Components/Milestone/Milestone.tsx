import React, { useEffect, useState } from 'react'
import './Milestone.css'

export const Milestone = (campaignId: any) => {
  const [txns, setTxns] = useState<any>()
  const [donationsReceived, setDonationsReceived] = useState<any>()
  const [milestoneTarget, setmilestoneTarget] = useState<any>()
  const [milestoneReceived, setMilestoneReceived] = useState<any>()

  useEffect(() => {
    const getMilestoneStats = async () => {
      const paymentInfo = await fetch('http://localhost:3001/campaignpayments/' + campaignId.campaignId)
      const paymentInfoData = await paymentInfo.json()
      const milestoneStats = await fetch('http://localhost:3001/milestones/' + campaignId.campaignId)
      const milestoneStatsData = await milestoneStats.json()
      // if there are no payments recieved yet for this campaign
      if (paymentInfoData === null) {
        setTxns(0)
        setDonationsReceived(0)
      } else {
        setTxns(paymentInfoData.users.length)
        setDonationsReceived(paymentInfoData.totalDonations)
      }
      // if milestone is not yet created for this campaign
      if (milestoneStatsData === null) {
        setmilestoneTarget(0)
        setMilestoneReceived(0)
      } else {
        setmilestoneTarget(milestoneStatsData.target)
        setMilestoneReceived(milestoneStatsData.received)
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
          <p>Last Milestone</p>
          <small>Target</small>
          <h6>
            { milestoneTarget === 0 ? "No Milestone set" : milestoneTarget }
          </h6>
          {/* <small>Received</small>
          <h6>${milestoneReceived}</h6> */}
        </div>
        <div className='grid-milestone-right'>
          <p>Total Donations Received</p>
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
