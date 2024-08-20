'use client'
import Footer from '@/app/components/Footer';
import { blog_data } from '@/asset/Asset';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaFacebook, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import { MdContentPaste } from 'react-icons/md';

const Component = ({main_id}) => {
    const [data, setData] = useState(null);
    console.log(main_id);
    const fetchBlogData = () => {
        for (let i = 0; i < blog_data.length; i++) {
            if (Number(main_id) === blog_data[i].id) {
                setData(blog_data[i]);
                console.log(blog_data[i]);
                break;
            }
        }
    }

    useEffect(() => {
        fetchBlogData();
    }, [])
    return (
        <div className='py-5 px-3 md:px-12 lg:px-28'>
            <div className='bg-gray-200 shadow-md rounded-md p-4'>
                <div className='flex justify-between items-center '>
                    <Link href='/'>
                        <div className='flex items-center gap-2 font-extrabold text-xl cursor-pointer border-solid border-2 p-2 border-black rounded-md'>
                            <MdContentPaste></MdContentPaste>
                            BLOGS</div>
                    </Link>
                    <button className='flex items-center gap-4 font-medium py-1 px-3 border-solid border-2 rounded-md border-black shadow-md'>
                        Get Start
                        <FaArrowRight></FaArrowRight>
                    </button>
                </div>
                <Image
                    src={data?.image}
                    alt=''
                    width={400}
                    height={400}
                    className='mx-auto m-4 shadow-lg border-2 border-gray-400'
                />
                <h1 className='mx-auto text-center font-semibold text-xl'>{data?.title}</h1>
            </div>
            <div>
                <h1 className='text-xl font-bold my-2'>Introduction: </h1>
                <p>{data?.description}</p>
                <h1 className='text-xl font-bold  my-2'>Step 1: Self Reflection and Goal Setting</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nulla vel natus nobis rem temporibus inventore accusantium. Aperiam, eveniet. Delectus labore enim quae fuga! Totam autem recusandae labore voluptatem sequi quos quam, ratione omnis. At magni aliquid voluptatibus, ratione sint atque tenetur soluta odit ad odio quo dolores deserunt, iure fugiat officiis nesciunt labore error ex laboriosam. Quibusdam nobis veniam quis. Ratione soluta nisi cumque illum adipisci dignissimos quo commodi obcaecati, repellat iusto corporis mollitia modi aspernatur earum consequatur voluptatibus ea odio? Laborum quia consequuntur in quos odit doloribus a reiciendis eligendi mollitia, quas necessitatibus, ipsa totam architecto? Labore, molestias!</p>
                <h1 className='text-xl font-bold  my-2'>Step 2: Self Reflection and Goal Setting</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nulla vel natus nobis rem temporibus inventore accusantium. Aperiam, eveniet. Delectus labore enim quae fuga! Totam autem recusandae labore voluptatem sequi quos quam, ratione omnis. At magni aliquid voluptatibus, ratione sint atque tenetur soluta odit ad odio quo dolores deserunt, iure fugiat officiis nesciunt labore error ex laboriosam. Quibusdam nobis veniam quis. Ratione soluta nisi cumque illum adipisci dignissimos quo commodi obcaecati, repellat iusto corporis mollitia modi aspernatur earum consequatur voluptatibus ea odio? Laborum quia consequuntur in quos odit doloribus a reiciendis eligendi mollitia, quas necessitatibus, ipsa totam architecto? Labore, molestias!</p>
                <h1 className='text-xl font-bold  my-2'>Step 3: Self Reflection and Goal Setting</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nulla vel natus nobis rem temporibus inventore accusantium. Aperiam, eveniet. Delectus labore enim quae fuga! Totam autem recusandae labore voluptatem sequi quos quam, ratione omnis. At magni aliquid voluptatibus, ratione sint atque tenetur soluta odit ad odio quo dolores deserunt, iure fugiat officiis nesciunt labore error ex laboriosam. Quibusdam nobis veniam quis. Ratione soluta nisi cumque illum adipisci dignissimos quo commodi obcaecati, repellat iusto corporis mollitia modi aspernatur earum consequatur voluptatibus ea odio? Laborum quia consequuntur in quos odit doloribus a reiciendis eligendi mollitia, quas necessitatibus, ipsa totam architecto? Labore, molestias!</p>
                <h1 className='text-xl font-bold  my-2'>Conclusion: </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi rerum ipsum dolorum minus inventore delectus, in accusamus tempore, repudiandae architecto ratione, ad laudantium necessitatibus eius. Pariatur vel sequi nisi molestias similique, iure architecto. Necessitatibus ab porro qui quo laborum pariatur. Beatae molestias suscipit blanditiis inventore quasi ad doloribus, deserunt sed?</p>
                <div className='my-10'>
                    <p className='font-semibold text-black'>Share this article on social media</p>
                    <div className='flex gap-4 my-2'>
                        <FaFacebook></FaFacebook>
                        <FaTwitter></FaTwitter>
                        <FaLinkedin></FaLinkedin>
                        <FaGoogle></FaGoogle>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Component;