import * as firebase from 'firebase';

export const getFirebaseConfig = () => {
    return {
        apiKey: "AIzaSyBTw-Z83LNl7nXdgUIs7KkWbmzDlFKXaaw",
        authDomain: "masterquiz-225f5.firebaseapp.com",
        databaseURL: "https://masterquiz-225f5.firebaseio.com",
        projectId: "masterquiz-225f5",
        storageBucket: "masterquiz-225f5.appspot.com",
        messagingSenderId: "894770245769",
        appId: "1:894770245769:web:539ffb915e52cf27c69658",
        measurementId: "G-9359MPXVSY"
    };
};


export const getUiConfig = () => {
    return {
        callbacks: {
            signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                // User successfully signed in.
                // Return type determines whether we continue the redirect automatically
                // or whether we leave that to developer to handle.
                return true;
            },
            uiShown: function () {
                // The widget is rendered.
                // Hide the loader.
                document.getElementById('loader').style.display = 'none';
            }
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        signInSuccessUrl: '<url-to-redirect-to-on-success>',
        signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            //firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            //firebase.auth.PhoneAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        tosUrl: '<your-tos-url>',
        // Privacy policy url.
        privacyPolicyUrl: '<your-privacy-policy-url>'
    };
};