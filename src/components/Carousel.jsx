import React from 'react';
import { j15, j4, legs, mock } from '../assets';

const Carousel = () => {
    return (
        <section className="flex md:flex-row flex-col py-6 sm:py-16">
            <div className="flex-1 flex flex-row justify-between items-center w-full xl:px-0 sm:px-16 px-6">
                <div className="py-4">
                    <h1 className="text-white text-[40px] max-w-[470px] font-poppins">Buy and order products from us.We Clean sneakers too. </h1>
                </div>


                <div className="flex-1 flex justify-center items-center relative">
                <img src={j15} alt="" className="w-[20%] h-[20%] relative z-[5]" />
            </div>
            </div>



            


        </section>

    );
}

export default Carousel;
