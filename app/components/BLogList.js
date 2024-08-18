import { blog_data } from '@/asset/Asset';
import React from 'react';
import BlogItem from './BlogItem';

const BLogList = () => {
    return (
        <div>
            <div className='flex flex-wrap justify-center gap-5 my-2'>
                <button className='bg-black text-white p-2 rounded-md px-4'>All</button>
                <button className='bg-black text-white p-2 rounded-md px-4'>Technology</button>
                <button className='bg-black text-white p-2 rounded-md px-4'>StartUp</button>
                <button className='bg-black text-white p-2 rounded-md px-4'>LifeStyle</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    blog_data.map(item=><div key={item.id}>
                        <BlogItem image={item.image} title={item.title} category={item.category} description={item.description}/>
                    </div>)
                }
            </div>

        </div>
    );
};

export default BLogList;