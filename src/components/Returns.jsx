import React from 'react';
import GetStarted from './GetStarted';
import { dirtyshoes, mockup, prods } from '../assets'

const Returns = ({ loggedIn }) => {
    // const user = localStorage.getItem('user');
    return (
        <section id='home' className="">
            <div className="pt-6 sm:pt-16 text-center">
                <h1 className="font-poppins font-normal text-white text-[30px]">Returns & Exchanges.</h1>
                <p className="text-white font-poppins">
                    At Viatu Care, your satisfaction is our priority.
                    If you're not completely happy with your purchase,
                    we're here to facilitate your return process. Remember,
                    items bought on our website can be returned directly to
                    viatu-care.com for a hassle-free refund.

                </p>
            </div>
            <div className="text-center my-5">
                <p className="font-poppins text-2xl bg-gradient-to-t from-blue-500 via-yellow-500 to-teal-500 text-transparent bg-clip-text my-2">Returns</p>
            </div>


            <div className="flex md:flex-row flex-col py-6 sm:py-10">

                <div className="flex-1 flex justify-center items-center md:my-10 relative sm:px-16 px-6">

                    <p className="font-poppins text-white">
                        For a refund, items from Viatu-care.com must be returned within 7
                        days of delivery, in pristine condition with the original invoice.
                        We'll credit the original form of payment, deducting shipping costs.
                        Please returns are to the address below for secure processing.

                    </p>
                    <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                    <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
                    <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                </div>
                <div className="flex-1 flex justify-center items-start flex-col xl:px-0 md:px-16 px-6">

                    <p className="text-white max-w-[500px] relative font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px]">
                        Viatu Care™️.
                    </p>
                    <br />
                    <p className="text-white max-w-[500px] relative font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px]">
                        Attn: Returns
                    </p>
                    <br />
                    <p className="text-white max-w-[500px] relative font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px]">
                        Yala towers, shop 202
                    </p>
                    <p className="text-white max-w-[500px] relative font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px]">
                        00509 Biashara Street

                    </p>
                    <p className="text-white max-w-[500px] relative font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px]">
                        Nairobi,Kenya
                    </p>
                    <p className="text-white max-w-[500px] relative font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px]">
                        Please contact Customer Service; +254 729792299

                    </p>
                    <p className="text-white max-w-[500px] relative font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px]">
                        For personalized assistance with returns or any concerns, reach
                        out to us at help@viatu-care.com ahead of time. We're here to
                        ensure your transaction is seamless. Expect your returns to be
                        processed within 2 business days upon receipt.


                    </p>
                    <br />


                </div>
            </div>

            <div className="text-center my-5">
                <p className="font-poppins text-2xl bg-gradient-to-t from-blue-500 via-yellow-500 to-teal-500 text-transparent bg-clip-text my-2">Exchanges</p>
            </div>


            <div className="text-center justify-center items-center">
                <p className="text-white font-poppins">
                    While we can't accommodate exchanges currently, you can easily initiate a new order and return any unwanted items for a refund. Refer to the RETURNS section above for detailed instructions on how to proceed with your returns.
                </p>
            </div>


        </section>
    );
}

export default Returns;
