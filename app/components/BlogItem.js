import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const BlogItem = ({ image, category, description, title, id }) => {
    return (
        <div className='p-2 m-4 border-2 border-black rounded-md max-h-96 hover:border-x-4 transition-all'>
            <Image src={image}
                alt=''
                width={200}
                height={200}
                className='w-full h-32'
            />
            <p className='inline-block bg-black text-white font-bold p-2 rounded-md m-2'>{category}</p>
            <div className='p-2 '>
                <h5 className='font-bold'>{title}</h5>
                <p >{description}</p>
            </div>
            <Link href={`/blogs/${id}`}>
                <div className='flex items-center gap-3 p-2'>
                    <p className='font-bold'>read more</p>
                    <FaArrowRight />
                </div>
            </Link>

        </div>
    );
};

export default BlogItem;