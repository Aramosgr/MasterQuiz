import React, { useState, useEffect } from 'react';

import AuthUserContext from './AuthUserContext';
import { withFirebase } from '../firebase';


const withAuthentication = Component => {
    const WithAuthentication = (props) => {

        const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('authUser')));

        useEffect(() => {
            const listener = props.firebase.onAuthUserListener(
                authUser => {
                    localStorage.setItem('authUser', JSON.stringify(authUser));
                    setAuthUser(authUser);
                },
                () => {
                    localStorage.removeItem('authUser');
                    setAuthUser(null);
                },
            );

            return function cleanup() {
                listener();
            };
        },[]);

        return (
            <AuthUserContext.Provider value={authUser}>
                <Component {...props} />
            </AuthUserContext.Provider>
        );

    }

    return withFirebase(WithAuthentication);
};

export default withAuthentication;
