import React from 'react';
import './Projects.css';

const projects = [
    {
        title: 'Portfolio Website',
        image: '/src/assets/Screenshot 2026-03-23 144835.png', // Change to your image
        demo: '#', // Add live demo URL
        github: 'https://github.com/yourusername/portfolio'
    },
    {
        title: 'Single Vendor E-commerce api',
        image: '/src/assets/pic.png', // Replace with screenshot
        demo: '#', // Add live demo link
        github: 'https://github.com/mdrion12/LichuShop'
    },
    {
        title: 'Blood Donation Web App',
        image: '/src/assets/blood.png', // Replace with screenshot
        demo: 'https://reon.nstack.dev/icereddot/', // Add live demo link
        github: 'https://github.com/mdrion12/upadted_web_app'
    },
    {
        title: 'Blog Platform',
        image: '/src/assets/blog.png', // Replace with screenshot
        demo: '#', // Add live demo link
        github: 'https://github.com/mdrion12/Blog'
    },
    {
        title: 'Todo App',
        image: '/src/assets/todo.png', // Replace with screenshot
        demo: '#', // Add live demo link
        github: 'https://github.com/mdrion12/todo_project'
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