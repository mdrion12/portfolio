import React from 'react';
import './Skills.css';

const Skills = () => {
    const skills = [
        'React.js',
        'Django',
        'Django REST Framework',
        'PostgreSQL',
        'REST API',
        'JavaScript',
        'HTML & CSS',
        'C++',
        'Python',
        'NumPy',
        'C',
        'Java',
        'Data Structures & Algorithms'
    ];

    return (
        <section className="skills">
            <div className="skills-container">

                <h1>My Skills</h1>
                <p className="skills-subtitle">
                    I specialize in full-stack development and problem solving.
                </p>

                <div className="skills-wrapper">
                    <div className="skills-track">
                        {skills.concat(skills).map((skill, index) => (
                            <div className="skill-card" key={index}>
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;