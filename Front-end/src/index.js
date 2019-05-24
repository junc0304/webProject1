import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
=======
import dotenv from 'dotenv';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
dotenv.config();
>>>>>>> 42a04bd8f97cc01189dd62c8cefc855d70b8f1d2

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
