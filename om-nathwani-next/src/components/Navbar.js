'use client';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            // Prevent default hash jump
            history.pushState(null, '', `#${sectionId}`);

            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Dispatch custom event for home click
            if (sectionId === 'home') {
                window.dispatchEvent(new CustomEvent('homeClick'));
            }

            // Close mobile menu after clicking
            setIsMenuOpen(false);
        }
    };

    // Prevent default hash jump on page load
    if (typeof window !== 'undefined') {
        window.addEventListener('load', () => {
            if (window.location.hash) {
                const id = window.location.hash.substring(1);
                setTimeout(() => {
                    const element = document.getElementById(id);
                    if (element) {
                        element.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }, 0);
            }
        });
    }

    return (
        <nav className="fixed top-0 left-0 right-0 w-full flex justify-between items-center px-4 md:px-12 py-6 bg-transparent backdrop-blur-sm z-50">
            {/* Left side */}
            <button
                onClick={() => scrollToSection('home')}
                className="text-white text-lg font-medium hover:text-gray-300 transition-colors"
            >
                Home
            </button>

            {/* Mobile Menu Button */}
            {isMobile && (
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-white p-2 focus:outline-none"
                >
                    <div className="w-6 h-0.5 bg-white mb-1.5"></div>
                    <div className="w-6 h-0.5 bg-white mb-1.5"></div>
                    <div className="w-6 h-0.5 bg-white"></div>
                </button>
            )}

            {/* Desktop Navigation */}
            {!isMobile && (
                <div className="flex items-center space-x-12">
                    <button
                        onClick={() => scrollToSection('about')}
                        className="text-white text-lg font-medium hover:text-gray-300 transition-colors"
                    >
                        Introduction
                    </button>
                    <button
                        onClick={() => scrollToSection('experience')}
                        className="text-white text-lg font-medium hover:text-gray-300 transition-colors"
                    >
                        Experience
                    </button>
                    <button
                        onClick={() => scrollToSection('projects')}
                        className="text-white text-lg font-medium hover:text-gray-300 transition-colors"
                    >
                        Projects
                    </button>
                </div>
            )}

            {/* Mobile Menu */}
            {isMobile && isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm py-4 animate-fade-in">
                    <div className="flex flex-col items-center space-y-4">
                        <button
                            onClick={() => scrollToSection('about')}
                            className="text-white text-lg font-medium hover:text-gray-300 transition-colors w-full text-center py-2"
                        >
                            Introduction
                        </button>
                        <button
                            onClick={() => scrollToSection('experience')}
                            className="text-white text-lg font-medium hover:text-gray-300 transition-colors w-full text-center py-2"
                        >
                            Experience
                        </button>
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="text-white text-lg font-medium hover:text-gray-300 transition-colors w-full text-center py-2"
                        >
                            Projects
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
