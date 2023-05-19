import { useState } from 'react';
import Nav from '../components/header/Nav';
import MainJumbotron from '../components/main/MainJumbotron';


export default function HomePage() {
  
  return (
    <div className='w-full  bg-primary'>
      <div className="mx-36 m-auto border-2">
        <Nav />

        <MainJumbotron txtColor="text-white" />
      </div>
    </div>
  );
}

