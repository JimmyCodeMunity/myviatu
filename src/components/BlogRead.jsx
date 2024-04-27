import React, { useEffect, useState } from 'react';
import { getBlogById } from '../api';
import { urlFor } from '../sanity';
import MiniBlog from './MiniBlog';
import FullBlog from './FullBlog';


const BlogRead = ({ id }) => {
    const [myblogs, setBlogs] = useState([]);
    const [body, setBody] = useState("");
    const [mainImage, setMainImage] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    // console.log("blogid",id)

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const blogData = await getBlogById(id);
                setBlogs(blogData);
                setBody(blogData[0].body);
                setTitle(blogData[0].title);


                const image = urlFor(blogData[0].mainImage).url()
                setMainImage(image);

                console.log('Blogs:', blogData);
                return;
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, [id]);

    return (
        <section id='home' className="">
            <div className="pt-6 sm:pt-16 text-center">
                <h1 className="font-poppins font-normal text-white text-[30px]">{title}</h1>
            </div>
            <div className="flex md:flex-col flex-col-reverse py-6 sm:py-10">

                <div className="flex-1 flex justify-start items-start md:my-10 relative sm:px-16 px-6">
                    <img src={mainImage} alt="" className="w-[100%] h-[600px] rounded-3xl relative z-[5] object-cover" />
                    <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                    <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
                    <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                </div>
                <div className="flex-1 justify-center items-center flex-col xl:px-0 md:px-16 px-6">

                    <p className="text-white relative font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px]">
                        {body}
                    </p>


                </div>
            </div>
            <div class="max-w-2xl mx-auto text-center mb-10">
                <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl animate-pulse">Other Stories</h2>
            </div>

            <FullBlog />


        </section>
    );
}

export default BlogRead;
