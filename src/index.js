import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import dotenv from 'dotenv'

dotenv.config()

process.env.REACT_APP_PERSON_API_URL ? console.info('Api url: ', process.env.REACT_APP_PERSON_API_URL) : console.error('Enviroment Variable REACT_APP_PERSON_API_URL not defined!')

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
