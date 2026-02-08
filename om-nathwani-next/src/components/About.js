'use client';

const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center p-4 md:p-8">
            <div className="max-w-4xl w-full space-y-8 md:space-y-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 md:mb-12">Introduction</h1>
                <div className="space-y-6 md:space-y-8 text-base md:text-lg text-gray-300/90">
                    <p className="leading-relaxed">
                        Hi! 👋 I'm Om, a CS/BBA student and varsity XC/T&F athlete at the University of Waterloo and Wilfrid Laurier University. If you're reading this, that means you've stumbled across my page. Welcome!
                    </p>
                    <p className="leading-relaxed">
                        Here you'll find some stuff I've built over the past few years and a bit about my experience. You'll also get to know me a little personally, like my obsession with music (check out the bottom left for my top listen this week) and my love for running.
                    </p>
                    <p className="leading-relaxed">
                        Feel free to look around. If you want to learn more about anything or have any questions, just click the chat button on the bottom right or reach out to me directly via the links on the main page!
                    </p>
                    <p className="leading-relaxed">
                        Honestly, if I could describe myself in a nutshell, I'm just a passionate and driven student trying to figure everything out. I love learning, building cool stuff, and doing whatever I can to be the best version of myself.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About; 