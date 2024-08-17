import React from 'react';
import Typer from './Typer.jsx';
import './scrollFade.css';
import './sectionOne.css';

function SectionOne() {
    const styles = {
        typer: {
            position: 'relative',
            top: '40px',
            transform: 'translateY(-50%)',
            fontFamily: '"Roboto", sans-serif',
            color: '#f5f5f5',
            textAlign: 'center',
            fontSize: '50px',
            textDecoration: 'underline',
            lineHeight: '1.2',
        },
        cursor: {
            fontSize: '50px',
            lineHeight: '1.2',
            display: 'inline-block',
            marginLeft: '-5px',
        },
        typerContainer: {
            height: '90px',
            width: '300px',
            backgroundColor: '#7d49de',
            margin: '0 auto',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        },
        aboutUsContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '50px',
        },
        aboutUsHeader: {
            color: '#7d49de',
            textAlign: 'center',
            fontFamily: '"Roboto", sans-serif',
            textDecoration: 'underline',
            marginBottom: '20px',
        },
        aboutUsText: {
            color: '#36454F',
            fontFamily: '"Roboto", sans-serif',
            textAlign: 'center',
            fontSize: '20px',
            lineHeight: '1.5',
            maxWidth: '600px',
            padding: '0 20px',
        },
        main: {
            position: 'relative',
            top: '100px',
            overflow: 'hidden',
            height: '100vh', // Ensure the container has enough height
        },
        circle: {
            position: 'absolute',
            borderRadius: '50%',
            backgroundColor: 'lightgrey',
            zIndex: '-1',
        },
        circle1: {
            width: '150px',
            height: '150px',
            top: '10%',
            left: '20%',
        },
        circle2: {
            width: '250px',
            height: '250px',
            top: '60%',
            left: '70%',
        },
        circle3: {
            width: '100px',
            height: '100px',
            top: '40%',
            left: '40%',
        },
        smallCircle1: {
            width: '50px',
            height: '50px',
            top: '15%',
            left: '80%',
        },
        smallCircle2: {
            width: '40px',
            height: '40px',
            top: '70%',
            left: '10%',
        },
        smallCircle3: {
            width: '60px',
            height: '60px',
            top: '50%',
            left: '25%',
        },
        smallCircle4: {
            width: '30px',
            height: '30px',
            top: '30%',
            left: '50%',
        },
        smallCircle5: {
            width: '45px',
            height: '45px',
            top: '80%',
            left: '60%',
        }
    };

    return (
        <>
        <div style={styles.main} className="scroll-fade">
            {/* Larger circles positioned behind content */}
            <div style={{ ...styles.circle, ...styles.circle1 }}></div>
            <div style={{ ...styles.circle, ...styles.circle2 }}></div>
            <div style={{ ...styles.circle, ...styles.circle3 }}></div>

            {/* Smaller circles positioned behind content */}
            <div style={{ ...styles.circle, ...styles.smallCircle1 }}></div>
            <div style={{ ...styles.circle, ...styles.smallCircle2 }}></div>
            <div style={{ ...styles.circle, ...styles.smallCircle3 }}></div>
            <div style={{ ...styles.circle, ...styles.smallCircle4 }}></div>
            <div style={{ ...styles.circle, ...styles.smallCircle5 }}></div>

            {/* Mini circles with animation */}
            <div className='mini-circle mini-circle-one'></div>
            <div className='mini-circle mini-circle-two'></div>
            <div className='mini-circle mini-circle-three'></div>
            <div className='mini-circle mini-circle-four'></div>
            <div className='mini-circle mini-circle-five'></div>
            <div className='mini-circle mini-circle-six'></div>
            <div className='mini-circle mini-circle-seven'></div>
            <div className='mini-circle mini-circle-eight'></div>
            <div className='mini-circle mini-circle-nine'></div>
            <div className='mini-circle mini-circle-ten'></div>

            {/* Your existing content */}
            <div style={styles.typerContainer} className="scroll-fade">
                <h1 id="animatedText" style={styles.typer}></h1>
                <Typer wordOne="  Empower  " wordTwo="  Educate  " wordThree="  Enhance  " elementID="animatedText" />
            </div>
            <div style={styles.aboutUsContainer} className="scroll-fade">
                <h1 style={styles.aboutUsHeader}>About Us</h1>
                <p style={styles.aboutUsText}>
                    DevFinTech offers a transformative platform to empower and educate the youth in fintech and financial literacy.
                </p>
            </div>
            <p style={{ textAlign: 'center', color: '#7d47de', fontSize: '2em', position: 'relative', top: '60px', fontFamily: '"Roboto", sans-serif' }}>Scroll Down</p>
            <h1 style={{ textAlign: 'center', color: '#7d47de', fontSize: '5em', position: 'relative', bottom: '0%' }} className='arrow'>&#8615;</h1>
        </div>
        <div className='contact-sidebar'>
            <button className='social-media-icon'><i className='fab fa-instagram icon'></i></button>
            <button className='social-media-icon'><i className='fab fa-tiktok icon'></i></button>
            <button className='social-media-icon'><i className='fab fa-linkedin-in icon'></i></button>
            <button className='social-media-icon'><i className='fa-solid fa-phone icon'></i></button>
            <button className='social-media-icon'><i className='fa-solid fa-envelope icon'></i></button>
        </div>
        </>
    );
}

export default SectionOne;
