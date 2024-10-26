import React from 'react';
import './EnrollmentContent.css';

const EnrollmentContent = () => {
    return (
        <div className="enrollment-content">
            <h1>Enrollment Plans</h1>

            {/* Free Enrollment Section */}
            <div className="plan free-plan">
                <h2>Free Plan</h2>
                <p>Access to introductory content and resources.</p>
                
                {/* Simple Sign-Up Form */}
                <form className="free-signup-form">
                    <label>
                        Name:
                        <input type="text" required />
                    </label>
                    <label>
                        Email:
                        <input type="email" required />
                    </label>
                    <button type="submit">Sign Up for Free</button>
                </form>
            </div>

            {/* Paid Enrollment Sections */}
            <div className="plan basic-plan">
                <h2>Basic Plan</h2>
                <p>More in-depth resources and live sessions.</p>
                <a href="LINK_TO_PAYMENT_PAGE">Enroll in Basic Plan</a>
            </div>

            <div className="plan pro-plan">
                <h2>Pro Plan</h2>
                <p>Full access to all resources, one-on-one mentorship.</p>
                <a href="LINK_TO_PAYMENT_PAGE">Enroll in Pro Plan</a>
            </div>
        </div>
    );
};

export default EnrollmentContent;
