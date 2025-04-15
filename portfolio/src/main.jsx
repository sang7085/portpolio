import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './router/Router';
import './styles/scss/main.scss';

createRoot(document.getElementById('root')).render(
  // <React.StrictMode></React.StrictMode>
    <AppRouter />
);