import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import Button from '../commons/button/Button';
import Box from '../commons/Box';
import ReactTyped from 'react-typed';

const MainJumbotron = ({backgroundColor, descColor}) => {
    

    const scrollToSection = () => {
        const targetElement = document.getElementById("project");
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      };
    
    return (
        <div className='mx-20 relative pb-80 pt-32'>
            <div>
                <h3 className='text-4xl inline-block text-transparent bg-clip-text bg-gradient-to-r from-puple via-darkblue to-skyblue'>Hi, there</h3>
                <br></br>
                <h3 className='text-4xl inline-block text-transparent bg-clip-text bg-gradient-to-r from-puple via-darkblue to-skyblue'>I'm Hyewon</h3>
                <ReactTyped 
                    strings={["FRONTEND DEVELOPER"]}
                    typeSpeed={200}
                    loop
                    backSpeed={30}
                    cursorChar='|'
                    showCursor={true}
                    className='text-6xl block my-3'
                    />
                <p 
                className={classNames(
                    'w-1/3 text-xl text-descGray descFont',
                    descColor
                )}
                >Hey there! I'm a friendly and enthusiastic Frontend Developer who is deeply passionate about learning and growth. If you're curious about me? Check my works! </p>
            </div>
            <div className='my-12'>
                <Button onClick={scrollToSection} txtColor="text-black"  label='Check the projects' />
            </div>
            <div>
                <Box backgroundColor={backgroundColor} width="w-[155px]" height="h-[155px]" rotate="rotate-45" right="right-1/3" top="top-40" position="absolute" />
                <Box width="w-[155px]" height="h-[155px]" borderColor="border-white" rotate="rotate-45" right="right-1/3" top="top-52" position="absolute" border="border-2" />
                <Box width="w-[300px]" height="h-[300px]" borderColor="border-white" rotate="-rotate-12" right="right-1/4" top="top-80" position="absolute" border="border-2" />
               
            
            </div>
        </div>
    );
}

export default MainJumbotron;
