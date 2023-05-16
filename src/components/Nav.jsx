import Image from 'next/image';
import React from 'react';

const Nav = () => {
    return (
        <div class='d-flex flex-row-reverse'>
            <h3>Project</h3>
            <h3>About me</h3>
            <Image 
            src="/../icons/linkedin.svg"
            width={50}
            height={50}
            alt='linkein-icon'
            />
            <Image
            src="/../icons/github.svg"
            width={50}
            height={50}
            alt='github-icon'
            />
            <Image 
             src="/../icons/envelope.svg"
             width={50}
             height={50}
             alt='envelope-icon'
            />
        </div>
    );
}

export default Nav;
