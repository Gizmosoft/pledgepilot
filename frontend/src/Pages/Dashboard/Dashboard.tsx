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
                <h3>Welcome {profile.firstName + ' ' + profile.lastName}</h3>
                <h6>Your email is: {profile.emailAddress}</h6>
            </div>
        </div>
    );
}
export default Dashboard;