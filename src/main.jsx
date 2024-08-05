import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './scrollFade.css';  // Import the scroll fade CSS

// Scroll Fade Animation
function handleScroll() {
  const fadeElements = document.querySelectorAll('.scroll-fade');

  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight) {
      el.classList.add('in-view');
    } else {
      el.classList.remove('in-view');
    }
  });
}

// Attach the scroll handler
document.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll); // Ensure elements are faded in when the page is loaded

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
