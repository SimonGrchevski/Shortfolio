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
      technologies={pro.technologies}
      repoLink={pro.repoLink}
    />
  ));
  return (
    <>
      { allProjects }
    </>
  );
};

export default Projects;
