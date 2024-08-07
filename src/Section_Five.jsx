import React from 'react';
import empower_icon from './assets/empower_icon_white.png';
import './scrollFade.css';

function Section_Five() {

    const styles = {
        main: {
            backgroundColor: '#7d49e6', // Purple background
            width: '100%',
            position: 'relative', // Allow proper positioning of circles
            height: '500px',
            overflow: 'hidden', // Ensure circles stay within bounds
            zIndex: '1',
        },
        title: {
            fontFamily: '"Roboto", sans-serif',
            color: '#F5F5F5',
            position: 'absolute', // Changed to absolute for better positioning
            top: '15%', // Adjusted to ensure visibility
            left: '87%',
            transform: 'translateX(-50%)',
            fontSize: '50px',
            textDecoration: 'underline',
            zIndex: '1', // Ensure text is above circles
            width: '100%',
        },
        text: {
            color: '#F5F5F5',
            position: 'absolute', // Changed to absolute for better positioning
            top: '40%', // Adjusted to ensure visibility
            left: '63%',
            transform: 'translateX(-50%)',
            fontSize: '20px',
            width: '60%',
            textAlign: 'center',
            lineHeight: '2.5',
            zIndex: '1', // Ensure text is above circles
            fontFamily: '"Roboto", sans-serif',
        },
        circle: {
            position: 'absolute',
            borderRadius: '50%',
            backgroundColor: '#5e3aaf',
            zIndex: '-1', // Ensure circles are behind content
        },
        circle1: {
            width: '150px',
            height: '150px',
            top: '10%',
            left: '20%',
        },
        circle2: {
            width: '200px',
            height: '200px',
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
            top: '20%',
            left: '80%',
        },
        smallCircle2: {
            width: '40px',
            height: '40px',
            top: '70%',
            left: '10%',
        }
    }

    return (
        <div style={styles.main}>
            {/* Light grey circles positioned behind content */}
            <div style={{ ...styles.circle, ...styles.circle1 }}></div>
            <div style={{ ...styles.circle, ...styles.circle2 }}></div>
            <div style={{ ...styles.circle, ...styles.circle3 }}></div>
            <div style={{ ...styles.circle, ...styles.smallCircle1 }}></div>
            <div style={{ ...styles.circle, ...styles.smallCircle2 }}></div>

            <img src={empower_icon} className='scroll-fade' alt="Empower Icon" />
            <h1 style={styles.title} className='scroll-fade'>Empowering the Future Generation</h1>
            <p style={styles.text} className='scroll-fade'>DevFinTech's platform is designed by educators and experts in the field, ensuring a comprehensive and engaging educational experience for all participants.</p>
        </div>
    );
}

export default Section_Five;
