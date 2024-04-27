import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Products from '../components/Products';
import Business from '../components/Business';
import Shoes from '../components/Shoes';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import Faq from '../components/Faq';
import Subscribe from '../components/Subscribe';
import Mobile from '../components/Mobile';
import MiniBlog from '../components/MiniBlog';


const HomePage = ({ loggedIn, handleLogout }) => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="flex px-6 sm:px-16 justify-center items-center">
        <div className="w-full xl:max-w-[1280px]">
          <Navbar logged={loggedIn} />
        </div>
      </div>


      <div className="flex justify-center items-start bg-primary">
        <div className="w-full xl:max-w-[1280px]">
          <Hero logged={loggedIn} />
        </div>
      </div>


      <div className="flex justify-center items-start sm:px-16 px-6 bg-white">
        <div className="w-full xl:max-w-[1280px]">
          <Products />
        </div>
      </div>
      <div className="flex justify-center items-start md:px-16 px-6 bg-primary">
        <div className="w-full xl:max-w-[1280px]">

          <Business />
        </div>
      </div>
      <div className="flex justify-center items-start sm:px-16 px-6 bg-primary">
        <div className="w-full xl:max-w-[1280px] justify-center items-center">
          <Stats />
        </div>
      </div>
      <div className="flex justify-center items-start md:px-16 px-6 bg-primary">
        <div className="w-full xl:max-w-[1280px]">

          <MiniBlog setLoading={setLoading} />

        </div>
      </div>
      <div className="flex justify-center items-start md:px-16 px-6 bg-primary">
        <div className="w-full xl:max-w-[1280px]">

          <Mobile />
          <Subscribe />

          <Footer />
        </div>
      </div>

    </div>
  );
}

export default HomePage;
