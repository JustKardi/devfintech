function Section_Three() {
    
    const styles = {
        main: {
            position: 'relative',
            top: '175px'
        },
        header: {
            textAlign: 'center',
            fontFamily: '"Roboto", sans-serif',
            color: '#7d49de'
        },
        paragraph: {
            textAlign: 'center',
            fontFamily: '"Roboto", sans-serif',
            color: '#7d49de',
            lineHeight: '2.5',
            width: '50%',
            margin: 'auto'
        }
    }

    return (
        <div style={styles.main}>
            <h1 style={styles.header}>What We Do</h1>
            <p style={styles.paragraph}>At DevFintech, we help students learn important financial and technology skills. Our lessons cover a wide range of topics to give students a complete understanding of money management and modern financial tools. Our fun and practical courses will help you to become a more financially literate and confident person.gain the skills and knowledge to manage your money wisely and understand new financial technologies. Join us at DevFintech and get the tools you need to build a secure and successful future.</p>
        </div>
    )
}

export default Section_Three;