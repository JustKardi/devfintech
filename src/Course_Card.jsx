import React from 'react';

function CourseCard({ imgSrc, title, description }) {
    const styles = {
        card: {
            height: '300px',  // Adjusted height for better content fit
            width: '200px',  // Adjusted width for better content fit
            backgroundColor: '#7d49de',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
            display: 'inline-block',  // Allows multiple cards to be in the same line
            verticalAlign: 'top',  // Aligns cards to the top
            margin: '10px',  // Adds spacing between cards
            padding: '10px 0',
            color: '#F5F5F5',
            fontFamily: '"Roboto", sans-serif',
            textAlign: 'center',
        },
        title: {
            fontSize: '18px',
            marginBottom: '10px',
        },
        image: {
            width: '150%',  // 150% size as requested
            height: 'auto',
            position: 'relative',
            transform: 'translateX(-14%)',  // Center the image horizontally
        },
        description: {
            fontSize: '14px',
            lineHeight: '1.5',
            marginTop: '10px',
            padding: '0 10px',
        },
    };

    return (
        <div style={styles.card}>
            <h2 style={styles.title}>{title}</h2>
            <img src={imgSrc} alt={title} style={styles.image} />
            <p style={styles.description}>{description}</p>
        </div>
    );
}

export default CourseCard;
