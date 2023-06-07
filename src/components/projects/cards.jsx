import Image from 'next/image';
import React from 'react';
import Button from '../commons/button/Button';

const Cards = ({projectsData, font }) => {
    return (
        <div>
            <h3 className='text-4xl mb-20'>Projects</h3>
            <div className='grid grid-cols-3 gap-8 pb-72'>
                {projectsData.map((data, index)=>(
                    <div>
                        <div className='flex flex-col px-1 h-full w-full bg-gradient-to-r py-1 from-puple via-darkblue to-skyblue '>
                            <div className='h-full w-full bg-primary'>
                                <Image 
                                src={data.imgUrl}
                                className='px-4 m-auto pt-8'
                                />
                                <h4 className='text-3xl text-center pt-8 descFont font-semibold'>{data.title}</h4>
                                <p className='text-base text-center descFont py-3'>{data.desc}</p>
                                {/* <p className='text-sm text-center pt-5 descFont'> {data.tech} </p> */}
                                <div className='flex justify-center my-10'>
                                    <Button label='View more' txtColor='text-black' txtSize='text-sm' />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div> 
            
        </div>
    );
}

export default Cards;
