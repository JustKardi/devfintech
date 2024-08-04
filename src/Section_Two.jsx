import React from 'react';

function Section_Two() {
    const styles = {
        main: {
            backgroundColor: '#7d49de',
            margin: '0',
            padding: '0',
            width: '100vw', // Ensures it spans the full width of the viewport
            height: '600px',
            display: 'flex', // To use justifyContent effectively
            justifyContent: 'center',
            alignItems: 'center', // Center content vertically
            position: 'relative',
            top: '120px'
        },
        title: {
            color: '#F5F5F5',
            textDecoration: 'underline',
            fontFamily: '"Roboto", sans-serif',
            textAlign: 'center',
            fontSize: '50px',
        },
        paragraph: {
            color: '#F5F5F5',
            fontFamily: '"Roboto", sans-serif',
            textAlign: 'center',
            lineHeight: '2.5',
            width: '80%',
            margin: 'auto',
        }
    }

    // Add a global style to remove default body margin
    React.useEffect(() => {
        document.body.style.margin = '0';
        return () => {
            document.body.style.margin = ''; // Cleanup on unmount
        };
    }, []);

    return (
        <div style={styles.main}>
            <div>
                <h1 style={styles.title}>Our Mission</h1>
                <p style={styles.paragraph}>
                    DevFintech is a dedicated non-profit organization committed to empowering the next generation with our FREE financial literacy and fintech education. Since our inception, we have positively impacted the lives of over 250 students, equipping them with the essential skills and knowledge needed to navigate the modern financial landscape. At DevFintech, we believe that education is the key to unlocking potential and fostering economic independence. Our comprehensive programs are designed to teach students the fundamentals of finance and the innovative world of financial technology. By providing hands-on learning experiences and practical knowledge, we aim to prepare our students for a successful future in an increasingly digital economy. Our commitment extends beyond education. We recognize the critical role technology plays in modern learning, and we strive to bridge the digital divide. 100% of our funds are allocated to providing electronics to students who cannot afford them, ensuring that every student has the tools they need to succeed. Through this initiative, we aim to create equal opportunities for all, regardless of their financial background. Join us at DevFintech as we continue to inspire, educate, and equip the leaders of tomorrow with the skills they need to thrive in the digital world. Together, we can make a lasting impact and drive positive change in our communities.
                </p>
            </div>
        </div>
    )
}

export default Section_Two;
