import './sectionSeven.css'

function SectionSeven() {

    const styles = {
        title: {
            fontSize: '45px',
            fontWeight: 'bold',
            marginBottom: '30px',
            fontFamily: '"Roboto", sans-serif',
            textAlign: 'center',
            textDecoration: 'underline',
            color: '#7d49de'
        },
        text: {
            fontSize: '24px',
            fontFamily: '"Roboto", sans-serif',
            lineHeight: '1.6',
            color: '#7d49de',
            textAlign: 'center',
            marginTop: '40px',
            width: '80%',
            margin: '0 auto'
        }
    }

    return (
        <div>
            <h1 style={styles.title}>Support Our Cause</h1>
            <p style={styles.text}>Your contribution enables us to expand our reach and provide more students with the essential knowledge and resources to thrive in a rapidly evolving digital economy.</p>
            <button className="donate-button">Donate Now</button>
            <br />
        </div>
    )
}

export default SectionSeven;