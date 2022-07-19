import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.scss';
import AppRouter from "./core/Router/Router";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <AppRouter/>
  </React.StrictMode>
);
