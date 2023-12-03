import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from "jwt-decode";

const GoogleLoginComponent = () => {
    const navigate = useNavigate()
    // const [user, setUser] = useState([])
    const handleLoginSuccess = async (credentialResponse:any) => {
        const userCredentials = jwtDecode(credentialResponse.credential)
        const userObject = JSON.parse(JSON.stringify(userCredentials))
        
        // create user object
        const user = {
            'first_name': userObject.given_name,
            'last_name': userObject.family_name,
            'email': userObject.email
        }

        // Check if the user email is already registered on the DB
        console.log('fetch api testing');
        
        try{
            const userDBResponse = await  fetch(process.env.BASE_URL + 'users/' + user.email)
            const userJsonResponse = await userDBResponse.json()
            console.log(userJsonResponse)
        } catch (error:any) {
            console.error('Error fetching user:', error.message);
        }
        
        // if yes then login the user
        // if no, then add the user to the DB
        
        sessionStorage.setItem("user", JSON.stringify(user))
        navigate('/dashboard')
    }
    const handleLoginFailure = () => {
        console.log('Login Failed!');
    }

    return (
        <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginFailure}
        />
    )
}

export default GoogleLoginComponent
