function Footer() {

    const styles = {
        footer__: {
            backgroundColor: '#7d49de',
            marginBottom: '0px',
            padding: '0.1rem',
            textAlign: 'center',
            fontFamily: '"Roboto", sans-serif',
            color: '#FEFEFE',
            fontSize: '2em',
            marginTop: '50px'
        }
    }

    return (
        <footer style={styles.footer__}>
            <h1>DevFinTech</h1>
        </footer>
    )
}

export default Footer;