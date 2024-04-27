import React, { useEffect, useState } from 'react';
import GetStarted from './GetStarted';
import { banner1, banner2, banner3, dirtyshoes, mockup, prods } from '../assets'
import MiniBlog from './MiniBlog';
import FullBlog from './FullBlog';
import Loader from './Loader';

const Blog = ({ loggedIn }) => {
    const [loading, setLoading] = useState(false)
    // const user = localStorage.getItem('user');
    // const [myblogs,setBlogs] = useState([]);

    // useEffect(() => {
    //     const fetchEvents = async () => {
    //         try {
    //             const eventData = await getEvents();
    //             setEvents(eventData);
    //             console.log('Deals:', dealsData.length);
    //         } catch (error) {
    //             console.error('Error fetching events:', error);
    //         }
    //     };

    //     fetchEvents();
    // }, []);

    // const dealsData = events.map((event) => ({
    //     title: event.title, // Add title to data for rendering in the carousel
    //     imageUri: urlFor(event.mainImage).url(),
    //     link:event.shop,
    // }));
    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <section id='home' className="">
                    <div class="max-w-2xl mx-auto text-center mb-10">
                        <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl animate-pulse">Blog</h2>
                        <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-300">Explore the common questions and answers about Celebration</p>
                    </div>
                    <FullBlog setLoading={setLoading} />
                </section>
            )}
        </div>
    );
}

export default Blog;
