import React from 'react';
import ReactDOM from 'react-dom/client';
import VolunteerPage from './VolunteerPage.jsx';
import './index.css'; 

ReactDOM.createRoot(document.getElementById('volunteer-root')).render(
    <React.StrictMode>
        <VolunteerPage />
    </React.StrictMode>,
);
