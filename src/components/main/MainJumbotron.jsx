import Image from 'next/image';
import React from 'react';
import classNames from 'classnames';
import Button from '../commons/button/Button';
import Box from '../commons/Box';
import portrait from '../../images/portrait.jpg'


const MainJumbotron = ({txtColor, backgroundColor}) => {
    return (
        <div className='relative pb-96 pt-32'>
            <div>
                <h3 className='text-4xl text-gradient'>Hi, there</h3>
                <h3 className='text-4xl text-gradient'>I'm Hyewon</h3>
                <h2 className={classNames(
                    'text-6xl my-3',
                    txtColor==="text-gray"
                )}>FRONTEND DEVELOPER</h2>
                <p 
                className={classNames(
                    'w-1/3 text-xl text-descGray descFont',
                     
                )}
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et massa vel quam accumsan elementum. Nullam consectetur tristique enim, sit.</p>
            </div>
            <div className='my-12'>
                <Button txtColor="text-white" label='Explore projects' />
            </div>
            <div>
                <Box backgroundColor={backgroundColor} width="[155px]" height="[155px]" rotate="rotate-45" right="1/3" top="40" position="absolute" />
                <Box width="[155px]" height="[155px]" borderColor="border-white" rotate="rotate-45" right="1/3" top="52" position="absolute" />
                <Box width="[300px]" height="[300px]" borderColor="border-white" rotate="-rotate-12" right="1/4" top="80" position="absolute" />
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
