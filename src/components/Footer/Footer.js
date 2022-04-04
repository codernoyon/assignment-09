import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="mx-auto w-5/6">
                <div className='grid lg:grid-cols-4 gap-4'>
                    <div>
                        <h3 className="text-xl">Quick Links</h3>
                        <ul className='footer-links'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/reviews">Reviews</Link></li>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li><Link to="/blogs">Blogs</Link></li> 
                            <li><Link to="/about">About</Link> </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl">Blogs</h3>
                        <ul className='footer-links'>
                            <li><Link to="/">Smart Watches</Link></li>
                            <li><Link to="/">Best Thing for you</Link></li>
                            <li><Link to="/">Project 24</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl">Social Links</h3>
                        <ul className='footer-links'>
                            <li><Link to="/">Facebook</Link></li>
                            <li><Link to="/">Twitter</Link></li>
                            <li><Link to="/">LinkedIn</Link></li>
                            
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl">Newslatter</h3>
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