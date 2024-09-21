import React from 'react';
import ReactDOM from 'react-dom/client';
import TeamPage from './team.jsx';
import './index.css'; // Import any global styles
import './scrollFade.css'; // If the scroll fade is needed here

// Scroll Fade Animation (reuse the function from main.jsx if necessary)
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

// Render the TeamPage into the 'team-root' div in the_team.html
ReactDOM.createRoot(document.getElementById('team-root')).render(
    <React.StrictMode>
        <TeamPage />
    </React.StrictMode>,
);
