import React from 'react';
import GetStarted from './GetStarted';
import { dirtyshoes, mockup, prods } from '../assets'

const About = ({ loggedIn }) => {
    const user = localStorage.getItem('user');
    return (
        <section id='home' className="">
        <div className="pt-6 sm:pt-16 text-center">
        <h1 className="font-poppins font-normal text-white text-[30px]">About Us</h1>
        </div>
        <div className="flex md:flex-row flex-col-reverse py-6 sm:py-10">

            <div className="flex-1 flex justify-center items-center md:my-10 relative sm:px-16 px-6">
                <img src={prods} alt="" className="w-[100%] h-[100%] rounded-3xl relative z-[5]" />
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            </div>
            <div className="flex-1 flex justify-center items-start flex-col xl:px-0 md:px-16 px-6">

                <p className="text-white max-w-[500px] relative font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px]">
                    In 2005, my love affair with sneakers began when my dad gifted
                    me a pair of AirMax 97s, igniting a passion that would shape my future.
                    Fast forward to 2018, where that passion evolved into something more profound
                    – Viatu Elegance, a sneaker business fueled by the dedication of five enthusiasts
                    like myself. As we delved deeper into the sneaker world, we uncovered a glaring
                    gap in the market – the need for quality sneaker care. Thus, Viatu Elegance
                    transformed into Viatu Care in 2023, pioneering eco-friendly solutions for
                    sneakers. Since our inception, we've been unwavering in our commitment to
                    providing the best sneaker care solutions. We are inviting fellow enthusiasts
                    to join us on this journey to redefine shoe care in Africa. Our brand isn't
                    just about products; it's about understanding the significance of sneakers as
                    a lifestyle and empowering our customers to elevate their sneaker game with
                    confidence. With a diverse range of products and accessories,
                    Viatu Care is not just a brand – it's a movement propelling sneaker culture forward
                </p>
                

            </div>
            </div>


        </section>
    );
}

export default About;
