'use client';

import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiTwitterXFill } from 'react-icons/ri';
import { useState, useEffect } from 'react';

export default function HomeContent() {
    const [key, setKey] = useState(0);

    useEffect(() => {
        // Handle hash changes
        const handleHashChange = () => {
            if (window.location.hash === '' || window.location.hash === '#home') {
                setKey(prev => prev + 1);
            }
        };

        // Handle direct home button clicks
        const handleHomeClick = () => {
            setKey(prev => prev + 1);
        };

        window.addEventListener('hashchange', handleHashChange);
        window.addEventListener('homeClick', handleHomeClick);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
            window.removeEventListener('homeClick', handleHomeClick);
        };
    }, []);

    return (
        <div className="min-h-screen w-full flex items-center justify-center relative z-10">
            <div className="max-w-3xl mx-auto w-full px-4 text-center">
                <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">Toronto, Ontario</p>
                <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">
                    <TypeAnimation
                        key={key}
                        sequence={[
                            "Hi, I'm Om Nathwani!", 700,
                            "CS @ UWaterloo 🦁", 700,
                            "BBA @ WLU 🦅", 700,
                            "Varsity Athlete XC + T&F 🏃", 700,
                            "Hi, I'm Om Nathwani!", // Final state
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={0}
                        cursor={true}
                        deletionSpeed={65}
                    />
                </h1>

                <div className="flex justify-center items-center space-x-6 md:space-x-8 mb-6 md:mb-8">
                    <Link
                        href="mailto:omnathwani@gmail.com"
                        className="text-white hover:text-white/60 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <MdEmail className="w-6 h-6 md:w-8 md:h-8" />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/om-nathwani-3903b2314/?originalSubdomain=ca"
                        className="text-white hover:text-white/60 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin className="w-6 h-6 md:w-8 md:h-8" />
                    </Link>
                    <Link
                        href="https://x.com/om_n25"
                        className="text-white hover:text-white/60 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <RiTwitterXFill className="w-6 h-6 md:w-8 md:h-8" />
                    </Link>
                    <Link
                        href="https://github.com/omn25"
                        className="text-white hover:text-white/60 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="w-6 h-6 md:w-8 md:h-8" />
                    </Link>
                </div>

                <Link
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 md:px-6 py-2 rounded-full 
                             bg-gradient-to-r from-white/10 to-white/5
                             hover:from-white/20 hover:to-white/10
                             border border-white/10 backdrop-blur-sm
                             text-white text-sm md:text-base font-light
                             transition-all duration-300 ease-out
                             hover:border-white/20 hover:scale-102"
                >
                    Resume
                </Link>
            </div>
        </div>
    );
} 