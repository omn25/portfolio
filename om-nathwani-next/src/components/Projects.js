'use client';
import Link from 'next/link';

const Projects = () => {
    const projects = [
        {
            title: "LearnETF",
            description: "AI-powered financial literacy platform that helps young adults build the confidence to invest.",
            technologies: ["Python", "Plotly", "Pandas", "NumPy", "Yfinance", "React.js", "Flask", "OpenAI API"],
            link: "https://github.com/akramj13/learnetf",
        },
        {
            title: "Insurance Claim Helper",
            description: "AI assistant that helps users file insurance claims based on their specific policy details.",
            technologies: ["Flask", "Python", "AWS", "OpenAI API"],
            link: "https://github.com/liyuxiao2/Insurify",
        },
        {
            title: "RaceSmart",
            description: "Computer vision app that gives feedback on running form and recommends shoes based on biomechanics.",
            technologies: ["MediaPipe", "Python", "PyTorch", "React.js", "OpenAI API", "AWS", "Streamlit"],
            link: "https://race-smart.streamlit.app/",
        },
        {
            title: "Music Transcriber",
            description: "Converts songs into sheet music by processing audio and generating midi notation.",
            technologies: ["Flask", "PyTorch", "Demucs (htdemucs)", "torchaudio", "basic-pitch", "music21", "LilyPond", "HTML", "CSS"],
            link: "https://github.com/omn25/musictranscriber",
        },
    ];

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center p-8">
            <div className="max-w-6xl w-full">
                <h1 className="text-5xl font-light text-white mb-12">Projects</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <Link
                            href={project.link}
                            key={index}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block group"
                        >
                            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8 h-full border border-transparent 
                                          hover:border-white/20 transition-all duration-300 relative">
                                <h2 className="text-2xl font-light text-white mb-4">{project.title}</h2>
                                <p className="text-gray-300/90 mb-6 font-light">{project.description}</p>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm text-white/60 font-light mb-2">Technologies:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="text-sm text-white/80 bg-white/5 px-3 py-1 rounded-full font-light"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="flex items-center text-white/60 group-hover:text-white/90 transition-colors">
                                            <span className="mr-2">Explore More</span>
                                            <svg
                                                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects; 