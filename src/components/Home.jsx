import React from 'react';
import {HiArrowNarrowRight} from "react-icons/hi";

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-slate-800 px-6' >  
    {/* container */}
      <div className='max-w-[1000px] h-full flex flex-col justify-center mx-auto px-12 pt-24 '>
        <p className='text-rose-200 text-xl pt-6' > Hi, my name is </p>
        <h1 className='font-bold text-4xl sm:text-7xl text-gray-300 title' data-aos="fade-up" > Farhana.  </h1>
        <h2 className='font-bold text-4xl sm:text-7xl text-gray-600' data-aos="fade-left" > A Mern Stack Developer. </h2>
        <p className='text-gray-500 max-w-[500px] py-4' data-aos="fade-down-right" > I'm a MERN-Stack developer specializing in building exceptional digital experiences. Currently, I'm focused on
          building responsive full-stack web applications. </p>
       <div>
          <button className='border-2 px-6 py-3 my-2 flex items-center hover:bg-rose-400 hover:border-rose-400 text-white '> View Work 
            <span className='hover:rotate-90 duration-300 '> 
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
       </div>
      </div>
    </div>
  )
}

export default Home;