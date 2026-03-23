import React from 'react';
import './About.css';  // make sure About.css is present

const About = () => {
    return (
        <section className="about">
            <div className="about-text">
                <h1>About Me</h1>
                <p>
                    Hi! I'm Md Rion, a passionate problem solver and full-stack developer.
                    I love building web applications and solving algorithmic challenges.
                </p>

                <h2>Competitive Programming</h2>
                <ul>
                    <li>
                        Pupil on <a
                            href="https://codeforces.com/profile/MD.REON"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cp-link"
                        >
                            Codeforces (MD.REON)
                        </a>
                    </li>
                    <li>
                        2-star coder on <a
                            href="https://www.codechef.com/users/epoch12"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cp-link"
                        >
                            CodeChef (epoch12)
                        </a> with 1400+ problems solved
                    </li>
                    <li>Passionate about learning new algorithms and optimizing solutions</li>
                </ul>

                <h2>Technical Skills</h2>
                <ul>
                    <li>Backend Development with Django & Django REST Framework (DRF)</li>
                    <li>REST API Development & Integration</li>
                    <li>React.js for modern front-end development</li>
                    <li>PostgreSQL for database management</li>
                    <li>Quick learner and problem solver</li>
                </ul>

                <h2>Mentoring & Teaching</h2>
                <p>
                    I enjoy teaching competitive programming and coding to juniors, helping them improve
                    problem-solving skills and understanding algorithms efficiently.
                </p>
                <p>
                    Check out my YouTube channel for tutorials and guidance for beginners:
                    <a
                        href="https://www.youtube.com/@MDREON-fg2yv"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="youtube-link"
                    >
                        Watch Tutorials
                    </a>
                </p>
            </div>
        </section>
    );
};

export default About;