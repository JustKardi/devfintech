import React from 'react';
import ReactDOM from 'react-dom/client';
import OurImpact from './OurImpact.jsx';
import './index.css'; // Global styles
import './scrollFade.css'; // Scroll fade animations, if needed

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

document.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

// Render the OurImpact component into the 'impact-root' div in our_impact.html
ReactDOM.createRoot(document.getElementById('impact-root')).render(
    <React.StrictMode>
        <OurImpact />
    </React.StrictMode>
);
