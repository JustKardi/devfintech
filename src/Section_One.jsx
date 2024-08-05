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
            color: '#7d49de',
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
            backgroundColor: '#F5F5F5',
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
        }
    };

    return (
        <div style={styles.main} className="scroll-fade">
            <div style={styles.typerContainer} className="scroll-fade">
                <h1 id="animatedText" style={styles.typer}></h1>
                <Typer wordOne="  Empower  " wordTwo="  Educate  " wordThree="  Enhance  " elementID="animatedText" />
                ...
            </div>
            <div style={styles.aboutUsContainer} className="scroll-fade">
                <h1 style={styles.aboutUsHeader}>About Us</h1>
                <p style={styles.aboutUsText}>DevFinTech offers a transformative platform to empower and educate the youth in fintech and financial literacy.</p>
            </div>
        </div>
    );
}

export default SectionOne;

