import React, { useState } from 'react';
import './EnrollmentContent.css';

const EnrollmentContent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(''); // Clear any previous messages
    
        try {
            const response = await fetch('YOUR_SCRIPT_URL_HERE', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email })
            });
    
            const text = await response.text(); // Capture the response text
    
            if (response.ok) {
                setMessage('Success! Your data was submitted.');
                setName('');
                setEmail('');
            } else {
                setMessage(`Error: ${text}`); // Display error details
            }
        } catch (error) {
            setMessage(`There was an error submitting your data: ${error.message}`);
        }
    };
    

    return (
        <div className="enrollment-content">
            <h1>Enrollment Plans</h1>

            {/* Free Enrollment Section */}
            <div className="plan free-plan">
                <h2>Free Plan</h2>
                <p>Access to introductory content and resources.</p>
                
                {/* Simple Sign-Up Form */}
                <form className="free-signup-form" onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <button type="submit">Sign Up for Free</button>
                </form>
                {message && <p>{message}</p>} {/* Display the response message */}
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
