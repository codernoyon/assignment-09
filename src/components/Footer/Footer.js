import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <div className='w-5/6 mx-auto grid lg:grid-cols-4 gap-4'>
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
                        <Link to="/">Home</Link>
                        <Link to="/reviews">Reviews</Link>
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/blogs">Blogs</Link> 
                        <Link to="/about">About</Link> 
                    </ul>
                </div>
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
                    <h3 className="text-xl">Quick Link</h3>
                    <ul className='footer-links'>
                        <Link to="/">Home</Link>
                        <Link to="/reviews">Reviews</Link>
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/blogs">Blogs</Link> 
                        <Link to="/about">About</Link> 
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;