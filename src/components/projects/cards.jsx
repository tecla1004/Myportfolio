import Image from 'next/image';
import React from 'react';
import Button from '../commons/button/Button';

const Cards = ({projectsData, font }) => {
    return (
        <div>
            <h3 className='text-4xl mb-20'>Projects</h3>
            <div className='grid grid-cols-2 gap-8'>
                {projectsData.map((data, index)=>(
                    <div className='border-2 flex flex-col px-5'>
                        <Image 
                        src={data.imgUrl}
                        className='px-2 m-auto pt-8'
                        />
                        <h4 className='text-3xl text-center pt-8'>{data.title}</h4>
                        <p className='text-xl text-center descFont py-3'>{data.desc}</p>
                        <div className='flex justify-center my-10'>
                            <Button label='View more' padding="16" />
                        </div>
                    </div>
                ))}
            </div> 
            
        </div>
    );
}

export default Cards;
