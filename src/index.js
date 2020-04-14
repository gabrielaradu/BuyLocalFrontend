import React from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.css'
import * as serviceWorker from './serviceWorker';
import Router from "./components/Router";
import i18n from "./config/i18n";
import {I18nextProvider} from "react-i18next";

ReactDOM.render(<I18nextProvider i18n={i18n}><Router /></I18nextProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
