import React from 'react';
import Project from './project';
import projectsData from '../projectData';

const Projects = () => {
  const allProjects = projectsData.map((pro) => (
    <Project
      key={pro.name}
      name={pro.name}
      demoUrl={pro.demoUrl}
      imageUrl={pro.imageUrl}
      description={pro.description}
      technologies={pro.technologies.join(',')}
      repoLink={pro.repoLink}
    />
  ));
  return (
    <section className="cardsWrapper flex col content">
      { allProjects }
    </section>
  );
};

export default Projects;
