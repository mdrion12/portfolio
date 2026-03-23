import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <section className="home">

            {/* Left Side */}
            <div className="home-text">
                <h1>Hi, I'm Md Rion 👋</h1>
                <h2>Full Stack Developer</h2>
                <p>
                    I build modern web applications using Django, React, and PostgreSQL.
                    I am also a competitive programmer who loves solving problems.
                </p>

                <div className="buttons">

                    {/* Scroll to Projects */}
                    <a href="#projects" className="btn">
                        View Projects
                    </a>

                    {/* Download CV */}


                </div>
            </div>

            {/* Right Side */}
            <div className="home-image">
                {/* Public folder থেকে image load করা */}
                <img
                    src="/images/WhatsApp Image 2026-03-13 at 7.37.38 PM.jpeg"
                    alt="My Photo"
                />
            </div>

        </section>
    );
};

export default Home;