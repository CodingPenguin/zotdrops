import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FormMap from './FormMap';
import reportWebVitals from './reportWebVitals';
import DatesCalendar from './DatesCalendar';
import About from './About';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <FormMap />
    <DatesCalendar />
    <About />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
