import React, { useState } from 'react';
import {  FaBars,  FaTimes,  FaGithub,FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';


function Navbar() {
    const [ nav, setNav]  = useState(false);
    const handleClick = () => setNav(!nav);


    return (
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <div className="writeLogo">
          <h2>
            Dev - <span> Farhana </span>
          </h2>
        </div>

        {/* menu  */}
        <ul className="hidden md:flex " data-aos="fade-down">
          <li className="text-2xl">
            {" "}
            <Link to="home" smooth={true} duration={500}>
              {" "}
              Home{" "}
            </Link>{" "}
          </li>
          <li className="text-2xl">
            {" "}
            <Link to="about" smooth={true} duration={500}>
              {" "}
              About{" "}
            </Link>{" "}
          </li>
          <li className="text-2xl">
            {" "}
            <Link to="skills" smooth={true} duration={500}>
              {" "}
              Skills{" "}
            </Link>{" "}
          </li>
          <li className="text-2xl">
            {" "}
            <Link to="work" smooth={true} duration={500}>
              {" "}
              Work{" "}
            </Link>{" "}
          </li>
        </ul>

        {/*Hamburger */}
        <div className="md:hidden z-10" onClick={handleClick}>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* mobile menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 h-screen w-full bg-[#0a192f] flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-4xl">
            <Link to="home" smooth={true} duration={500}>
              {" Home "}
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link to="about" smooth={true} duration={500}>
              {" About "}
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link to="skills" smooth={true} duration={500}>
              {"Skills"}
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link to="work" smooth={true} duration={500}>
              Work{" "}
            </Link>
          </li>
        </ul>

        {/* social icons */}
        <div className="flex fixed flex-col  top-[35%] left-0 ">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-stone-800">
              <a
                className="flex justify-between items-center w-full text-slate-200"
                href="https://github.com/Dev-Farhana"
              >
                Github <FaGithub size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-900 ">
              <a
                className="flex justify-between items-center w-full text-slate-200"
                href="https://pk.linkedin.com/in/farhana-n-687b78273"
              >
                LinkedIn <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-rose-700">
              <a
                className="flex justify-between items-center w-full text-slate-200"
                href="/"
              >
                Email <HiOutlineMail size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-zinc-600">
              <a
                className="flex justify-between items-center w-full text-slate-200"
                href="/"
              >
                Resume <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Navbar;

