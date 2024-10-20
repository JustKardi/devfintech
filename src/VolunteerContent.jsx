import React from 'react';
import FormfacadeEmbed from "@formfacade/embed-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faHandsHelping, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './VolunteerContent.css';

const VolunteerContent = () => {
    return (
        <div className="volunteer-container">
            <h1 className="volunteer-title">Join Our Volunteer Program</h1>
            <p className="volunteer-description">
                Our volunteer program offers you the chance to contribute to our mission while gaining valuable experience. We welcome individuals from all backgrounds to bring their skills and passion to help us make an impact.
            </p>
            <div className="volunteer-steps">
                <h2>How to Get Involved</h2>
                <ol>
                    <li>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="step-icon" />
                        To start a chapter with us, fill out the "Start a Chapter" form below.
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faHandsHelping} className="step-icon" />
                        To help volunteer with DevFinTech, fill out the "Volunteer Form" below to start contributing.
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faEnvelope} className="step-icon" />
                        Our team will contact you soon after you fill out the forms for next steps.
                    </li>
                </ol>
            </div>

            <div className="form-container">
                <h2>Start a Chapter</h2>
                <FormfacadeEmbed
                    formFacadeURL="https://formfacade.com/include/101278880108573731030/form/1FAIpQLSeZdg0nsUnMDfHNV4OSI2DF-ugQ4MBq35ALX7azSphPQb3wqQ/classic.js/?div=ff-compose"
                    onSubmitForm={() => console.log('Form submitted')}
                />
            </div>

            <div className="form-container">
                <h2>Volunteer Form</h2>
                <FormfacadeEmbed
                    formFacadeURL="https://formfacade.com/include/101278880108573731030/form/1FAIpQLSeZdg0nsUnMDfHNV4OSI2DF-ugQ4MBq35ALX7azSphPQb3wqQ/classic.js/?div=ff-compose"
                    onSubmitForm={() => console.log('Form submitted')}
                />
            </div>
        </div>
    );
}

export default VolunteerContent;
