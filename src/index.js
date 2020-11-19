import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Mensaje from './Mensaje';
import Mainbar from './Mainbar';
import Banner from './Banner';
import Frase from './Frase';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Mainbar />
    <Mensaje />
    <Banner />
    <Frase />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
