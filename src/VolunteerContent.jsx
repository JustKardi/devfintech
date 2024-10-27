import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faHandsHelping, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './VolunteerContent.css';

const styles = {
    // Circle styles
    circle: {
      position: 'absolute',
      borderRadius: '50%',
      backgroundColor: 'lightgrey',
      zIndex: '-1', // Position behind other elements
    },
    circle1: {
      width: '150px',
      height: '150px',
      top: '40%',
      left: '10%',
    },
    circle2: {
      width: '200px',
      height: '200px',
      top: '90%',
      left: '80%',
    },
    smallCircle1: {
      width: '50px',
      height: '50px',
      top: '35%',
      left: '90%',
    },
    smallCircle2: {
      width: '60px',
      height: '60px',
      top: '130%',
      left: '40%',
    },
  };

const VolunteerContent = () => {
    return (
        <div className="volunteer-container">
            <div style={{ ...styles.circle, ...styles.circle1 }}></div>
            <div style={{ ...styles.circle, ...styles.circle2 }}></div>
            <div style={{ ...styles.circle, ...styles.smallCircle1 }}></div>
            <div style={{ ...styles.circle, ...styles.smallCircle2 }}></div>
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
                        To become an intern at DevFinTech, fill out the "Internship Form" below to start contributing.
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faEnvelope} className="step-icon" />
                        Our team will contact you soon after you fill out the forms for next steps.
                    </li>
                </ol>
            </div>

            <div className="form-container">
                <h2>Start a Chapter</h2>
                {/*FORM IFRAME*/}
            </div>

            <div className="form-container">
                <h2>Internship Form</h2>
                {/*FORM IFRAME*/}
            </div>
        </div>
    );
}

export default VolunteerContent;
