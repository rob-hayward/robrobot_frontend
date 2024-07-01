import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Update the endpoint to use your domain name
        const endpoint = 'https://robhayward.io/api/send-email/';
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                alert('Email sent successfully!');
                setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' }); // Reset form
            } else {
                const resText = await response.text();  // Getting text from the response body for more info
                console.error('Failed to send email:', resText);
                alert(`Failed to send email. Please try again. Error: ${resText}`);
            }
        } catch (error) {
            console.error('Failed to send email', error);
            alert(`Failed to send email. Please check console for more details.`);
        }
    }

    return (
        <div className="contact-section">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                    </div>
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Contact;
