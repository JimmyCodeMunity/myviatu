import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="w-full overflow-hidden bg-white">
      <div className="flex px-6 sm:px-16 justify-center items-center bg-primary">
        <div className="w-full xl:max-w-[1280px]">
          <Navbar />
        </div>
      </div>

      <div className="flex justify-center items-start bg-primary">
        <div className="w-full xl:max-w-[1280px]">
          <About />
        </div>
      </div>

      <div className="flex justify-center items-start sm:px-16 px-6 bg-primary">
        <div className="w-full xl:max-w-[1280px]">
          <Footer />
        </div>
      </div>



    </div>
  );
}

export default AboutPage;
