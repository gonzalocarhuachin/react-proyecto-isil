import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Mainbar from './Mainbar';
import Mainfooter from './Mainfooter';
import Mainheader from './Mainheader';
import Empleados from './Components/Empleados';
import Terminos from './Components/Terminos';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Mainheader />
      <Mainbar />
      <main>
        <Route exact path="/" component={App}/>
        <Route exact path="/empleados" component={Empleados}/>
        <Route exact path="/terminos" component={Terminos}/>
      </main>
      <Mainfooter />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();
