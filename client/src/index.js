import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import "./components/Navbar/navStyles.css"
import './pages/HomePage/homepage1Styles.css';
import './pages/AboutUsPage/AboutUsStyles.css'

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);