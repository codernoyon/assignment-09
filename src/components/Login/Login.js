import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className='flex items-center justify-center h-screen'>
                <div className="w-5/6 lg:w-2/6 mx-auto shadow-xl px-7 py-8 rounded-md" data-aos="fade-top" data-aos-duration="1500">
                    <h3 className="text-xl text-center">Login</h3>
                    <div className='mb-4'>
                        <label for='email' className='block text-sm mb-2'>Email</label>
                        <input placeholder='Email' className='p-1 w-full px-3 rounded-sm' type="email" name="" id="email" />
                    </div>
                    <div className='mb-4'>
                        <label for='password' className='block text-sm mb-2'>Password</label>
                        <input placeholder='Password' className='p-1 px-3 w-full rounded-sm' type="password" name="" id="password" />
                    </div>
                    <button className='btn w-full mb-1'>Login</button>
                    <small className='text-xs text-center block'>New to Smart Tech? <Link className='text-[#C3073F]' to='/'>Create an account</Link></small> 
                </div>
            </div>
        </div>
    );
};

export default Login;   