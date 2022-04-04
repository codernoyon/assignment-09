import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { NavLink, Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    
    const [open, setOpen] = useState(false);

    return (
        <header className='w-full  z-10'>
            <nav className='w-full px-4 py-3 lg:px-0  lg:w-5/6 mx-auto flex items-center justify-between'>
                <Link to='/' className='text-2xl font-semibold'>Smart <span className="highlight">T</span>ech</Link>
                <ul className={`w-full py-3 lg:py-0 absolute bg-white lg:bg-inherit lg:static lg:w-auto  left-0  lg:flex z-10 lg:z-0 duration-300 ease-in lg:space-x-3 space-y-2 lg:space-y-0 px-3 lg:px-0 shadow-md lg:shadow-none ${ open? 'top-14': 'top-[-180px]'}` }>
                    <li>
                        <NavLink className={({isActive}) => (isActive ? "active-link" : "link")} to="/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => (isActive ? "active-link" : "link")} to='/reviews'>Reviews</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => (isActive ? "active-link" : "link")} to='/dashboard'>Dashborad</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => (isActive ? "active-link" : "link")} to='/blogs'>Blogs</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => (isActive ? "active-link" : "link")} to='/about'>About</NavLink>
                    </li>
                </ul>
                <button className='lg:block btn'>Login</button>
                <button onClick={() => setOpen(!open)} className='w-7 h-7 lg:hidden'>
                    {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                </button>
            </nav>
        </header>
    );  
};  

export default Header;