import React, {useEffect} from 'react';
import * as firebaseui from 'firebaseui';
import * as firebase from 'firebase';
import Auxiliar from '../../hoc/Auxiliar';
import {getFirebaseConfig, getUiConfig} from '../../helpers';

const Auth = (props) => {

    useEffect(() => {
        firebase.initializeApp(getFirebaseConfig());
        firebase.analytics();
        const loginUi = new firebaseui.auth.AuthUI(firebase.auth());        
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
 
export default Auth;