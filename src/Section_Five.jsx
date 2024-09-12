import React, { useState, useEffect } from 'react';
import empower_icon from './assets/empower_icon_white.png';
import './scrollFade.css';

function Section_Five() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // Function to handle window resize and update isMobile state
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Add event listener to update state on window resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Define styles for desktop and mobile
    const mobileStyles = {
        main: {
            backgroundColor: '#7d49e6',
            width: '100vw',
            position: 'relative',
            height: '600px', // Increased height for more room on mobile
            overflow: 'hidden',
            zIndex: '1',
            display: 'flex', // Use flexbox for layout
            flexDirection: 'column', // Stack text and image vertically
            alignItems: 'center',
            justifyContent: 'center',
        },
        title: {
            fontFamily: '"Roboto", sans-serif',
            fontSize: '250%',
            top: '5%', // Adjust top so it's clearly visible
            left: '50%',
            transform: 'translateX(-50%)',
            position: 'absolute',
            color: '#F5F5F5',
            textAlign: 'center',
            width: '90%', // Ensure the text fits within the screen
        },
        text: {
            fontFamily: '"Roboto", sans-serif',
            fontSize: '20px',
            top: 'auto',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90%', // Make sure the paragraph fits well
            textAlign: 'center',
            position: 'absolute',
            color: '#F5F5F5',
            lineHeight: '1.5',
        },
        circle: {
            position: 'absolute',
            borderRadius: '50%',
            backgroundColor: '#5e3aaf',
            zIndex: '-1',
        },
        circle1: {
            width: '80px',
            height: '80px',
            top: '20%',
            left: '10%',
        },
        circle2: {
            width: '100px',
            height: '100px',
            top: '60%',
            left: '70%',
        },
        circle3: {
            width: '50px',
            height: '50px',
            top: '40%',
            left: '40%',
        }
    };

    const desktopStyles = {
        main: {
            backgroundColor: '#7d49e6',
            width: '100%',
            position: 'relative',
            height: '600px',
            overflow: 'hidden',
            zIndex: '1',
            display: 'flex', // Use flexbox for layout
            flexDirection: 'row', // Align text and image side by side for desktop
            alignItems: 'center',
            justifyContent: 'center',
        },
        title: {
            fontFamily: '"Roboto", sans-serif',
            fontSize: '50px',
            top: '8%', // Adjust top so it's clearly visible
            left: '50%',
            transform: 'translateX(-50%)',
            position: 'absolute',
            color: '#F5F5F5',
            textAlign: 'center',
            width: '90%', // Ensure the text fits within the screen
        },
        text: {
            fontFamily: '"Roboto", sans-serif',
            fontSize: '20px',
            top: '35%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90%', // Make sure the paragraph fits well
            textAlign: 'center',
            position: 'absolute',
            color: '#F5F5F5',
            lineHeight: '1.5',
        },
        image: {
            width: '200px', // Adjust image size for mobile
            height: 'auto',
            marginTop: '250px', // Add margin to push the image below the text
        },
        circle: {
            position: 'absolute',
            borderRadius: '50%',
            backgroundColor: '#5e3aaf',
            zIndex: '-1',
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
        }
    };

    const styles = isMobile ? mobileStyles : desktopStyles;

    return (
        <div style={styles.main}>
            {/* Light grey circles positioned behind content */}
            <div style={{ ...styles.circle, ...styles.circle1 }}></div>
            <div style={{ ...styles.circle, ...styles.circle2 }}></div>
            <div style={{ ...styles.circle, ...styles.circle3 }}></div>

            <h1 style={styles.title} className='scroll-fade'>Empowering the Future Generation</h1>
            <p style={styles.text} className='scroll-fade'>DevFinTech's platform is designed by educators and experts in the field, ensuring a comprehensive and engaging educational experience for all participants.</p>

            {!isMobile && (
                <img src={empower_icon} style={desktopStyles.image} className='scroll-fade' alt="Empower Icon" />
            )}
        </div>
    );
}

export default Section_Five;
