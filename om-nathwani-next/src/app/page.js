'use client';

import HomeContent from '../components/Home';
import ParticleBackground from '../../components/ParticleBackground';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import About from '../components/About';
import ChatButton from '../components/ChatButton';
import SpotifyPlayer from '../components/SpotifyPlayer';

export default function Home() {
    return (
        <div className="relative">
            <div className="absolute inset-0">
                <ParticleBackground />
            </div>
            <div className="relative z-10 space-y-0">
                <section id="home" className="min-h-screen">
                    <HomeContent />
                </section>

                <section id="about" className="min-h-screen bg-black/50 backdrop-blur-sm">
                    <About />
                </section>

                <section id="experience" className="min-h-screen -mt-24 bg-black/50 backdrop-blur-sm">
                    <Experience />
                </section>

                <section id="projects" className="min-h-screen bg-black/50 backdrop-blur-sm">
                    <Projects />
                </section>
            </div>
            <ChatButton />
            <SpotifyPlayer />
        </div>
    );
} 