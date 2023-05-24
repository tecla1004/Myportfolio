import Image from 'next/image';
import React from 'react';

const Cards = ({projectsData }) => {
    return (
        <div>
            <h3>Projects</h3>
            <div className='flex'>
                {projectsData.map((data, index)=>(
                    <div>
                        <Image 
                        src={data.imgUrl}
                        />
                        <h4>{data.title}</h4>
                        <p>{data.desc}</p>
                    </div>
                ))}
            </div> 
            
        </div>
    );
}

export default Cards;
