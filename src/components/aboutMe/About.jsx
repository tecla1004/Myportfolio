import React from 'react';
import Box from '../commons/Box';

const About = ({backgroundColor}) => {
    return (
        <div>
            <h3 className='text-4xl mb-20'>About me</h3>
            <div>
                <Box width="[300px]" height="[300px]" backgroundColor={backgroundColor} />
                <Box width="[300px]" height="[300px]" backgroundColor={backgroundColor} />
                <Box width="[300px]" height="[300px]" backgroundColor={backgroundColor} />
            </div>
        </div>
    );
}

export default About;
