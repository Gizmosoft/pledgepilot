import React, { useState } from "react";
import "./Table.css";

export const Table = ({ payArr }: any) => {
  const [payments, setPayments] = useState(payArr);
  return (
    <div className="tabular-data">
      <table id="customers">
        <thead>
          <tr>
            <th>Payment #</th>
            <th>Donation</th>
            <th>Reward Earned</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payItem: any, index: React.Key | null | undefined) => (
            <tr key={index}>
              <td>{payItem.paymentId}</td>
              <td>{payItem.amount}</td>
              <td>{payItem.reward}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
