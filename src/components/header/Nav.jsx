
import Image from 'next/image';
import React from 'react';
import linkedin from "../../icons/linkedin.svg"
import github from "../../icons/github.svg"
import mail from "../../icons/envelope.svg"

const Nav = () => {
    return (
        <div className='flex ml-96 jus'>
            <h3 className='w-1/5 text-xl'>Project</h3>
            <h3 className='w-1/5 text-xl' >About me</h3>
            <div className='w-1/5 flex gap-4' >
                <Image 
                src={linkedin}
                width={24}
                height={24}
                alt='linkein-icon'

                />
                

                <Image
                src={github}
                width={24}
                height={24}
                alt='github-icon'
                />
                <Image 
                src={mail}
                width={24}
                height={24}
                alt='envelope-icon'
                />
            </div>
            
        </div>
    );
}

export default Nav;
