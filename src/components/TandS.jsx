import React from 'react';
import { termsandservices } from '../constants';

const TandS = () => {
    return (
        <section class="py-10 bg-primary sm:py-16 lg:py-24">
            <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <div class="max-w-2xl mx-auto text-center">
                    <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Terms & Services</h2>
                </div>
                <div>
                    {termsandservices.map((terms) => (
                        <div class="max-w-2xl mx-auto text-start items-start">

                            <h4 class="max-w-xl mt-4 font-poppins md:text-3xl text-xl leading-relaxed text-gray-300">{terms.title}</h4>
                            <br></br>
                            <p className="text-white font-poppins md:text-md text-normal">
                                {terms.content}
                            </p>
                        </div>

                    ))}

                </div>







            </div>
        </section>
    );
}

export default TandS;
