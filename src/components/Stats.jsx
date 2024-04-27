import React from 'react';
import { stats } from '../constants';

const Stats = () => {
    return (
        <section className='flex flex-row flex-wrap items-center justify-center sm:my-20 my-6'>
            {stats.map((stat) => (
                <div key={stat.id} className='flex-1 flex justify-start items-center flex-row m-3'>
                    <h4 className='font-poppins font-semibold xs:text-[40px] text-[20px] xs:leading-[43px] text-white'>{stat.value}</h4>
                    <p className='font-poppins font-normal xs:text-20px text-[12px] xs:leading-[26px] leading-[21px]  uppercase ml-3 bg-gradient-to-t from-blue-500 via-yellow-500 to-teal-500 text-transparent bg-clip-text'>{stat.title}</p>
                </div>
            ))}
        </section>
    );
}

export default Stats;
