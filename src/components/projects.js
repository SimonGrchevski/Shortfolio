import React from 'react';
import { Project } from './project'
import { projectsData } from '../projectData';

export const Projects = () => {
  

  const allProjects = projectsData.map(pro => <Project 
    name={pro.name}
    demoUrl = {pro.demoUrl}
    imageUrl = {pro.imageUrl}
    description = {pro.description}
    technologies = {pro.technologies}
    repoLink = {pro.repoLink}
    />)
  return (
    <>
      { allProjects }
    </>
  )
}