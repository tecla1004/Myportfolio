import Image from 'next/image';
import React from 'react';
// import LinkdeIn from "../../icons/linkedin.svg"
// import github from "../../icons/github(3).svg"
// import Mail from "../../icons/envelope.svg"
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGitHub,

} from "@fortawesome/free-solid-svg-icons";


const Contact = (props) => {
    return (
        <div>
            <h3 className='text-center text-2xl descFont'>Are you interested in my work?</h3>
            <h2 className='text-center text-3xl py-11'>Contact Me!!</h2>
            <div className='flex justify-center gap-10 pb-60'>
                <Link href="https://www.linkedin.com/in/hyewon-kang">
                    <FontAwesomeIcon icon={faGitHub} style={{fontsize:25, color:"#ffffff",}} />
                    {/* <LinkdeIn width={24} height={24} fill={"white} /> */}
                    {/* <Image
                    src={linkedin}
                    width={24}
                    height={24}
                    alt='linkein-icon'
                    /> */}
                </Link>
                <Link href="https://github.com/tecla1004">
                    {/* <Image
                    src={github}
                    width={24}
                    height={24}
                    alt='github-icon'
                    /> */}
                </Link>
                <Link href={`https://mail.google.com/mail/?view=cm&to=${encodeURIComponent("tecla326@gmail.com")}`}>
                    {/* <Image 
                    src={mail}
                    width={24}
                    height={24}
                    alt='envelope-icon'
                    /> */}
                </Link>
            </div>
        </div>
    );
}

export default Contact;
