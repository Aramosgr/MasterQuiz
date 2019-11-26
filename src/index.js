import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { IntlProvider } from "react-intl";
import messages_en from "./assets/translations/en.json";
import messages_es from "./assets/translations/es.json";

const messages = {
    'es': messages_es,
    'en': messages_en
};

const language = navigator.language.split(/[-_]/)[0]; 

ReactDOM.render(
    <IntlProvider locale={language} messages={messages["es"]}>
        <App />
    </IntlProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
