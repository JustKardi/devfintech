// Rename to QuoteCard and destructure the props
function QuoteCard({ quote, author, occupation }) {
    const styles = {
        main: {
            backgroundColor: '#F5F5F5',
            width: '29%',
            color: '#7d49de',
            height: '25vh',
            padding: '20px',
            boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
            borderRadius: ' 10px',
            fontFamily: '"Roboto", sans-serif',
            lineHeight: '1.7',
            marginLeft: '1.5%',
            marginRigth: '1.5%',
            display: 'inline-block',
        }

    }
    return (
        <div style={styles.main}>
            <p>{quote}</p>
            <p>-{author}</p>
            <p>{occupation}</p>
        </div>
    );
}

export default QuoteCard;