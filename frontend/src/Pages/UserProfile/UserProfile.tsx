import React, { useEffect, useState } from 'react'
import { Table } from '../../Components/Table/Table'
import { getUserInTheSession } from '../../Utils/SessionStorage'

export const UserProfile = () => {
  const currentUser = getUserInTheSession()
  console.log(currentUser, ' currentuser');
  
  const userId = currentUser._id
  // set states
  // const [paymentArr, setPaymentArr] = useState<any>()
  const [payArr, setPayArr] = useState<any>()
  // const [campaignName, setCampaignName] = useState<any>()
  // const [donation, setDonation] = useState<any>()
  // const [reward, setReward] = useState<any>()

  useEffect(() => {
    const updateTableInfo = async () => {
      const payHistoryArr: { paymentId: any; amount: any; reward: any }[] = []
      const userPaymentObject = await fetch('http://localhost:3001/userpayments/' + userId)
      const userPaymentInfo = await userPaymentObject.json()
      const paymentArray = userPaymentInfo.payments
      // setPaymentArr(paymentArray)
      paymentArray.forEach(async (payment: any) => {
        const paymentObj = await fetch('http://localhost:3001/payments/' + payment)
        const paymentObjData = await paymentObj.json()
        const payObj: { paymentId: any; amount: any; reward: any } = {
          paymentId: paymentObjData._id,
          amount: paymentObjData.amount,
          reward: paymentObjData.rewardGenerated
        }
        payHistoryArr.push(payObj)
      });
      setPayArr(payHistoryArr)
      console.log(payHistoryArr);
    }
    updateTableInfo()
  }, []
  )

  console.log(payArr);


  return (
    <div>
      <Table payArr={payArr} />
    </div>
  )
}
