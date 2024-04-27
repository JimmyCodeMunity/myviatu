import React, { useEffect, useState } from 'react';
import { navLinks } from '../constants'
import { Camera, AlignLeft, X } from 'react-feather';
import { logo } from '../assets'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ loggedIn }) => {
  const navigate = useNavigate()
  const [logstate, setLogstate] = useState('');

  useEffect(() => {
    const mystate = localStorage.getItem('logstate');
    setLogstate(mystate);
  }, [])

  const handleLogout = () => {
    // Perform logout actions, such as clearing token from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('logstate');
    localStorage.removeItem('user');
    console.log("user logged out")
    navigate('/login')

  };
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="top-0 flex justify-between items-center navbar">
      <div className="flex-row space-x-3 flex justify-between items-center">
        <img src={logo} className='w-[120px] h-[120px]' alt="" />
        <h1 className="text-[30px] font-bold bg-gradient-to-t from-blue-500 via-yellow-500 to-teal-500 text-transparent bg-clip-text">ViatuCare</h1>
      </div>



      <ul className="list-none items-center hidden md:flex justify-end flex-1">
        {navLinks.map((nav, index) => (
          <li key={index}
            className={`font-poppins font-normal cursor-pointer text-[16px]
          ${index == navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white mr-10
          `}
          >
            <Link to={`${nav.id}`} className="text-white font-normal px-3 py-2 rounded-md text-sm">
              {nav.name}
            </Link>
          </li>
        ))}

        {logstate == 'Authenticated' &&
          <li className="font-poppins font-normal">
            <button onClick={handleLogout} className="text-yellow-500">Logout</button>
          </li>
        }

      </ul>

      <div className="md:hidden justify-end items-center flex"
      >

        <div onClick={() => setToggle(prev => !prev)} className="cursor-pointer">
          {toggle ? <X color='white' size={30} /> : <AlignLeft color='white' size={30} />}
        </div>


        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none items-center flex flex-col justify-end flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white mr-10`}
              >
                <Link to={`${nav.id}`}>
                  {nav.name}
                </Link>
              </li>
            ))}

          </ul>
        </div>

      </div>

    </nav>
  );
}

export default Navbar;
