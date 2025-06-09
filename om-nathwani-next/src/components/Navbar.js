'use client';

const Navbar = () => {
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
        <nav className="fixed top-0 left-0 right-0 w-full flex justify-between items-center px-12 py-6 bg-transparent backdrop-blur-sm z-50">
            {/* Left side */}
            <button
                onClick={() => scrollToSection('home')}
                className="text-white text-lg font-medium hover:text-gray-300 transition-colors"
            >
                Home
            </button>

            {/* Right side */}
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
        </nav>
    );
};

export default Navbar;
