import React from 'react';
import Box from '../commons/Box';

const About = ({backgroundColor, histories}) => {
    return (
        <div className='py-48 mb-48'>
            <h3 className='text-4xl mb-20'>About me</h3>
            <div>
                    <div className='flex flex-row'>
                    {histories.map((history, index) =>(
                        <div>
                            <h5>{history.year}</h5>
                                <Box width="[155px]" height="[155px]" backgroundColor={backgroundColor} />
                                <div>
                                    <p>-{history.jobDesc}</p>
                                    <p>-{history.jobDesc2}</p>
                                    <p>-{history.jobDesc3}</p>
                                    <p>-{history.jobDesc4}</p>
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
