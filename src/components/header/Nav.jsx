
import Image from 'next/image';
import React from 'react';
import linkedin from "../../icons/linkedin2.png"
import github from "../../icons/github2.png"
import mail from "../../icons/envelope2.png"
import Link from 'next/link';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/react-fontawesome';

const Nav = () => {

    

    return (
        <div className='flex ml-96 justify-end pt-9'>
            <Link href="#project" className='w-1/5 text-xl'>Project</Link>
            <Link href='#aboutMe' className='w-1/5 text-xl' >About me</Link>
            <div className='w-1/5 flex gap-4' >
                <Link href='https://www.linkedin.com/in/hyewon-kang/'>
                    <Image 
                    src={linkedin}
                    width={24}
                    height={24}
                    alt='linkein-icon'
                    />
                </Link>
                <Link href='https://github.com/tecla1004'>
                    <Image
                    src={github}
                    width={24}
                    height={24}
                    alt='github-icon'
                    />
                </Link>
                <Link href='mailto:tecla326@gmail.com'>
                    <Image 
                    src={mail}
                    width={24}
                    height={24}
                    alt='envelope-icon'
                    />
                </Link>
            </div>
            
        </div>
    );
}

export default Nav;
