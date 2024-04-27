import React from 'react';
import { logo } from '../assets';
import { footerLinks } from '../constants';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather'

const Footer = () => {
    return (
        <section className='flex justify-center items-center flex-col'>
            <div className='flex justify-center items-start md:flex:row flex-col mb-8 w-full'>
                <div className='flex-1 flex flex-col justify-start mr-10 py-2'>
                    <img src={logo} alt="logp" className="w-[266px] h-[72px] object-contain" />
                    <p className="text-dimWhite font-poppins text-[18px] leading-[30.8px] max-w-[310px] mt-4 font-normal">
                        The ultimate solution for effortlessly cleaning your sneakers safely,
                        affordably and with peace of mind!
                    </p>
                </div>

                <div className="flex-[1.5px] flex w-full flex-row flex-wrap justify-between md:mt-0 mt-0">
                    {footerLinks.map((footerlink) => (
                        <div key={footerlink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                            <h4 className="font-poppins font-medium text-[18px] bg-gradient-to-t from-blue-500 via-yellow-500 to-teal-500 text-transparent bg-clip-text my-2">
                                {footerlink.title}
                            </h4>
                            <ul>
                                {footerlink.links.map((link, index) => (
                                    <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-yellow-600 cursor-pointer 
                                    ${index !== footerlink.links.length - 1 ? 'mb-4' : 'mb-0'}`}>
                                        <Link to={`${link.link}`}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="flex-col">
                        <h1 className="text-white font-semibold">Find Us.</h1>
                        <br />
                        <div className="flex-row flex">
                            <Icon.MapPin color='yellow' />
                            <p className="text-dimWhite font-poppins font-normal text-[16px] leading-[24px] mb-4 max-w-[300px]">Biashara street/Koinange street,Nairobi</p>
                        </div>
                        
                        <div className="flex-col">
                            <div className="flex-row flex space-x-2">
                                <Icon.HelpCircle color='yellow' />
                                <p className="text-dimWhite font-poppins font-normal text-[16px] leading-[24px] mb-4 max-w-[300px]">Sales and customer service</p>
                            </div>
                            <p className="text-dimWhite font-poppins font-normal text-[16px] leading-[24px] mb-4 max-w-[300px]">+254729792299</p>
                        </div>
                        <div className="flex-col">
                            <div className="flex-row flex space-x-2">
                                <Icon.PhoneCall color='yellow' />
                                <p className="text-dimWhite font-poppins font-normal text-[16px] leading-[24px] mb-4 max-w-[300px]">Ecommerce & Technical Assistance</p>
                            </div>
                            <p className="text-dimWhite font-poppins font-normal text-[16px] leading-[24px] mb-4 max-w-[300px]">+254112163919</p>
                        </div>
                        
                    </div>
                </div>
                <div className="items-start">
                    <p className="text-white">©Copyright Viatu Care™️.All Rights Reserved.</p>
                </div>
            </div>


        </section>
    );
}

export default Footer;
