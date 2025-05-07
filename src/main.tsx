import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './style.css';


// Dynamically adjust bottom padding for mobile sidebar
function adjustSidebarPadding() {
  const sidebar = document.querySelector('.sidebar, aside');
  const main = document.querySelector('main') || document.querySelector('.main-content') || document.body;
  if (!sidebar || !main) return;
  const isMobile = window.matchMedia('(max-width: 900px)').matches;
  const isFixed = getComputedStyle(sidebar).position === 'fixed';
  if (isMobile && isFixed) {
    const sidebarHeight = sidebar.offsetHeight;
    main.style.paddingBottom = sidebarHeight + 'px';
  } else {
    main.style.paddingBottom = '';
  }
}

window.addEventListener('resize', adjustSidebarPadding);
window.addEventListener('DOMContentLoaded', adjustSidebarPadding);
const observer = new MutationObserver(adjustSidebarPadding);
observer.observe(document.body, { childList: true, subtree: true });


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      
        <App />
      
    </BrowserRouter>
  </React.StrictMode>
);