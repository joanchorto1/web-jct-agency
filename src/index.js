import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import emailjs from '@emailjs/browser';

emailjs.init('PrtHsOGCYBrChfJU3');

const rootElement = document.getElementById('root');
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// The site is prerendered for SEO, but runtime libraries such as AOS mutate
// the HTML snapshot before React boots. Rendering from a clean root avoids
// hydration mismatches in production while keeping the prerendered HTML for bots.
rootElement.innerHTML = '';
createRoot(rootElement).render(app);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
