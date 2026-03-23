// Contact.jsx
import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact">
            <div className="contact-container">
                <h1>Contact Me</h1>
                <p>If you want to reach me, you can contact me via Facebook or Email.</p>

                <div className="contact-buttons">
                    <a
                        href="https://www.facebook.com/share/18UG7yHxw1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-facebook"
                    >
                        Facebook
                    </a>

                    <a
                        href="mailto:mdshahedulalamrion@gmail.com"
                        className="btn-email"
                    >
                        Email Me
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;