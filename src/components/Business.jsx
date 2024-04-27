import React from 'react';
import Button from './Button';
import { features } from '../constants';


const FeatureCard = ({ icon, title, index, content }) => {
    return (
        <div className={`flex flex-row p-6 items-center rounded-[20px] feature-card ${index !== features.length - 1 ? 'mb-6' : 'mb-0'}`}>
            <div className="flex w-[64px] h-[64px] rounded-full justify-center items-center bg-dimBlue">
                <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain' />
            </div>

            <div className='flex-1 flex flex-col ml-3'>
                <h4 className="font-semibold text-white py-6 text-[18px] font-poppins leading-[23px]">{title}</h4>
                <p className="text-dimWhite font-poppins font-normal leading-[23px] mb-1 text-[16px]">
                    {content}
                </p></div>

        </div>

    )
}

const Business = () => {
    return (
        <section id='about' className="flex md:flex-row flex-col sm:py-16 py-6">
            <div className="flex-1 flex justify-center items-start flex-col">
                <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>
                    You bring us the shoes 
                    <br className='hidden sm:block' />
                    {" "}we shall handle the cleaning.
                </h2>
                <p className="text-white font-poppins font-normal text-[18px] leading-[30.8px] mx-w-[470px]">
                    with the right cleaners,you can get your shoes done quickly and in the
                    best way.
                </p>


                <Button />
            </div>



            <div className="flex-col flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative">
                {features.map((feature, index) => (
                    <FeatureCard key={feature.id} {...feature} index={index} />
                ))}
            </div>
        </section>
    );
}

export default Business;
