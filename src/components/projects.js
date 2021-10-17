import React from 'react';
import { Project } from './project'

export const Projects = () => {
  const names = ["Project 1", "Project 2"];

  const allProjects = names.map(pro => <Project name={pro}/>)
  return (
    <>
      { allProjects }
    </>
  )
}