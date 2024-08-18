import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { MdContentPaste } from "react-icons/md";

const Header = () => {
    return (
        <div className='py-5 px-3 md:px-12 lg:px-28'>
            <div className='flex justify-between items-center '>
                <div className='flex items-center gap-2 font-extrabold text-xl cursor-pointer border-solid border-2 p-2 border-black rounded-md'>
                    <MdContentPaste></MdContentPaste>
                    BLOGS</div>
                <button className='flex items-center gap-4 font-medium py-1 px-3 border-solid border-2 rounded-md border-black shadow-md'>
                    Get Start
                    <FaArrowRight></FaArrowRight>
                </button>
            </div>
            <div className='text-center my-8'>
                <h1 className='text-3xl font-medium md:text-5xl'>Latest Blogs</h1>
                <p className='mt-6 p-2 text-xl'>Welcome to our blog page. Here you can find all the types of blogs.It is very helpful for you.</p>
                <form className='flex justify-center gap-5 mt-4' action="">
                    <input type="email" placeholder='enter your email'
                    className='pl-4 border-2 border-black rounded-md'
                    name="" id="" />
                    <button className='p-2 rounded-md bg-black text-white'>Subscribe</button>
                </form>
            </div>

        </div>

    );
};

export default Header;