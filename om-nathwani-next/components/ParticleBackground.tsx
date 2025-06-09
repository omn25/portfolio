'use client';

import { useCallback } from 'react';
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";

const ParticleBackground = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: {
                    color: {
                        value: "#000"
                    }
                },
                fpsLimit: 120,
                particles: {
                    color: {
                        value: "#ffffff"
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.2,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 0.5,
                        direction: "none",
                        random: true,
                        straight: false,
                        outModes: {
                            default: "bounce"
                        },
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800
                        },
                        value: 100
                    },
                    opacity: {
                        value: 0.8,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            minimumValue: 0.1,
                        }
                    },
                    shape: {
                        type: "circle"
                    },
                    size: {
                        value: { min: 1, max: 3 },
                        random: true,
                    }
                },
                detectRetina: true
            }}
        />
    );
};

export default ParticleBackground; 