import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthApp } from './AuthApp';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthApp />
  </React.StrictMode>
);
