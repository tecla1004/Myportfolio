import Image from 'next/image';
import React from 'react';
import classNames from 'classnames';
import Button from '../commons/button/Button';
const MainJumbotron = ({txtColor}) => {
    return (
        <div>
            <div>
                <h3 className='text-4xl'>Hi, there</h3>
                <h3 className='text-4xl'>I'm Hyewon</h3>
                <h2 className={classNames(
                    'text-6xl my-3',
                    txtColor==="text-descGray"
                )}>FRONTEND DEVELOPER</h2>
                <p 
                className={classNames(
                    'w-1/3 text-xl text-descGray',
                     
                )}
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et massa vel quam accumsan elementum. Nullam consectetur tristique enim, sit.</p>
            </div>
            <div>
                <div></div>
                <div></div>
                <div>
                    <Image />
                </div>
            </div>
            <Button txtColor="text-white" bgColor='bg-primaryGra' />
        </div>
    );
}

export default MainJumbotron;
