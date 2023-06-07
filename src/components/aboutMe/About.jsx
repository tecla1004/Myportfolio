import React from 'react';
import Box from '../commons/Box';

const About = ({backgroundColor, histories, descColor}) => {
    return (
        <div className='py-48 mb-48'>
            <h3 className='text-4xl mb-10'>About me</h3>
            <p className='descFont'>Hey there! I'm a friendly and enthusiastic Frontend Developer who is deeply passionate about learning and growth. I have a solid foundation in HTML, CSS, and JavaScript, and I'm constantly seeking new opportunities to expand my knowledge and skill set in the ever-evolving world of web development. Creating visually appealing and user-friendly web interfaces is not just a job for me, it's a true passion that fuels my desire to deliver outstanding results.
            </p>
            <h5 className='text-xl py-10'>Skills </h5>
            <div>
                    <div className='grid grid-cols-4 gab-4'>
                    {histories.map((history, index) =>(
                        <div>                                {/* <Box width={6} height={6} backgroundColor={backgroundColor} /> */}
                            <div className='flex py-3'>
                                <Box round="rounded-full" width="w-4" height="h-4" backgroundColor={backgroundColor} />
                                <p className='pl-3'>{history}</p>
                            </div>
                        </div>  
                    ))}
                    </div>
                    
                    
                {/* <Box width="11" height="11" backgroundColor={backgroundColor} border="border-2" />
                <Box width="11" height="11" backgroundColor={backgroundColor} border="border-2" /> */}
            </div>
        </div>
    );
}

export default About;
