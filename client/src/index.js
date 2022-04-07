import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import './index.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
  <BrowserRouter >
   <App/>
  </BrowserRouter>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn mogit merre: https://bit.ly/CRA-vitals
reportWebVitals();
