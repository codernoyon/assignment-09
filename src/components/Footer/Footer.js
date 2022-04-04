import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="mx-auto w-5/6">
                <div className='grid lg:grid-cols-4 gap-4'>
                    <div>
                        <h3 className="text-xl">Quick Link</h3>
                        <ul className='footer-links'>
                            <Link to="/">Home</Link>
                            <Link to="/reviews">Reviews</Link>
                            <Link to="/dashboard">Dashboard</Link>
                            <Link to="/blogs">Blogs</Link> 
                            <Link to="/about">About</Link> 
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl">Blogs</h3>
                        <ul className='footer-links'>
                            <Link to="/">Smart Watches</Link>
                            <Link to="/">Best Thing for you</Link>
                            <Link to="/">Project 24</Link>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl">Quick Link</h3>
                        <ul className='footer-links'>
                            <Link to="/">Facebook</Link>
                            <Link to="/">Twitter</Link>
                            <Link to="/">LinkedIn</Link>
                            
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl">Quick Link</h3>
                        <div className='space-y-2'>
                            <input placeholder='Your email address' className='w-full p-1 px-3 rounded-sm' type="text" name="" id="" />
                            <button className='w-full btn'>Subscribe</button>
                        </div>
                    </div>
                </div>
                <p className='text-center  mt-3'>
                    &copy; 2022 <a className='text-white' target="_blank" href="http://coder-noyon.blogspot.com">Md Noyon Rahman</a> | Programming Hero learner
                </p>
            </div>
        </footer>
    );
};

export default Footer;