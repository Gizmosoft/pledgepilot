import React, { useState, useEffect } from 'react';

function Dashboard() {
    const user = sessionStorage.getItem("user") ?? ""
    const profile = JSON.parse(user)
    
    return (
        <div>
            <h2>Dashboard</h2>
            <br />
            <br />
            <div>
                <h5>Welcome {profile.FirstName + ' ' + profile.LastName}</h5>
                <h6>Your email is: {profile.Email}</h6>
            </div>
        </div>
    );
}
export default Dashboard;