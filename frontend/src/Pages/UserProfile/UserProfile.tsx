import React, { useEffect, useState } from 'react'
import { Table } from '../../Components/Table/Table'
import { getUserInTheSession } from '../../Utils/SessionStorage'

export const UserProfile = () => {
  const currentUser = getUserInTheSession()
  console.log(currentUser, ' currentuser');
  
  const userId = currentUser._id
  // set states
  const [payArr, setPayArr] = useState<any>()

  // const userPaymentObject = await fetch('http://localhost:3001/userpayments/' + userId)
  // const userPaymentInfo = await userPaymentObject.json()
  // const paymentObj = await fetch('http://localhost:3001/payments/' + payment);
  // const paymentObjData = await paymentObj.json();


  return (
    <div>
      <Table payArr={payArr} />
    </div>
  )
}
