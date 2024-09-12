import QuoteCard from "./quoteCard.jsx";
import './scrollFade.css';
import './quoteSectionTransition.css';

function QuoteSection() {

    const styles = {
        backgroundColor: '#7d49de',
        height: 'auto',
        fontFamily: '"Roboto", sans-serif',
        textAlign: 'center',
        color: '#F5F5F5',
        textDecoration: 'underline'
    };

    return (
        <div style={styles} className="scroll-fade">
            <h1 style={{ marginBottom: "40px", fontSize: "3em" }} className="scroll-fade">Voices of Impact</h1>
            <QuoteCard 
                quote="“DevFinTech has been instrumental in shaping my understanding of financial concepts and has provided me with the confidence to make informed decisions.”" 
                author="Deena Levies" 
                occupation="Youth Participant" 
                className="scroll-fade move-up"
            />
            <QuoteCard
                quote="“The courses offered by DevFinTech have been invaluable in preparing me for my future. I highly recommend their programs to all young learners.”"
                author="Tom Smithenson"
                occupation="Educator"
                className="scroll-fade move-up"
            />
            <QuoteCard 
                quote="“As an educator, I have witnessed the positive impact of DevFinTech's initiatives on students' financial awareness and technological proficiency.”"
                author="Tilly Green"
                occupation="Community Leader"
                className="scroll-fade move-up"
            />
        </div>
    );
}

export default QuoteSection;
