import React from 'react';

const projectsData = [
    {
        title: 'Project One',
        description: 'A brief description of Project One.',
        link: 'https://github.com/username/project-one',
        image: 'path/to/image1.jpg'
    },
    {
        title: 'Project Two',
        description: 'A brief description of Project Two.',
        link: 'https://github.com/username/project-two',
        image: 'path/to/image2.jpg'
    },
    {
        title: 'Project Three',
        description: 'A brief description of Project Three.',
        link: 'https://github.com/username/project-three',
        image: 'path/to/image3.jpg'
    }
];

const Projects = () => {
    return (
        <section id="projects">
            <h2>My Projects</h2>
            <div className="projects-container">
                {projectsData.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;