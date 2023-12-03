import React, { useState, useEffect } from 'react';
// import { googleLogout, useGoogleLogin } from '@react-oauth/google';
// import axios from 'axios';

function Dashboard() {
    const user = sessionStorage.getItem("user") ?? ""
    const profile = JSON.parse(user)
    
    console.log(profile);
    
    
    return (
        <div>
            <h2>Dashboard</h2>
            <br />
            <br />
            <div>
                <h5>Welcome {profile.first_name}</h5>
                <h6>Your email is: {profile.email}</h6>
            </div>
        </div>
    );
}
export default Dashboard;