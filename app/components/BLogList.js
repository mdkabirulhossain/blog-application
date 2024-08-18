'use client'
import { blog_data } from '@/asset/Asset';
import React, { useState } from 'react';
import BlogItem from './BlogItem';

const BLogList = () => {
    const[menu, setMenu] = useState('All')
    return (
        <div>
            <div className='flex flex-wrap justify-center gap-5 my-2'>
                <button onClick={()=>setMenu('All')} className={menu === 'All'? 'bg-black text-white p-2 rounded-md px-4': 'text-black'}>All</button>
                <button onClick={()=>setMenu('Technology')} className={menu === 'Technology'? 'bg-black text-white p-2 rounded-md px-4': 'text-black'}>Technology</button>
                <button onClick={()=>setMenu('StartUp')} className={menu === 'StartUp'? 'bg-black text-white p-2 rounded-md px-4': 'text-black'}>StartUp</button>
                <button onClick={()=>setMenu('Lifestyle')} className={menu === 'Lifestyle'? 'bg-black text-white p-2 rounded-md px-4': 'text-black'}>LifeStyle</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    blog_data.filter(item=> menu === 'All'? true : item.category === menu).map(item=><div key={item.id}>
                        <BlogItem image={item.image} title={item.title} category={item.category} description={item.description}/>
                    </div>)
                }
            </div>

        </div>
    );
};

export default BLogList;