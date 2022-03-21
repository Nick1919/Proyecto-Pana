import React from 'react';
import ReactDOM from 'react-dom';
import './scss/App.scss';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    
    <App />

    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);


