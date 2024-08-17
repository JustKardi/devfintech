function QuoteCard({ quote, author, occupation, className }) {
    const styles = {
        main: {
            backgroundColor: '#F5F5F5',
            width: '29%',
            color: '#7d49de',
            height: '25vh',
            padding: '20px',
            boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
            borderRadius: '10px',
            fontFamily: '"Roboto", sans-serif',
            lineHeight: '1.7',
            marginLeft: '0.75%',
            marginRight: '0.75%',  // Fixed typo
            display: 'inline-block',
            transition: 'transform 0.5s ease-in-out',
        },
    };

    return (
        <div style={styles.main} className={className}>
            <p>{quote}</p>
            <p>-{author}</p>
            <p>{occupation}</p>
        </div>
    );
}

export default QuoteCard;
