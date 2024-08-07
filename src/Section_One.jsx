import React from 'react';
import Typer from './Typer.jsx';
import './scrollFade.css';  // Import the scroll fade CSS

function SectionOne() {
    const styles = {
        typer: {
            position: 'relative',
            top: '40px',
            transform: 'translateY(-50%)',  // Center the text vertically
            fontFamily: '"Roboto", sans-serif',
            color: '#f5f5f5',
            textAlign: 'center',
            fontSize: '50px',
            textDecoration: 'underline',
            lineHeight: '1.2',  // Adjust line height for better alignment
        },
        cursor: {
            fontSize: '50px', // Match the cursor size with the text size
            lineHeight: '1.2', // Ensure cursor is aligned with text
            display: 'inline-block', // Ensure cursor stays on the same line
            marginLeft: '-5px', // Adjust margin to bring it closer to the text
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
            padding: '0 20px', // Add some padding for mobile view
        },
        main: {
            position: 'relative',
            top: '100px',
            overflow: 'hidden',
        },
        circle: {
            position: 'absolute',
            borderRadius: '50%',
            backgroundColor: 'lightgrey',
            zIndex: '-1', // Position behind other elements
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
        // Additional smaller circles
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

            <div style={styles.typerContainer} className="scroll-fade">
                <h1 id="animatedText" style={styles.typer}></h1>
                <Typer wordOne="  Empower  " wordTwo="  Educate  " wordThree="  Enhance  " elementID="animatedText" />
            </div>

            <div style={styles.aboutUsContainer} className="scroll-fade">
                <h1 style={styles.aboutUsHeader}>About Us</h1>
                <p style={styles.aboutUsText}>DevFinTech offers a transformative platform to empower and educate the youth in fintech and financial literacy.</p>
            </div>
        </div>
    );
}

export default SectionOne;
