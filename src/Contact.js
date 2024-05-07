// src/Contact.js
import React from 'react';

const Contact = () => {
    return (
        <div className="contact-section">
            <h2>Contact Me</h2>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
            <div className="contact-info">
                <p>Feel free to reach out to me via email or connect with me on LinkedIn.</p>
                <p>Email: hayward.m.rob@gmail.com</p>
                <p>GitHub: <a href="https://github.com/rob-hayward" target="_blank" rel="noopener noreferrer">https://github.com/rob-hayward</a></p>
            </div>
        </div>
    );
};

export default Contact;