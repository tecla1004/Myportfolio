import Image from 'next/image';
import React from 'react';
import Button from '../commons/button/Button';
import Link from 'next/link';

const Cards = ({projectsData }) => {

   
    return (
        <div id='project' className='mx-20 pt-20 h-full' >
            <h3 className='text-4xl mb-20'>Projects</h3>
            <div className='grid grid-cols-3 gap-8'>
                {projectsData.map((data, index)=>(
                    <div>
                        <div className='flex flex-col px-1 h-full w-full bg-gradient-to-r py-1 from-puple via-darkblue to-skyblue  hover:scale-105 cursor-pointer transition ease-in-out'>
                            <div className='h-full w-full bg-primary'>
                                <Image 
                                src={data.imgUrl}
                                className='px-4 m-auto pt-8 '
                                height={500}
                                
                                />
                                <h4 className='text-3xl text-center pt-8 descFont font-semibold'>{data.title}</h4>
                                <p className='text-base text-center descFont py-3'>{data.desc}</p>
                                {/* <p className='text-sm text-center pt-5 descFont'> {data.tech} </p> */}
                                <div className='flex justify-center my-10'>
                                    { data.title == "Responsive PWA" ? (
                                    <Link href='http://foodlet-b141c.web.app/' target="_blank">
                                    <Button label='View' txtColor='text-black' txtSize='text-sm' />
                                    </Link>
                                    ) 
                                    :   data.title == "B2B SPA" ? (
                                        <Link href='https://github.com/tecla1004/project2-hppy' target="_blank">
                                        <Button label='View' txtColor='text-black' txtSize='text-sm' />
                                        </Link>
                                    ) 
                                    :  data.title == "iOS Mobile Application" ? (
                                        <Link href='https://github.com/tecla1004/Splink-Frontend' target="_blank">
                                        <Button label='View' txtColor='text-black' txtSize='text-sm' />
                                        </Link>
                                    )
                                    :(
                                        <Link href='https://bc-spca-renewal.netlify.app/' target="_blank">
                                        <Button label='View Code' txtColor='text-black' txtSize='text-sm' />
                                        </Link>  
                                    )
                                }
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
