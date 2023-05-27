import { useState } from 'react';
import Nav from '../components/header/Nav';
import MainJumbotron from '../components/main/MainJumbotron';
import Cards from '../components/projects/cards';
import About from '../components/aboutMe/About';


export default function HomePage() {
  
  const projectsData = [
    {imgUrl:require("../images/sample.png"), title:'Responsive Web Application', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et massa vel quam accumsan elementum. Nulla'},
    {imgUrl:require("../images/sample.png"), title:'Responsive Web Application', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et massa vel quam accumsan elementum. Nulla'},
    {imgUrl:require("../images/sample.png"), title:'Responsive Web Application', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et massa vel quam accumsan elementum. Nulla'},
    {imgUrl:require("../images/sample.png"), title:'Responsive Web Application', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et massa vel quam accumsan elementum. Nulla'},

  ]

  return (
    <div className='w-full bg-primary text-white'>
      <div className="mx-36 m-auto">
        <Nav />

        <MainJumbotron txtColor="text-white" backgroundColor='bg-gradient' />
        <Cards projectsData={projectsData} />
        <About backgroundColor='bg-gradient' />
      </div>
    </div>
  );
}

