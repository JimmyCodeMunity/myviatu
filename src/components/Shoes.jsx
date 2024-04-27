import React from 'react';
import { legs, nike, shoes } from '../assets';
import Button from './Button';
import ButtonMore from './ButtonMore';

const Shoes = () => {
    return (
        <section id="services" className='flex md:flex-row flex-col-reverse sm:py-6 py-6'>
            <div className="flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative">
                <img src={legs} alt="" className='w-[100%] h-[100%] object-contain relative z-[5] rounded-full' />
                <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient "></div>
                <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient "></div>
            </div>


            <div className="flex-1 flex justify-center items-start flex-col">
                <h2 className="font-poppins font-semibold xs:text-[48px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
                    Get your services done
                    <br className='sm:block hidden' />
                    Quick & Efficiently.
                </h2>
                <p className="text-yellow-500 font-poppins font-semibold">What we do</p>
                <ul className="">
                    <li>
                        <p className="text-dimWhite max-w-[470px] hover:text-yellow-500 mt-5 font-poppins">Shoe cleaning</p>
                    </li>
                    <li>
                        <p className="text-dimWhite max-w-[470px] hover:text-yellow-500 mt-5 font-poppins">Sneaker Protection</p>
                    </li>
                    <li>
                        <p className="text-dimWhite max-w-[470px] hover:text-yellow-500 mt-5 font-poppins">Sneaker Accessories</p>
                    </li>
                </ul>

                <div>
                    <ButtonMore />
                </div>
            </div>

        </section>
    );
}

export default Shoes;
