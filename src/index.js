import React from 'react';
import ReactDOM from 'react-dom';
import './scss/App.scss';
import App from './App.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';


ReactDOM.render(
  <React.StrictMode>
    <Header/>
    
    <App />

    <Footer/>
  </React.StrictMode>,
  document.getElementById("root")
);
