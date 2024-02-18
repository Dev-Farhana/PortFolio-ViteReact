import React, { useState } from 'react';
import Logo from "../assets/logo1.png";
import {  FaBars,  FaTimes,  FaGithub,FaLinkedin,  FaFacebook } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// import { Link } from 'react-scroll';

function Navbar() {
    const [ nav, setNav]  = useState(false);
    const handleClick = () => setNav(!nav);


    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]   text-gray-300 '>
            <div className=''>
                <img src={Logo} alt="Logo Image" width={50} />
            </div>

            {/* menu  */}
                <ul className='hidden md:flex ' >
                    <li className='text-2xl' > Home </li>
                    <li className='text-2xl' > About </li>
                    <li className='text-2xl' > Skills </li>
                    <li className='text-2xl' > Work </li>
                    <li className='text-2xl' > Contact </li>
                </ul>

            {/*Hamburger */}
            <div className='md:hidden z-10'  onClick={handleClick}  > 
                { !nav ? <FaBars /> : <FaTimes /> }
                 </div>
            {/* mobile menu */}
            <ul className={ !nav ? "hidden" : "absolute top-0 left-0 h-screen w-full bg-[#0a192f] flex flex-col justify-center items-center" } >
                <li className='py-6 text-4xl' > Home </li>
                <li className='py-6 text-4xl' > About </li>
                <li className='py-6 text-4xl' > Skills </li>
                <li className='py-6 text-4xl' > Work </li>
                <li className='py-6 text-4xl' > Contact </li>
          </ul>

            {/* social icons */}
            <div className='flex fixed flex-col  top-[35%] left-0 ' > 
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-stone-800'>
                         <a className='flex justify-between items-center w-full text-slate-200'  href="/"> 
                           Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-900 '>
                        <a className='flex justify-between items-center w-full text-slate-200'  href="/"> 
                         LinkedIn <FaLinkedin size={30} /> 
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-sky-800'>
                        <a className='flex justify-between items-center w-full text-slate-200'  href="/"> 
                         Facebook <FaFacebook size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-rose-700'>
                        <a className='flex justify-between items-center w-full text-slate-200'  href="/"> 
                         Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-zinc-600'>
                        <a className='flex justify-between items-center w-full text-slate-200'  href="/"> 
                         Resume <BsFillPersonLinesFill size={30}  />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;