import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './Home.css';
import heroImg from '../../assets/react.svg';

export default function Home() {

    useEffect(() => {

        document.title = "Home | React Portfolio";
        const texts = [
            "Eng. Mostafa Samir",
            "Web Developer",
            "Software Engineer",
            "AI Engineer",
            "Embedded System"
        ];

        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typewriterElement = document.querySelector('.typewriter-text');

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
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typeSpeed = 500; // Pause before next word
            }

            setTimeout(type, typeSpeed);
        }

        type();
    }, []);

    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <div className="hero-content text-center">
                        {/* Hero Image */}
                        <div className="hero-image-wrapper">
                            <img src={heroImg} alt="React Logo" className="hero-image" />
                            <div className="image-glow"></div>
                        </div>

                        {/* Title */}
                        <h1 className="hero-title">Start Framework</h1>
                        <h2 className="hero-subtitle">React Js</h2>

                        {/* Decorative Line with Star */}
                        <div className="decorative-line">
                            <span className="line"></span>
                            <span className="star">⭐</span>
                            <span className="line"></span>
                        </div>

                        {/* Typewriter Animation */}
                        <div className="typewriter-container d-flex align-items-center justify-content-center">
                            <span className="typewriter-prefix">I am </span>
                            <span className="typewriter-text"></span>
                            <span className="cursor">|</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
