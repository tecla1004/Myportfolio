import { useState } from 'react';
import Nav from '../components/header/Nav';
import MainJumbotron from '../components/main/MainJumbotron';
import Cards from '../components/projects/cards';


export default function HomePage() {
  
  const projectsData = [
    {imgUrl:require("../images/sample.png"), title:'Responsive Web Application', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et massa vel quam accumsan elementum. Nulla'},
    {imgUrl:require("../images/sample.png"), title:'Responsive Web Application', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et massa vel quam accumsan elementum. Nulla'},
    {imgUrl:require("../images/sample.png"), title:'Responsive Web Application', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et massa vel quam accumsan elementum. Nulla'},
    {imgUrl:require("../images/sample.png"), title:'Responsive Web Application', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et massa vel quam accumsan elementum. Nulla'},

  ]

  return (
    <div className='w-full'>
      <div className="mx-36 m-auto border-2">
        <Nav />

        <MainJumbotron txtColor="text-white" />
        <Cards projectsData={projectsData} />
      </div>
    </div>
  );
}

