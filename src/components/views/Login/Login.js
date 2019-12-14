import React, {useEffect} from 'react';
import * as firebaseui from 'firebaseui';
// import firebase from 'firebase';
import Auxiliar from '../../../hoc/Auxiliar';
import {getUiConfig} from './LoginConfig';
import { withAuthentication } from '../../../session';

const Login = (props) => {

    useEffect(() => {    
        // firebase.analytics();
        const loginUi = firebaseui.auth.AuthUI.getInstance() ? firebaseui.auth.AuthUI.getInstance() : new firebaseui.auth.AuthUI(props.firebase.auth);        
        loginUi.start('#firebaseui-auth-container', getUiConfig());    
      });
      
    return ( 
        <Auxiliar>
            <h1>Welcome to Master Quiz</h1>
            <div id="firebaseui-auth-container"></div>
            <div id="loader">Loading...</div>
        </Auxiliar>
     );
}
 
export default withAuthentication(Login);