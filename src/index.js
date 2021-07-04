import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AddSusbscriber from './AddSubscriber';
import './common/common.css';
import PhoneDirectory from './PhoneDirectory';

ReactDOM.render(
  <React.StrictMode>
    <PhoneDirectory />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
