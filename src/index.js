import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./components/navStyles.css"
import './pages/homepage1Styles.css';
import './components/smallNavStyles.css';
import './pages/AboutUsStyles.css'

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