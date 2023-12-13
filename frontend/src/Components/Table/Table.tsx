import React, { useEffect, useState } from 'react'
import './Table.css'
import { User } from '../../types/User';

export const Table = (user: any) => {
    console.log(user.user._id);
    const userId = user.user._id

    // set states
    const [campaignName, setCampaignName] = useState<any>()
    const [donation, setDonation] = useState<any>()
    const [reward, setReward] = useState<any>()

    useEffect(() => {
        const updateTableInfo = async () => {
            const userPaymentObject = await fetch('http://localhost:3001/userpayments/' + userId)
            const userPaymentInfo = await userPaymentObject.json()
            const paymentArray = userPaymentInfo.payments
            paymentArray.forEach((payment: any) => {
                console.log(payment);
            });
            
        }
        updateTableInfo()
   }, []
   )

    return (
        <div className='tabular-data'>
            <table id="customers">
                <tbody>
                    <tr>
                        <th>Campaign Name</th>
                        <th>Donation</th>
                        <th>Reward Earned</th>
                        <th>Payment #</th>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td>Germany</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
