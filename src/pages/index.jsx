import { useRef } from 'react';
import Nav from '../components/header/Nav';
import MainJumbotron from '../components/main/MainJumbotron';
import Cards from '../components/projects/cards';
import About from '../components/aboutMe/About';
import Contact from '../components/contact/Contact';


export default function HomePage() {
  
  

  
  const projectsData = [
    {imgUrl:require("../images/home.png"), title:'Responsive PWA', desc:'Ordering leftover food and reducing food waste', tech:"Vanila JavaScript, Sass, Firebase, HTML"},
    {imgUrl:require("../images/sample.png"), title:'B2B SPA', desc:'Employee engagement application that provides survey and reports', tech:"React, MongoDB, Firebase, AWS, Node.js, Express.js, Tailwind"},
    {imgUrl:require("../images/splink.png"), title:'iOS Mobile Application', desc:'Builidng community as shopping bulk products with neibours and split bills', tech:"Reac Native, MongoDB, Firebase, AWS, Node.js, Express.js, Tailwind"},
    {imgUrl:require("../images/spca-cut.png"), title:'Redesigned Responsive Website', desc:'Redesign the BC SPCA website to improve the user experience and achieve the organizations goals of increasing donations, adoptions, and volunteer opportunities', tech:"React.js, Next.js, Tailwind, Javscript"},
    // {imgUrl:require("../images/sample.png"), title:'Responsive Web Application', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et massa vel quam accumsan elementum. Nulla'},

  ]

  const histories = [
    "ReactJS", "JavaScript", "CSS", "Tailwind", "Html", "MongoDB", "Expres.js", "Node.js"
  ]

  return (
    <div className='w-full bg-primary text-white'>
      <div className="mx-36 m-auto">
        <Nav />

        <MainJumbotron txtColor="text-white" descColor="text-gray" backgroundColor='bg-gradient-to-r from-puple via-darkblue to-skyblue' />
        <About backgroundColor="bg-gradient-to-r from-puple via-darkblue to-skyblue" histories={histories} />
        <Cards projectsData={projectsData} />
       
        <Contact />
      </div>
    </div>
  );
}

