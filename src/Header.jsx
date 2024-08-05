import logo from './assets/logo.png';
import home_icon from './assets/home_icon.svg';
import shop_icon from './assets/shop_icon.svg';
import './Header.css';

function Header() {
    const styles = {
        header: {
            backgroundColor: 'rgb(245, 245, 245, 0.8)',
            width: '95%',  // Keep original width
            height: '100px',  // Keep original height
            position: 'fixed',  // Fixed position
            top: '10px',  // Keep original top value
            left: '50%',
            transform: 'translateX(-50%)',  // Center horizontally
            borderRadius: '13px',  // Keep original border radius
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 20px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  // Keep original box shadow
            zIndex: 1000,  // Ensure it stays on top of other elements
        },
        logo: {
            height: '180%',  // Adjusted to fit within the header without overflow
            objectFit: 'contain',
            position: 'relative',
            left: '-50px'
        },
        headerText: {
            color: '#7d49de',
            fontFamily: '"Roboto", sans-serif',
            position: 'relative',
            textAlign: 'center',
            margin: '0 auto',
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
            verticalAlign: 'middle',
            cursor: 'pointer',  // Indicates the icons are clickable
        },
        navLink: {
            cursor: 'pointer',  // Indicates the text links are clickable
        },
    };

    return (
        <div style={styles.header}>
            <img src={logo} style={styles.logo} alt="Logo" />
            <h1 style={styles.headerText}>DevFinTech</h1>
            <div style={styles.navContainer}>
                <img src={home_icon} style={styles.navLinkImg} alt="Home" />
                <img src={shop_icon} style={styles.navLinkImg} alt="Shop" />
                <a href="#" className="navLinks" style={styles.navLink}>Enroll</a>
                <a href="#" className="navLinks" style={styles.navLink}>The Team</a>
                <a href="#" className="navLinks" style={styles.navLink}>Our Impact</a>
                <a href="#" className="navLinks" style={styles.navLink}>Volunteer</a>
            </div>
        </div>
    );
}

export default Header;
