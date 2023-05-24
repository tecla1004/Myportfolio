import Image from 'next/image';
import React from 'react';
import classNames from 'classnames';
import Button from '../commons/button/Button';
const MainJumbotron = ({txtColor}) => {
    return (
        <div>
            <div>
                <h3 className='text-4xl text-gradient'>Hi, there</h3>
                <h3 className='text-4xl text-gradient'>I'm Hyewon</h3>
                <h2 className={classNames(
                    'text-6xl my-3',
                    txtColor==="text-gray"
                )}>FRONTEND DEVELOPER</h2>
                <p 
                className={classNames(
                    'w-1/3 text-xl text-descGray',
                     
                )}
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et massa vel quam accumsan elementum. Nullam consectetur tristique enim, sit.</p>
            </div>
            <div>
                <div className='w-8 h-8 border-2'></div>
                <div></div>
                <div>
                    <Image />
                </div>
            </div>
            <Button txtColor="text-white" bgColor='bg-gradient' label='Explore projects' />
        </div>
    );
}

export default MainJumbotron;
