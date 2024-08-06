import React from 'react';
import CourseCard from './Course_Card.jsx';
import budget_icon from './assets/budget_icon_white.png';
import bank_icon from './assets/bank_icon_white.png';
import finance_icon from './assets/finance_icon_white.png';
import code_icon from './assets/code_icon_white.png';
import money_icon from './assets/money_icon_white.png';
import './CourseSection.css'; // Import the CSS file for styling
import './scrollFade.css'

function CourseSection() {
    const styles = {
        section: {
            padding: '20px',
            position: 'relative',
            height: '100vh', // Full viewport height
            overflow: 'hidden',
            top: '25vh'
        },
        title: {
            fontSize: '40px',
            marginBottom: '50px',
            color: '#7d49de',
            textDecoration: 'underline',
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: '"Roboto", sans-serif',
        },
    };

    return (
        <div style={styles.section}>
            <h1 style={styles.title} className='scrollFade'>Our Courses</h1>
            <div className="carousel scrollFade">
                <div className="carousel-track">
                    <div className="carousel-item">
                        <CourseCard
                            imgSrc={budget_icon}
                            title="Budgeting Basics"
                            description="How to create and stick to a budget."
                        />
                    </div>
                    <div className="carousel-item">
                        <CourseCard
                            imgSrc={bank_icon}
                            title="Bank Accounts"
                            description="Learning about different types of bank accounts and how they work. manage your income and expenses."
                        />
                    </div>
                    <div className="carousel-item">
                        <CourseCard
                            imgSrc={finance_icon}
                            title="Personal Finance"
                            description="Basics of managing your own money."
                        />
                    </div>
                    <div className="carousel-item">
                        <CourseCard
                            imgSrc={code_icon}
                            title="HTML and Python Basics"
                            description="Learn the basics of Web Development and Python programming."
                        />
                    </div>
                    <div className="carousel-item">
                        <CourseCard
                            imgSrc={finance_icon}
                            title="Economics"
                            description="Age range is 9 and up. Learn about the basics of economics."
                        />
                    </div>
                    <div className="carousel-item">
                        <CourseCard
                            imgSrc={money_icon}
                            title="Saving Money"
                            description="Tips and strategies for saving money to reach your financial goals."
                        />
                    </div>
                    <div className="carousel-item">
                        <CourseCard
                            imgSrc={finance_icon}
                            title="Investments"
                            description="Introduction to different ways to invest money and grow wealth."
                        />
                    </div>
                    <div className="carousel-item">
                        <CourseCard
                            imgSrc={budget_icon}
                            title="Debt Management"
                            description="Understanding different types of debt and how to manage and reduce them."
                        />
                    </div>
                    <div className="carousel-item">
                        <CourseCard
                            imgSrc={bank_icon}
                            title="Types of Loans"
                            description="Overview of various loans, what they are used for, and their terms."
                        />
                    </div>
                    <div className="carousel-item">
                        <CourseCard
                            imgSrc={money_icon}
                            title="Blockchain & Cryptocurrencies"
                            description="Basics of blockchain technology and digital currencies like"
                        />
                    </div>
                    <div className="carousel-item">
                        <CourseCard
                            imgSrc={money_icon}
                            title="BitCoin & Cybersecurity"
                            description="How to keep your financial information safe online."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseSection;
