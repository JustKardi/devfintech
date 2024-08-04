import logo from './assets/logo.png';
import home_icon from './assets/home_icon.svg';
import shop_icon from './assets/shop_icon.svg';
import './Header.css';  // Import the CSS file

function Header() {
    const styles = {
        header: {
            backgroundColor: '#F5F5F5',
            width: '95%',
            height: '100px',
            position: 'relative',
            margin: 'auto',
            borderRadius: '13px',
            top: '10px',
            display: 'flex',
            alignItems: 'center',  // Center vertically
            justifyContent: 'space-between',  // Space between logo and nav items
            padding: '0 20px',  // Add padding for spacing
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
        logo: {
            height: '100%',  // Fit logo within the header height
            objectFit: 'contain',
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
            gap: '20px',  // Space between nav items
        },
        navLinkImg: {
            height: '30px',  // Adjust size of icons
            marginRight: '10px',
            verticalAlign: 'middle',  // Align icon with text
        },
    };

    return (
        <div style={styles.header}>
            <img src={logo} style={styles.logo} alt="Logo" />
            <h1 style={styles.headerText}>DevFinTech</h1>
            <div style={styles.navContainer}>
                <img src={home_icon} style={styles.navLinkImg} alt="Home" />
                <img src={shop_icon} style={styles.navLinkImg} alt="Shop" />
                <a href="#" className="navLinks">Enroll</a>
                <a href="#" className="navLinks">The Team</a>
                <a href="#" className="navLinks">Our Impact</a>
                <a href="#" className="navLinks">Volunteer</a>
            </div>
        </div>
    );
}

export default Header;
