import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { IntlProvider } from "react-intl";
import messages_en from "./constants/translations/en.json";
import messages_es from "./constants/translations/es.json";
import FirebaseHandler, { FirebaseContext } from './firebase';

const messages = {
    'es': messages_es,
    'en': messages_en
};

const language = navigator.language.split(/[-_]/)[0]; 

ReactDOM.render(
    <IntlProvider locale={language} messages={messages[language]}>
        <FirebaseContext.Provider value={new FirebaseHandler()}>
            <App />
        </FirebaseContext.Provider>
    </IntlProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
