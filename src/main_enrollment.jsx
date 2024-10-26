import React from 'react';
import ReactDOM from 'react-dom/client';
import EnrollmentPage from './EnrollmentPage.jsx';
import './index.css'; // Global styles

// Scroll Fade Animation (optional if there are scroll effects)
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

// Render the EnrollmentPage component into the 'enrollment-root' div in enrollment.html
ReactDOM.createRoot(document.getElementById('enrollment-root')).render(
    <React.StrictMode>
        <EnrollmentPage />
    </React.StrictMode>
);
