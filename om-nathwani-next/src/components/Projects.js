'use client';
import Link from 'next/link';

const Projects = () => {
    const projects = [
        {
    title: "Bollyguess",
    description: "A daily Bollywood song guessing game featuring randomized audio clips and live leaderboards, built to scale and deployed publicly.",
    technologies: ["Next.js", "React", "TailwindCSS", "Node.js", "PostgreSQL", "Supabase", "Python", "Docker", "GitHub Actions", "Vercel"],
    link: "https://www.bollyguess.ca/",
        },
        {
            title: "LearnETF",
            description: "AI-powered financial literacy platform that helps young adults build the confidence to invest.",
            technologies: ["Python", "Plotly", "Pandas", "NumPy", "Yfinance", "React.js", "Flask", "OpenAI API"],
            link: "https://github.com/akramj13/learnetf",
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
        <section id="projects" className="min-h-screen flex items-center justify-center p-4 md:p-8">
            <div className="max-w-6xl w-full">
                <h1 className="text-4xl md:text-5xl font-light text-white mb-8 md:mb-12">Projects</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {projects.map((project, index) => (
                        <Link
                            href={project.link}
                            key={index}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block group"
                        >
                            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 md:p-8 h-full border border-transparent 
                                          hover:border-white/20 transition-all duration-300 relative">
                                <h2 className="text-xl md:text-2xl font-light text-white mb-3 md:mb-4">{project.title}</h2>
                                <p className="text-sm md:text-base text-gray-300/90 mb-4 md:mb-6 font-light">{project.description}</p>

                                <div>
                                    <p className="text-xs md:text-sm text-white/60 font-light mb-2">Technologies:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="text-xs md:text-sm text-white/80 bg-white/5 px-2 md:px-3 py-1 rounded-full font-light"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center text-white/60 group-hover:text-white/90 transition-colors mt-4">
                                    <span className="text-sm md:text-base mr-2">Explore More</span>
                                    <svg
                                        className="w-3 h-3 md:w-4 md:h-4 transform group-hover:translate-x-1 transition-transform"
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
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects; 
