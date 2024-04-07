import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { DateProvider } from './Components/DateContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DateProvider>
      <App />
    </DateProvider>
  </React.StrictMode>
);
