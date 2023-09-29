// hook
import React, { useState } from 'react'
// assets
import { GrLanguage } from "react-icons/gr";
import { FaBars, FaXmark } from "react-icons/fa6";
import logo from '../assets/logo.png'
// router
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    const navItems = [
        { link: "Overiew", path: "home" },
        { link: "Feature", path: "feature" },
        { link: "About", path: "about" },
        { link: "Pricing", path: "pricing" }
    ]

    return (
        <>
            <nav className='bg-white md:px-14 p-4 max-w-screen-2x1 border-b mx-auto fixed top-0 right-0 left-0 text-primary'>
                <div className='text-lg container mx-auto flex justify-between items-center font-medium'>

                    <div className='flex space-x-14 items-center'>
                        <a href='/' className='font-semibold flex items-center space-x-10 text-primary'>
                            <img src={logo} alt='logo' className='w-10 px-1 inline-block items-center' /> XYZ
                        </a>

                        <ul className='md:flex  space-x-12 hidden'>

                            <li>
                                <NavLink to="/" className='block hover:text-gray-300 cursor-pointer'>Home </NavLink>
                            </li>

                            <li>
                                <NavLink to="introduction" className='block hover:text-gray-300 cursor-pointer'>Introduction</NavLink>
                            </li>

                            <li>
                                <NavLink to="contest" className='block hover:text-gray-300 cursor-pointer'>Education</NavLink>
                            </li>

                        </ul>
                    </div>

                    {/* language & signup */}

                    <div className='space-x-12 hidden md:flex items-center'>
                        <a href='/' className='hidden lg:flex items-center hover:text-secondary'> <GrLanguage className='mr-2' /> <span>language</span> </a>
                        <button className='bg-secondary py-2 px-4 translate-all duration-300 rounded hover:text-white hover:bg-indigo-600'>Sign up</button>
                    </div>

                    {/* menu */}

                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300'>
                            {
                                isMenuOpen ? (<FaXmark className='w-6 h-6 text-primary' />) : (<FaBars className='w-6 h-6 text-primary text-lg' />)
                            }
                        </button>
                    </div>

                </div>
            </nav>

            <div className={`space-y-4 px-4 pt-24 pb-5 bg-secondary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {
                    navItems.map(({ link, path }) => <Link activeClass='active' spy={true} smooth={true} offset={-80} key={link} to={path} className='block text-white hover:text-gray-400' onClick={toggleMenu}> {link}</Link>)
                }
            </div>
        </>

    )
}

export default Navbar