import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from "jwt-decode";

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
            const userDBResponse = await fetch('http://localhost:3001/users/oauth/' + user.email)
            console.log('userDBResponse:');
            console.log(userDBResponse);
            
            const userJsonResponse = await userDBResponse.json()
            
            console.log(userJsonResponse);

            // if user doesn't exist yet, then add the user to the DB
            if (Object.keys(userJsonResponse).length === 0) {
                console.log('Reached here inside try!');
                
                // use the post api endpoint
                const currentDate = new Date().toISOString().split('T')[0];
                try {
                    const response = await fetch('http://localhost:3001/users/oauth/register', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            firstName: user.first_name,
                            lastName: user.last_name,
                            emailAddress: user.email,
                            accountCreationDate: currentDate
                        })
                    })
                    if(response.ok){
                        const addedUser = await fetch('http://localhost:3001/users/oauth/' + user.email)
                        const addedUserJson = await addedUser.json()
                        console.log(addedUser);
                        sessionStorage.setItem("user", JSON.stringify(addedUserJson[0]));
                        localStorage.setItem("user",JSON.stringify(addedUserJson[0]));
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
                sessionStorage.setItem("user", JSON.stringify(userJsonResponse[0]));
                localStorage.setItem("user",JSON.stringify(userJsonResponse[0]));
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
