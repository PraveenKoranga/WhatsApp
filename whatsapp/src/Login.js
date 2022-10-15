import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './firebase';
import './Login.css';
import { actionTypes } from './reducer';
import { useStateValue } from './StatProvider';

function Login() {
    const [{ }, dispatch] = useStateValue();
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://tse3.mm.bing.net/th?id=OIP.PbBfQPm_v6SBjl-EE1msGAHaHs&pid=Api&P=0&w=300&h=300" />

                <div className="login__text">
                    <h1>Sign in to Whatsapp</h1>
                </div>
                <Button onClick={signIn}>Sign In With Google</Button>
            </div>

        </div>
    )
}

export default Login
