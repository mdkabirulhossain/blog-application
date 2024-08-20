import React from 'react';
import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import { MdContentPaste } from 'react-icons/md';

const Footer = () => {
    return (

        <div className='mt-10 flex flex-col justify-center items-center bg-black text-white md:flex-row md:justify-around'>
            <div className='flex justify-center items-center gap-2 p-2'>
            <MdContentPaste></MdContentPaste>
                <h1 className='font-bold text-xl'>BLOG</h1>
            </div>
            <div>
                <p className='p-2 text-center'>All right reserved. Copyright @blogger 2024</p>
            </div>
            <div className='flex justify-center items-center gap-4 m-4 p-4'>
                <FaFacebook></FaFacebook>
                <FaLinkedin></FaLinkedin>
                <FaTwitter></FaTwitter>
                <FaGoogle></FaGoogle>
        </div>
        </div>
        
        
    );
};

export default Footer;