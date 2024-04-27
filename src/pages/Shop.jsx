import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import AllProducts from '../components/AllProducts';

const Shop = () => {
    return (
        <div className="w-full overflow-hidden bg-white">
            <div className="flex px-6 sm:px-16 justify-center items-center bg-primary">
                <div className="w-full xl:max-w-[1280px]">
                    <Navbar />
                </div>
            </div>

            <div className="flex justify-center items-start bg-primary">
                <div className="w-full xl:max-w-[1280px]">
                    <Carousel/>
                </div>
            </div>
            <div className="flex justify-center items-start bg-white sm:px-16 px-6">
                <div className="w-full xl:max-w-[1280px]">
                    <AllProducts/>
                </div>
            </div>

        </div>
    );
}

export default Shop;
