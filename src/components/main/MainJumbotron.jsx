import Image from 'next/image';
import React from 'react';

const MainJumbotron = () => {
    return (
        <div>
            <div>
                <h2>Hi, there</h2>
                <h2>I'm Hyewon</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et massa vel quam accumsan elementum. Nullam consectetur tristique enim, sit.</p>
            </div>
            <div>
                <div></div>
                <div></div>
                <div>
                    <Image />
                </div>
            </div>
        </div>
    );
}

export default MainJumbotron;
