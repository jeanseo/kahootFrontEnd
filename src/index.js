import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from'./Components/pages/Main';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Main />, document.getElementById('root'));

serviceWorker.unregister();
