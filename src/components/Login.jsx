import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


const Login = () => {
    const [email, setEmail] = useState('dev.jimin02@gmail.com');
    const [password, setPassword] = useState('123456');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [user,setUser] = useState([])

    // const { login } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:5000/api/v2/user/userlogin', { email, password })
            const myuser = response.data;
            setUser(myuser)
            // const authToken = 'response';
            // navigate('/')
            console.log("info", response.data)
            console.log("token", response.data.token)
            localStorage.setItem('user', response.data.name);
            localStorage.setItem('token', response.data.token); // Save token in local storage
            localStorage.setItem('logstate', 'Authenticated'); // Save token in local storage
            navigate('/',{ replace: true })

        } catch (error) {
            console.log('Authentication failed');
            console.log(error)

        }
    }
    return (
        <section className='' id='login'>
            <div
                class="flex bg-primary items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-8"
            >
                <section>
                    <div class="bg-white rounded-2xl relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
                        <div class="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
                            <div class="flex flex-col">
                                <div>
                                    <h2 class="text-4xl text-black">SignIn</h2>
                                </div>
                            </div>
                            <form onSubmit={handleLogin}>
                                <input type="hidden" name="_redirect" />
                                <div class="mt-4 space-y-6">
                                    <div class="col-span-full">
                                        <label class="block mb-3 text-sm font-medium text-gray-600"> Password   </label>
                                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="enter email" class="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" />
                                    </div>
                                    <div class="col-span-full">
                                        <label class="block mb-3 text-sm font-medium text-gray-600"> Confirm passord   </label>
                                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="enter password" class="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" />
                                    </div>


                                    <div class="col-span-full">
                                        {loading ?
                                            <button type="submit" class="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"> Attempting Login....   </button> :
                                            <button type="submit" class="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"> Submit your request   </button>
                                        }
                                    </div>
                                </div>
                                <Link to="/register">
                                    <p className="text-blue-400 my-5">Register</p>
                                </Link>
                            </form>
                        </div>
                    </div>
                </section>

            </div>
        </section>

    );
}

export default Login;
