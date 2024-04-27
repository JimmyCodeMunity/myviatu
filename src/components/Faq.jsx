import React, { useState } from 'react';
import { faqs } from '../constants';
import {Link} from 'react-router-dom'


const MAX_LENGTH = 100; // Maximum length of the sentences

const FaqItem = ({ faq }) => {
    const [expanded, setExpanded] = useState(false);
    const content = expanded ? faq.answer : faq.answer.slice(0, MAX_LENGTH);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="flex items-start" key={faq.id}>
            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
            </div>
            <div className="ml-4">
                <p className="text-xl font-semibold text-white">{faq.question}</p>
                <p className="mt-4 text-base text-gray-400">{content}</p>
                {faq.answer.length > MAX_LENGTH && (
                    <button
                        onClick={toggleExpand}
                        className="text-blue-500 font-semibold hover:underline focus:outline-none"
                    >
                        {expanded ? 'Read Less' : 'Read More'}
                    </button>
                )}
            </div>
        </div>
    );
};

const Faq = () => {
    return (
        <section class="py-10 bg-primary sm:py-16 lg:py-24">
            <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <div class="max-w-2xl mx-auto text-center">
                    <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">FAQ</h2>
                    <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-300">Explore the common questions and answers about Celebration</p>
                </div>

                <div className="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
                    {faqs.slice(0,4).map((faq) => (
                        <FaqItem faq={faq} key={faq.id} />
                    ))}
                </div>


                <div class="flex items-center justify-center mt-12 md:mt-20">
                    <div class="px-8 py-4 text-center bg-gray-800 rounded-full">
                        <p class="text-gray-50">Didn’t find the answer you are looking for? <Link to="/faqs" class="text-yellow-300 transition-all duration-200 hover:text-yellow-400 focus:text-yellow-400 hover:underline">Read More.</Link></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
