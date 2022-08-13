import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DoctorsProvider } from './context/DoctorsContext';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <DoctorsProvider>
      <App />
    </DoctorsProvider>
  </React.StrictMode>
);
