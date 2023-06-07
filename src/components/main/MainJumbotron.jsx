import Image from 'next/image';
import React from 'react';
import classNames from 'classnames';
import Button from '../commons/button/Button';
import Box from '../commons/Box';
import portrait from '../../images/portrait.jpg'


const MainJumbotron = ({txtColor, backgroundColor, descColor}) => {
    return (
        <div className='relative pb-80 pt-32'>
            <div>
                <h3 className='text-4xl inline-block text-transparent bg-clip-text bg-gradient-to-r from-puple via-darkblue to-skyblue'>Hi, there</h3>
                <br></br>
                <h3 className='text-4xl inline-block text-transparent bg-clip-text bg-gradient-to-r from-puple via-darkblue to-skyblue'>I'm Hyewon</h3>
                <h2 className={classNames(
                    'text-6xl my-3',
                    txtColor==="text-gray"
                )}>FRONTEND DEVELOPER</h2>
                <p 
                className={classNames(
                    'w-1/3 text-xl text-descGray descFont',
                    descColor
                )}
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et massa vel quam accumsan elementum. Nullam consectetur tristique enim, sit.</p>
            </div>
            <div className='my-12'>
                <Button txtColor="text-black" label='Explore projects' />
            </div>
            <div>
                <Box backgroundColor={backgroundColor} width="w-[155px]" height="h-[155px]" rotate="rotate-45" right="right-1/3" top="top-40" position="absolute" />
                <Box width="w-[155px]" height="h-[155px]" borderColor="border-white" rotate="rotate-45" right="right-1/3" top="top-52" position="absolute" border="border-2" />
                <Box width="w-[300px]" height="h-[300px]" borderColor="border-white" rotate="-rotate-12" right="right-1/4" top="top-80" position="absolute" border="border-2" />
                <div>
                    <Image
                    src={portrait}
                    width={300}
                    height={400}
                    className='rotate-12 absolute right-9 top-72'
                    />
                </div>
            
            </div>
        </div>
    );
}

export default MainJumbotron;
