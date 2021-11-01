import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useLocation, useHistory } from 'react-router-dom';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })


    }
    return (
        <div >
            <h2>Please Login</h2>
            <button onClick={handleGoogleLogin} className="btn btn-warning">Google login</button>
        </div>
    );
};

export default Login;