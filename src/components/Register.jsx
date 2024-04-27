import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    // const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState([]);
    const navigate = useNavigate()



    const handleRegister = (e) => {
        e.preventDefault();
        try {
            const response = axios.post('http://localhost:5000/api/v2/user/createuser', { username, email, phone, password })
            const userdata = response.data;
            setUser(userdata);
            navigate('/login')

        } catch (error) {
            console.log('Error creating user');
            console.log(error);

        }
    }
    return (
        <section className='' id='login'>
            <div
                className="flex bg-primary items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-8"
            >
                <section>
                    <div className="bg-white rounded-2xl relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
                        <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
                            <div className="flex flex-col">
                                <div>
                                    <h2 className="text-4xl text-black">SignIn</h2>
                                </div>
                            </div>
                            <form onSubmit={handleRegister}>
                                <input type="hidden" name="_redirect" />
                                <div className="mt-4 space-y-6">
                                    <div className="col-span-full">
                                        <label className="block mb-3 text-sm font-medium text-gray-600"> Username   </label>
                                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="enter username" className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" />
                                    </div>
                                    <div className="col-span-full">
                                        <label className="block mb-3 text-sm font-medium text-gray-600"> Email   </label>
                                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="enter email" className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" />
                                    </div>
                                    <div className="col-span-full">
                                        <label className="block mb-3 text-sm font-medium text-gray-600"> Phone  </label>
                                        <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="enter phone" className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" />
                                    </div>
                                    <div className="col-span-full">
                                        <label className="block mb-3 text-sm font-medium text-gray-600"> Password   </label>
                                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="enter password" className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" />
                                    </div>





                                    <div className="col-span-full">
                                        <button type="submit" className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"> Submit your request   </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

            </div>
        </section>

    );
}

export default Register;
