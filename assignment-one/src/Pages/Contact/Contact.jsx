import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './Contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        document.title = "Contact | React Portfolio";
        
        const texts = ["Contact US"];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typewriterElement = document.querySelector('.contact-typewriter-text');

        function type() {
            const currentText = texts[textIndex];

            if (isDeleting) {
                typewriterElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typewriterElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        }

        type();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <>
            <Navbar />

            <section className="contact-section">
                <div className="container">
                    {/* Typewriter Animation */}
                    <div className="contact-header text-center">
                        <div className="typewriter-container d-flex align-items-center justify-content-center">
                            <span className="contact-typewriter-text"></span>
                            <span className="cursor">|</span>
                        </div>

                        {/* Decorative Line with Star */}
                        <div className="decorative-line">
                            <span className="line"></span>
                            <span className="star">⭐</span>
                            <span className="line"></span>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10">
                            <div className="contact-form-wrapper">
                                {submitted && (
                                    <div className="success-message">
                                        <span className="success-icon">✓</span>
                                        Message sent successfully!
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div className="form-group">
                                                <label htmlFor="name" className="form-label">Your Name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    className="form-control custom-input"
                                                    placeholder="Enter your name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="form-group">
                                                <label htmlFor="email" className="form-label">Your Email</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    className="form-control custom-input"
                                                    placeholder="Enter your email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <div className="form-group">
                                            <label htmlFor="phone" className="form-label">Phone Number</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                className="form-control custom-input"
                                                placeholder="Enter your phone number"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <div className="form-group">
                                            <label htmlFor="message" className="form-label">Your Message</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                className="form-control custom-input custom-textarea"
                                                placeholder="Write your message here..."
                                                rows="5"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <button type="submit" className="btn-submit">
                                            <span className="btn-text">Send Message</span>
                                            <span className="btn-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
