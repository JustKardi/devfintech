import React, { useState, useEffect } from 'react';
import logo from './assets/logo.png';
import shop_icon from './assets/shop_icon.svg';
import './Header.css';

function Header() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Handle window resize to detect mobile view
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Toggle mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const styles = {
        header: {
            backgroundColor: 'rgb(245, 245, 245, 0.8)',
            width: '90%',
            height: '100px',
            position: 'fixed',
            top: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            borderRadius: '13px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 20px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
        },
        logoTitleContainer: {
            display: 'flex',  // Ensure logo and title are next to each other
            alignItems: 'center',
        },
        logo: {
            height: isMobile ? '70px' : '80px', // Adjusted slightly larger for desktop
            objectFit: 'contain',
            marginRight: '-25px',  // Add space between logo and title
        },
        headerText: {
            color: '#7d49de',
            fontFamily: '"Roboto", sans-serif',
            textAlign: 'center',
            flex: '1',
            fontSize: isMobile ? '5vw' : '35px', // Only shrink in mobile, fixed in desktop
            whiteSpace: 'nowrap',  // Prevents title from wrapping to the next line
        },
        navContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
        },
        navLinkImg: {
            height: '30px',
            marginRight: '10px',
            cursor: 'pointer',
        },
        navLink: {
            cursor: 'pointer',
            color: '#7d49de',
            textDecoration: 'none',
            padding: '0 10px',
            fontSize: '18px',
            fontFamily: '"Roboto", sans-serif',
        },
        hamburgerIcon: {
            display: 'block',
            cursor: 'pointer',
            width: '30px',
            height: '30px',
        },
        mobileMenu: {
            display: isMenuOpen ? 'block' : 'none',
            position: 'absolute',
            top: '100%',
            left: '0',
            width: '100%',
            backgroundColor: '#fff',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '0 0 10px 10px',
            zIndex: 999,
            textAlign: 'center',
            fontFamily: '"Roboto", sans-serif',
        },
        mobileMenuItem: {
            padding: '10px',
            borderBottom: '1px solid #ddd',
            color: '#7d49de',
            textDecoration: 'none',
            display: 'block',
            fontFamily: '"Roboto", sans-serif',
        },
    };

    return (
        <div style={styles.header}>
            {isMobile && (
                <div onClick={toggleMenu} style={styles.hamburgerIcon}>
                    <div className="line" style={{ backgroundColor: '#7d49de', height: '4px', marginBottom: '5px' }}></div>
                    <div className="line" style={{ backgroundColor: '#7d49de', height: '4px', marginBottom: '5px' }}></div>
                    <div className="line" style={{ backgroundColor: '#7d49de', height: '4px' }}></div>
                </div>
            )}

            <div style={styles.logoTitleContainer}>
                <img src={logo} style={styles.logo} alt="Logo" />
                <h1 style={styles.headerText}>DevFinTech</h1>
            </div>

            <div style={styles.navContainer}>
                {!isMobile && (
                    <>
                        <a href="#" style={styles.navLink}>Enroll</a>
                        <a href="#" style={styles.navLink}>The Team</a>
                        <a href="#" style={styles.navLink}>Our Impact</a>
                        <a href="#" style={styles.navLink}>Volunteer</a>
                    </>
                )}
                <img src={shop_icon} style={styles.navLinkImg} alt="Shop" />
            </div>

            {isMobile && (
                <div style={styles.mobileMenu}>
                    <a href="#" style={styles.mobileMenuItem}>Enroll</a>
                    <a href="#" style={styles.mobileMenuItem}>The Team</a>
                    <a href="#" style={styles.mobileMenuItem}>Our Impact</a>
                    <a href="#" style={styles.mobileMenuItem}>Volunteer</a>
                </div>
            )}
        </div>
    );
}

export default Header;
