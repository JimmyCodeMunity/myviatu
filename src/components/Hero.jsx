import React from 'react';
import GetStarted from './GetStarted';
import { mockup } from '../assets'

const Hero = ({loggedIn}) => {
    const user = localStorage.getItem('user');
    return (
        <section id='home' className="flex md:flex-row flex-col py-6 sm:py-16">
            <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6">
                <div className="items-center justify-between w-full">
                    <h1 className="text-white flex-1 font-poppins font-semibold ss:text-[72px] text-[40px] ss:leading-[100px] leading-[75px]">
                        The next <br className="hidden sm:block" /> {" "}
                        <span className="bg-gradient-to-t from-blue-500 via-yellow-500 to-teal-500 text-transparent bg-clip-text">Generation</span>
                        <br className="hidden sm:block" />
                    </h1>



                </div>


                <h1 className="font-poppins text-white font-semibold text-[40px] ss:text-[68px] leading-[75px] ss:leading-[100px]">
                    Sneaker Care.
                </h1>
                <p className="text-white max-w-[500px] relative font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
                    At Viatu care, we are all about giving sneakers the TLC they deserve.
                </p>
                
            </div>



            <div className="flex-1 flex justify-center items-center md:my-10 relative">
                <img src={mockup} alt="" className="w-[100%] h-[100%] relative z-[5]" />
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            </div>

            <div className="ss:hidden sm:my-5 flex justify-center items-center">
                <GetStarted />
            </div>
        </section>
    );
}

export default Hero;
