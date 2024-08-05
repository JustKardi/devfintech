import React from 'react';
import money_icon_white from './assets/money_icon_white.png';
import './scrollFade.css';  // Import the scroll fade CSS

function Section_Two() {
    const styles = {
        main: {
            backgroundColor: '#7d49de',
            margin: '0',
            padding: '20px',
            width: '100vw', 
            height: 'auto', 
            display: 'flex',
            flexDirection: 'column', // Default to column for mobile
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            top: '120px',
            overflow: 'hidden',
        },
        contentContainer: {
            display: 'flex',
            flexDirection: 'column', // Column layout for mobile
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'left',
            width: '90%', // Take up most of the width on mobile
            maxWidth: '1200px',
        },
        title: {
            color: '#F5F5F5',
            textDecoration: 'underline',
            fontFamily: '"Roboto", sans-serif',
            fontSize: '50px',
            marginBottom: '50px',
            textAlign: 'center'
        },
        paragraph: {
            color: '#F5F5F5',
            fontFamily: '"Roboto", sans-serif',
            lineHeight: '1.5',
            fontSize: '18px',
            width: '80%', 
            marginBottom: '20px',
            lineHeight: '2.5',
            margin: 'auto'
        },
        imageContainer: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px', 
            margin: 'auto',
            alignItems: 'center',
            textAlign: 'center'
        },
        image: {
            width: '50%', 
            height: 'auto',
            display: 'block',
            margin: '0 auto'
        },
        contentRow: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            flexWrap: 'wrap', // Allow wrapping on smaller screens
        }
    };

    return (
        <div style={styles.main} className="scroll-fade">
            <div style={styles.contentContainer}>
                <h1 style={styles.title} className="scroll-fade">Our Mission</h1>
                <p style={styles.paragraph} className="scroll-fade">
                    DevFintech is a dedicated non-profit organization committed to empowering the next generation with our FREE financial literacy and fintech education. Since our inception, we have positively impacted the lives of over 250 students, equipping them with the essential skills and knowledge needed to navigate the modern financial landscape. At DevFintech, we believe that education is the key to unlocking potential and fostering economic independence. Our comprehensive programs are designed to teach students the fundamentals of finance and the innovative world of financial technology. By providing hands-on learning experiences and practical knowledge, we aim to prepare our students for a successful future in an increasingly digital economy. Our commitment extends beyond education. We recognize the critical role technology plays in modern learning, and we strive to bridge the digital divide. 100% of our funds are allocated to providing electronics to students who cannot afford them, ensuring that every student has the tools they need to succeed. Through this initiative, we aim to create equal opportunities for all, regardless of their financial background. Join us at DevFintech as we continue to inspire, educate, and equip the leaders of tomorrow with the skills they need to thrive in the digital world. Together, we can make a lasting impact and drive positive change in our communities.
                </p>
                <div style={styles.imageContainer}>
                    <img src={money_icon_white} style={styles.image} className="scroll-fade" />
                </div>
            </div>
        </div>
    );
}

export default Section_Two;
