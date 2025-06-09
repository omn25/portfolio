'use client';
import Image from 'next/image';

const Experience = () => {
    return (
        <section id="experience" className="min-h-screen flex items-center justify-center p-4 md:p-8">
            <div className="max-w-4xl w-full space-y-6 md:space-y-8">
                <h1 className="text-4xl md:text-5xl font-light text-white mb-8 md:mb-12">Experience</h1>

                <div className="space-y-4 md:space-y-6">
                    {/* Covalense Digital */}
                    <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 md:p-8 relative border border-transparent hover:border-white/20 transition-all duration-300">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                            <div>
                                <h2 className="text-xl md:text-2xl font-light text-white mb-1">Covalense Digital</h2>
                                <p className="text-base md:text-lg text-gray-300/90 font-light mb-1">Software Engineer Intern</p>
                            </div>
                            <div className="text-right mt-2 md:mt-0">
                                <p className="text-xs md:text-sm text-gray-400">May 2025 – Ongoing</p>
                                <p className="text-xs md:text-sm text-gray-500 italic flex items-center md:justify-end">
                                    <span className="mr-1">📍</span> Mississauga, Ontario
                                </p>
                                <div className="w-12 h-12 md:w-16 md:h-16 relative mt-2 md:mt-4 ml-auto">
                                    <Image
                                        src="/images/covalense-logo.png"
                                        alt="Covalense Digital Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Wat.AI */}
                    <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 md:p-8 relative border border-transparent hover:border-white/20 transition-all duration-300">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                            <div>
                                <h2 className="text-xl md:text-2xl font-light text-white mb-1">Wat.AI</h2>
                                <p className="text-base md:text-lg text-gray-300/90 font-light mb-1">Software Engineer</p>
                                <p className="text-xs md:text-sm text-gray-400 font-light italic">Python, AWS, RESTful APIs, OpenAI, RAG</p>
                            </div>
                            <div className="text-right mt-2 md:mt-0">
                                <p className="text-xs md:text-sm text-gray-400">Sept. 2024 – May 2025</p>
                                <p className="text-xs md:text-sm text-gray-500 italic flex items-center md:justify-end">
                                    <span className="mr-1">📍</span> Waterloo, Ontario
                                </p>
                                <div className="w-12 h-12 md:w-16 md:h-16 relative mt-2 md:mt-4 ml-auto">
                                    <Image
                                        src="/images/watai-logo.png"
                                        alt="Wat.AI Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 space-y-3 text-sm md:text-base text-gray-300/90 font-light">
                            <p>Worked with the Pitch.AI team to build a generative AI model for movie pitches and conducted research on RAG, modular AI, and agentic systems.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience; 