import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

// This component checks if the user is authenticated or not
// If yes, then redirects them to the desired page
// Else, navogates them to the login page
const ProtectedRoutes = () => {
    const isAuthenticated = sessionStorage.getItem('user') !== null

    return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoutes
