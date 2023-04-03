import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Store} from './Store';
import { Provider } from 'react-redux';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"/>

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={Store}>
       <App />
    </Provider>
    
  </React.StrictMode>
);