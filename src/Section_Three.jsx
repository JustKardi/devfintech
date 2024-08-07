import React from 'react';
import './scrollFade.css';  // Import the scroll fade CSS

function Section_Three() {
    const styles = {
        main: {
            position: 'relative',
            top: '175px',
            overflow: 'hidden',
        },
        header: {
            textAlign: 'center',
            fontFamily: '"Roboto", sans-serif',
            color: '#7d49de',
            textDecoration: 'underline',
        },
        paragraph: {
            textAlign: 'center',
            fontFamily: '"Roboto", sans-serif',
            color: '#7d49de',
            lineHeight: '2.5',
            width: '50%',
            margin: 'auto'
        },
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
            top: '20%',
            left: '10%',
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
            top: '75%',
            left: '25%',
        },
        // Smaller circles
        smallCircle1: {
            width: '50px',
            height: '50px',
            top: '30%',
            left: '80%',
        },
        smallCircle2: {
            width: '60px',
            height: '60px',
            top: '50%',
            left: '40%',
        },
        smallCircle3: {
            width: '40px',
            height: '40px',
            top: '70%',
            left: '20%',
        }
    };

    return (
        <div style={styles.main} className="scroll-fade">
            {/* Light grey circles positioned behind content */}
            <div style={{ ...styles.circle, ...styles.circle1 }}></div>
            <div style={{ ...styles.circle, ...styles.circle2 }}></div>
            <div style={{ ...styles.circle, ...styles.circle3 }}></div>
            <div style={{ ...styles.circle, ...styles.smallCircle1 }}></div>
            <div style={{ ...styles.circle, ...styles.smallCircle2 }}></div>
            <div style={{ ...styles.circle, ...styles.smallCircle3 }}></div>

            <h1 style={styles.header} className="scroll-fade">What We Do</h1>
            <p style={styles.paragraph} className="scroll-fade">
                At DevFintech, we help students learn important financial and technology skills. Our lessons cover a wide range of topics to give students a complete understanding of money management and modern financial tools. Our fun and practical courses will help you gain the skills and knowledge to manage your money wisely and understand new financial technologies. Join us at DevFintech and get the tools you need to build a secure and successful future.
            </p>
        </div>
    );
}

export default Section_Three;
