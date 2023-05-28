import { useState } from 'react';
import Nav from '../components/header/Nav';
import MainJumbotron from '../components/main/MainJumbotron';
import Cards from '../components/projects/cards';
import About from '../components/aboutMe/About';
import Contact from '../components/contact/Contact';


export default function HomePage() {
  
  const projectsData = [
    {imgUrl:require("../images/sample.png"), title:'Responsive Web Application', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et massa vel quam accumsan elementum. Nulla'},
    {imgUrl:require("../images/sample.png"), title:'Responsive Web Application', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et massa vel quam accumsan elementum. Nulla'},
    {imgUrl:require("../images/sample.png"), title:'Responsive Web Application', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et massa vel quam accumsan elementum. Nulla'},
    {imgUrl:require("../images/sample.png"), title:'Responsive Web Application', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et massa vel quam accumsan elementum. Nulla'},

  ]

  const histories = [
    {year: 2016, 
    jobTitle:"Computer system manager", 
    jobDesc:"Managed and maintained homepage updating regularly using computer language such a HTML and CSS", 
    jobDesc2:"Designed banners to effectively inform to users for homepage and SNS",
    jobDesc3:"Managed over 20,000 membership’s demographic data safely by using MySQL",
    jobDesc4:"Handled complaints effectively through emails and calls from customers"
    },
    {year: 2022, 
      jobTitle:"Computer system manager", 
      jobDesc:"Managed and maintained homepage updating regularly using computer language such a HTML and CSS", 
      jobDesc2:"Designed banners to effectively inform to users for homepage and SNS",
      jobDesc3:"Managed over 20,000 membership’s demographic data safely by using MySQL",
      jobDesc4:"Handled complaints effectively through emails and calls from customers"
      },
    {year: 2023, 
      jobTitle:"Computer system manager", 
      jobDesc:"Managed and maintained homepage updating regularly using computer language such a HTML and CSS", 
      jobDesc2:"Designed banners to effectively inform to users for homepage and SNS",
      jobDesc3:"Managed over 20,000 membership’s demographic data safely by using MySQL",
      jobDesc4:"Handled complaints effectively through emails and calls from customers"
      },
  ]

  return (
    <div className='w-full bg-primary text-white'>
      <div className="mx-36 m-auto">
        <Nav />

        <MainJumbotron txtColor="text-white" backgroundColor='bg-gradient' />
        <Cards projectsData={projectsData} />
        <About backgroundColor='bg-gradient' histories={histories} />
        <Contact />
      </div>
    </div>
  );
}

