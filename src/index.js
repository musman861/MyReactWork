import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Headerr from './Headerr';
import Navigation from './Navigation';
import MainPart from './MainPart';
import Footerr from './Footerr';
import ContactUs from './ContactUs';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';


const variable = <div>
    <Headerr />
    <Navigation />
    <MainPart />
    <ContactUs />
    <Footerr />
</div>

ReactDOM.render(variable , document.getElementById("root"));


serviceWorker.unregister();
