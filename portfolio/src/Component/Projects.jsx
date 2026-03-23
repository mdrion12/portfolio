import React from 'react';
import './Projects.css';

const projects = [
    {
        title: 'Portfolio Website',
        image: '/images/Screenshot 2026-03-23 144835.png',
        demo: 'https://github.com/mdrion12/portfolio',
        github: 'https://github.com/yourusername/portfolio'
    },
    {
        title: 'Single Vendor E-commerce api',
        image: '/images/pic.png',
        demo: '#',
        github: 'https://github.com/mdrion12/LichuShop'
    },
    {
        title: 'Blood Donation Web App',
        image: '/images/blood.png',
        demo: 'https://reon.nstack.dev/icereddot/',
        github: 'https://github.com/mdrion12/upadted_web_app'
    },
    {
        title: 'Blog Platform',
        image: '/images/blog.png',
        demo: '#',
        github: 'https://github.com/mdrion12/Blog'
    },
    {
        title: 'Todo App',
        image: '/images/todo.png',
        demo: '#',
        github: 'https://github.com/mdrion12/todo_project'
    },
    {
        title: 'learning management sysytem (LMS)',
        image: '/images/lms.png',
        demo: '#',
        github: 'https://github.com/mdrion12/lms_project_using_django'
    }
];

const Projects = () => {
    return (
        <section className="projects">
            <h1>My Projects</h1>
            <div className="projects-track">
                {projects.concat(projects).map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={project.title} />
                        <h2>{project.title}</h2>
                        <div className="buttons">
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn">
                                Live Demo
                            </a>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
                                GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;