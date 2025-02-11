import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from "jwt-decode";
import { registerUserViaOauth, userDB } from '../../services/oauthService';

const GoogleLoginComponent = () => {
    const navigate = useNavigate()
    // const [user, setUser] = useState([])
    const handleLoginSuccess = async (credentialResponse: any) => {
        const userCredentials = jwtDecode(credentialResponse.credential)
        const userObject = JSON.parse(JSON.stringify(userCredentials))

        // create user object
        const user = {
            'first_name': userObject.given_name,
            'last_name': userObject.family_name,
            'email': userObject.email
        }
        try {
            const userDBResponse = await userDB(user.email);

            // if user doesn't exist yet, then add the user to the DB
            if (Object.keys(userDBResponse).length === 0) {
                
                // use the post api endpoint
                const currentDate = new Date().toISOString().split('T')[0];
                try {
                    const registerUserViaOauthResponse = await registerUserViaOauth({
                        firstName: user.first_name,
                        lastName: user.last_name,
                        emailAddress: user.email,
                        accountCreationDate: currentDate
                    })

                    if(registerUserViaOauthResponse){
                        const addedUser = await userDB(user.email);
                        sessionStorage.setItem("user", JSON.stringify(addedUser[0]));
                        localStorage.setItem("user",JSON.stringify(addedUser[0]));
                        navigate('/dashboard')
                    }
                    else {
                        // show notif snackbar
                    }
                } catch (error: any) {
                    // show notif snackbar
                }
            }
            // if user Exists, then login the user
            else {
                sessionStorage.setItem("user", JSON.stringify(userDBResponse[0]));
                localStorage.setItem("user",JSON.stringify(userDBResponse[0]));
                navigate('/dashboard')
            }
        } catch (error: any) {
            // show notif snackbar
        }
    }
    const handleLoginFailure = () => {
        // show notif snackbar
    }

    return (
        <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginFailure}
        />
    )
}

export default GoogleLoginComponent
