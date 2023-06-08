import React from 'react';
import Nav from '../../components/header/Nav';
import Link from 'next/link';
import Image from 'next/image';
import Detail from '../../components/projects/Detail';

const Projects = () => {

    const tech = ["Javascript", "CSS", "Sass", "Html", "Firebase"]

    return (
        <div className='w-full bg-primary text-white'>
        <div className="mx-36 m-auto">
          <Nav />
          <Detail title="Foodlet" subTitle="Responsive Web Application" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries" tech={tech} />
            
        </div>
      </div>
    );
}

export default Projects;
