import React from 'react';
import Navbar from '../components/Navbar';
import Login from '../components/Login';
import Register from '../components/Register';

const RegisterPage = () => {
  return (
    <div className="w-full overflow-hidden bg-white">
      <div className="flex px-6 sm:px-16 justify-center items-center bg-primary">
        <div className="w-full xl:max-w-[1280px]">
          <Navbar />
        </div>
      </div>

      <div className="flex justify-center items-start bg-primary">
        <div className="w-full xl:max-w-[1280px]">
          <Register />
        </div>
      </div>




    </div>
  );
}

export default RegisterPage;
