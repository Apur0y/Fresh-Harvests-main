import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

interface Blog {
    title:string;
    date:string;
    description:string;
    image:string

}

export default function BlogCard({blog}:{blog:Blog}) {

  return (
    <div className='w-343 md:w-sm'>
        <div className=' rounded-2xl'>
            <Image src={blog.image} alt={blog.title} height={500} width={500} className='rounded-xl h-64  md:w-sm'></Image>

        </div>

        <div className='mt-5'>
            <p className='text-gray-700'>{blog.date}</p>
            <h2 className='text-md font-semibold my-2'>{blog.title}</h2>
            <Link href={blog.description} className='underline font-semibold second-color flex'>
            Read More <FaArrowRight className='my-auto ml-1' />
            </Link>
        </div>
        
    </div>
  )
}
