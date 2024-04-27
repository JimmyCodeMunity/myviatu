import React, { useEffect, useState } from 'react';
import { getBlogs } from '../api';
import { urlFor } from '../sanity';
import { Link } from 'react-router-dom';

const MAX_LENGTH = 80; // Maximum length of the sentences
const MAX_LENGTHTITLE = 20; // Maximum length of the sentences

const BlogItem = ({ blog }) => {
    const [expanded, setExpanded] = useState(false);
    const truncatedContent = blog.body.slice(0, MAX_LENGTH);
    const content = expanded ? blog.body : truncatedContent + (blog.body.length > MAX_LENGTH ? "..." : "");

    //cut the title
    const truncatedTitle = blog.title.slice(0, MAX_LENGTHTITLE);
    const title = expanded ? blog.title : truncatedTitle + (blog.title.length > MAX_LENGTHTITLE ? "..." : "");

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    const formatDate = (time) => {
        const date = new Date(time);
        return date.toLocaleString();
    };

    return (
        <div className="cursor-pointer" key={blog.id}>
            <div class="max-w-sm my-3 md:h-[500px] h-[500px] p-2 border border-gray-200 rounded-lg shadow bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg h-[60%] object-cover w-full" src={blog.imageUri} alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 md:text-xl text-sm font-semibold font-poppins tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{content}</p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{formatDate(blog.time)}</p>

                    <a href={`/readblog/${blog.id}`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
};

const MiniBlog = ({setLoading}) => {
    const [myblogs, setBlogs] = useState([]);

    useEffect(() => {
        
        const fetchBlogs = async () => {
            setLoading(true)
            try {
                const blogData = await getBlogs();
                setBlogs(blogData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching blogs:', error);
                setLoading(false)
            }
        };

        fetchBlogs();
    }, []);

    const blogsData = myblogs.map((myblogs) => ({
        title: myblogs.title, // Add title to data for rendering in the carousel
        imageUri: urlFor(myblogs.mainImage).url(),
        body: myblogs.body,
        id: myblogs._id,
        time: myblogs._updatedAt
    }));

    return (
        <section class="py-10 bg-primary sm:py-3">
            <div class="md:px-4 sm:px-6 lg:px-8">
                <div class="max-w-2xl mx-auto text-center mb-10">
                    <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl animate-pulse">Blog</h2>
                    <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-300">Explore the common questions and answers about Celebration</p>
                </div>

                <div className="flex md:flex-row flex-col justify-between items-center w-full">
                    {blogsData.slice(0, 3).map((blog) => (
                        <BlogItem blog={blog} key={blog.id} />
                    ))}
                </div>

                <div class="flex items-center justify-center mt-12 md:mt-20">
                    <div class="px-8 py-4 text-center bg-gray-800 rounded-full">
                        <p class="text-gray-50">Didn’t find the answer you are looking for? <Link to="/blog" class="text-yellow-300 transition-all duration-200 hover:text-yellow-400 focus:text-yellow-400 hover:underline">Read More.</Link></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MiniBlog;
