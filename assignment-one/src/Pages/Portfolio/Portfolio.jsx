import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './Portfolio.css';

// Placeholder images - replace with your actual images
const portfolioImages = [
    { id: 1, src: 'https://picsum.photos/600/400?random=1', title: 'Project 1' },
    { id: 2, src: 'https://picsum.photos/600/400?random=2', title: 'Project 2' },
    { id: 3, src: 'https://picsum.photos/600/400?random=3', title: 'Project 3' },
    { id: 4, src: 'https://picsum.photos/600/400?random=4', title: 'Project 4' },
    { id: 5, src: 'https://picsum.photos/600/400?random=5', title: 'Project 5' },
    { id: 6, src: 'https://picsum.photos/600/400?random=6', title: 'Project 6' },
];

export default function Portfolio() {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        document.title = "Portfolio | React Portfolio";

        const texts = ["Portfolio"];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typewriterElement = document.querySelector('.portfolio-typewriter-text');

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

    const openModal = (index) => {
        setCurrentImageIndex(index);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % portfolioImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length);
    };

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!modalOpen) return;
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'Escape') closeModal();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [modalOpen]);

    return (
        <>
            <Navbar />

            <section className="portfolio-section">
                <div className="container">
                    {/* Typewriter Animation */}
                    <div className="portfolio-header text-center">
                        <div className="typewriter-container d-flex align-items-center justify-content-center">
                            <span className="typewriter-prefix">My </span>
                            <span className="portfolio-typewriter-text"></span>
                            <span className="cursor">|</span>
                        </div>

                        {/* Decorative Line with Star */}
                        <div className="decorative-line">
                            <span className="line"></span>
                            <span className="star">⭐</span>
                            <span className="line"></span>
                        </div>
                    </div>

                    {/* Portfolio Grid */}
                    <div className="row g-4 mt-4">
                        {portfolioImages.map((image, index) => (
                            <div key={image.id} className="col-lg-4 col-md-6">
                                <div className="portfolio-card" onClick={() => openModal(index)}>
                                    <div className="card-image-wrapper">
                                        <img src={image.src} alt={image.title} className="portfolio-image" />
                                        <div className="card-overlay">
                                            <div className="plus-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {modalOpen && (
                <div className="portfolio-modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>×</button>

                        <button className="modal-nav modal-prev" onClick={prevImage}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                            </svg>
                        </button>

                        <img
                            src={portfolioImages[currentImageIndex].src}
                            alt={portfolioImages[currentImageIndex].title}
                            className="modal-image"
                        />

                        <button className="modal-nav modal-next" onClick={nextImage}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>

                        <div className="modal-counter">
                            {currentImageIndex + 1} / {portfolioImages.length}
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
}
