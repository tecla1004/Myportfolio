import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import portfolio from "../../images/home.png"
import Button from '../commons/button/Button';


const Detail = ({subTitle, title, desc, tech}) => {

    const projectUrl = [
        "project1-Foodlet", "project2-hppy", "Splink"
    ]

    const redirectLink = ()=>{
        if(title == "Foodlet" ){
            <div className='my-10'>
                <Link href={`https://github.com/tecla1004/${projectUrl[0]}`}>
                    <Button label="View codes" />
                </Link>
                <div className='w-1/2 pt-14'>
                    <Image 
                    src={portfolio}
                    />
                </div>
            </div>
        }
        else
        if(title == "Hppy") {
            <div className='my-10'>
            <Link href={`https://github.com/tecla1004/${projectUrl[1]}`}>
                <Button label="View codes" />
            </Link>
            <div className='w-1/2 pt-14'>
                <Image 
                src={portfolio}
                />
            </div>
        </div>
        }
    }
    return (
        <div className='flex gap-36 mt-40 h-screen'>
            <div className='w-3/4'>
                <h4 className='text-2xl descFont'>{subTitle}</h4>
                <h2 className='text-5xl py-9'>{title}</h2>
                <p className='text-xl descFont'>{desc}</p>
                <div className='py-5'>
                    {tech.map((t,index)=>(
                        <p className='inline pr-3'>{t}</p>
                    ))}
                </div>
                        <div>
                            {redirectLink()}
                        </div>
                    {/* { title == "Foodlet" &&  
                     <div className='my-10'>
                        <Link href={`https://github.com/tecla1004/${projectUrl[0]}`}>
                            <Button label="View codes" />
                        </Link>
                        <div className='w-1/2 pt-14'>
                        <Image 
                        src={portfolio}
                        />
                        </div>
                    </div>
                    }
                    {title == "Hppy" ?
                    
                    <div>
                        <Link href={`https://github.com/tecla1004/${projectUrl[1]}`}>
                        <Button label="View codes" />
                        </Link>
                    </div>
                    
                    :(
                    title == "Splink" ?
                    <Link href={`https://github.com/tecla1004/${projectUrl[2]}`}>
                    <Button label="View codes" />
                    </Link>
                    )}
                     
                </div>*/}
            </div>
        </div>
    );
}

export default Detail;
