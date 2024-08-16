import React from 'react';

function CourseCard({ imgSrc, title, description }) {
    const styles = {
        card: {
            height: 'auto', // Let the height adjust based on content
            width: '75%',  // Ensure the card fits within the carousel item
            backgroundColor: '#7d49de',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
            margin: '10px 0',
            padding: '10px',
            color: '#F5F5F5',
            fontFamily: '"Roboto", sans-serif',
            textAlign: 'center',
        },
        title: {
            fontSize: '18px',
            marginBottom: '10px',
        },
        image: {
            width: '150%',
            height: 'auto',
            position: 'relative',
            transform: 'translateX(-14%)',
            marginBottom: '10px', // Add some space between the image and text
        },
        description: {
            fontSize: '14px',
            lineHeight: '1.5',
            padding: '0 10px',
            textAlign: 'left',
            wordWrap: 'break-word', // Ensure text wraps within the container
            whiteSpace: 'pre-wrap',
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
