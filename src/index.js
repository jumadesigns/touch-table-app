import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Circle from './Circle';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Circle />
  </React.StrictMode>
);


