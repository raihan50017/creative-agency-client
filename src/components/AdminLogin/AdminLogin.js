import React from 'react';
import logo from '../../images/logos/logo.png';
import './AdminLogin.css';
import google from '../../images/google.png';
import { Link, useHistory } from 'react-router-dom';
import { handleGoogleSignIn } from '../Login/LoginManager';
import { useContext } from 'react';
import { userContext } from '../../App';

// initializeLoginFramework();

const AdminLogin = () => {
    const history = useHistory();
    const[loggedInUser, setLoggedInUser] = useContext(userContext)

    const googleSignIn = () =>{
        handleGoogleSignIn()
        .then(res => {
            const newInfo = { ...loggedInUser };
            newInfo.name = res.name;
            newInfo.email = res.email;
            newInfo.img = res.img;
            setLoggedInUser(newInfo);
            history.push('/dashboard')
        })
    }

    return (
        <div>
            <div className="d-flex justify-content-center mt-5 mb-5">
                <img style={{ height: '50px' }} src={logo} alt="Logo"></img>
            </div>
            <div className="d-flex justify-content-center">
                <div className="login-form d-flex align-items-center justify-content-center">
                    <div className="text-center">
                        <h4 className="text-center mb-4">Login With</h4>
                        <button onClick={googleSignIn} className="google-btn"><img style={{height:'25px'}} src={google} alt="G"></img><span className="ml-2">Continue with google</span></button>
                        <p className="mr-1">If you aren't registered as admin <Link to="/adminRegistration">Register now</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;