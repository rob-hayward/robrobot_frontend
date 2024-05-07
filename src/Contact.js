// src/Contact.js
import React from 'react';

const Contact = () => {
    return (
        <div className="contact-section">
            <h2>Contact Me</h2>
            <form>
                <div className="form-row">
                    <div>
                        <label htmlFor="firstName">first name</label>
                        <input type="text" id="firstName" name="firstName" required />
                    </div>
                    <div>
                        <label htmlFor="lastName">last name</label>
                        <input type="text" id="lastName" name="lastName" required />
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label htmlFor="email">email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div>
                        <label htmlFor="phone">phone</label>
                        <input type="tel" id="phone" name="phone" />
                    </div>
                </div>
                <div>
                    <label htmlFor="message">message</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">send</button>
            </form>
        </div>
    );
};

export default Contact;