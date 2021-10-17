import React from 'react';
import { Project } from './project'

export const Projects = () => {
  const names = [
    {name: 'Space Travelers\'s Hub', demoUrl: 'https://simongrchevski.github.io/Space-Travelers-Hub/#/', imageUrl: './space.png', description: 'Space-Travelers-Hub is an webapp where you can reserve a rocket and join a mission in outer space. Enjoy the interstellar voyage. Mars here we come!', technologies: ['JavaScrpit','CSS','React and Redux'], repoLink: 'https://github.com/SimonGrchevski/Space-Travelers-Hub'},

    {name: 'CryptoValues', demoUrl: 'https://simongrchevski.github.io/Cryptocurrency/#/', imageUrl: './crypto.png', description: 'Cryptocurrency is an webapp that is displaying a current ranking list of the crypto values. You can also click on a value do see more details about it.', technologies: ['JavaScrpit','CSS','React and Redux'], repoLink: 'https://github.com/SimonGrchevski/Cryptocurrency'},

    {name: 'LeaderBoard', demoUrl: 'https://simongrchevski.github.io/Leaderboard/', imageUrl: './leader.png', description: 'Add a new score to the leaderboard and display the highest scores.', technologies: ['HTML','CSS','JavaScript'], repoLink: 'https://github.com/SimonGrchevski/Cryptocurrency'},

    {name: 'Concert site', demoUrl: 'https://simongrchevski.github.io/HTML-CSS-JavaScript-capstone-project/', imageUrl: './concert.png', description: 'Promotional site used for advertising and selling tickets.', technologies: ['HTML','CSS','JavaScript'], repoLink: 'https://github.com/SimonGrchevski/HTML-CSS-JavaScript-capstone-project'},

    {name: 'Rick and Morty fan-made site', demoUrl: 'https://simongrchevski.github.io/js-capstone/', imageUrl: './r&m.png', description: 'Rick and Morty - Fan-made website that is displaying info about series characters and description fetching from R&M API.', technologies: ['HTML','CSS','JavaScript'], repoLink: 'https://github.com/SimonGrchevski/js-capstone'},

    {name: 'Book Store', demoUrl: 'https://simongrchevski.github.io/bookStore/', imageUrl: './books.png', description: 'Bookstore is an webapp where you can add,remove, and edit the books you are reading, or that you plan to read it in the future.', technologies: ['HTML','CSS','JavaScript'], repoLink: 'https://github.com/SimonGrchevski/bookStore'},
  ];

  

  const allProjects = names.map(pro => <Project 
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