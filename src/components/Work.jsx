import React from 'react';
import data  from '../data/data';

function Work() {
    const project = data; 
  return (
    <div name="work" className='w-full md:h-screen text-gray-300  bg-slate-500 '>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-rose-600 head'  data-aos="fade-up" > Work</p>
                <p className='py-6'> Checkout my recent Work here...</p>
            </div>
            {/* my projects here */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4' data-aos="flip-up" >
                {project.map((item,index)=> {
                    return (
                        <div key={index} style={{backgroundImage: `url(${item.image})`}}
                        className='shadow-lg shadow-[#040c16] container rounded-md  flex justify-center text-center items-center
                        mx-auto content-div' >
                            <div className='opacity-0 hover:opacity-100' > 
                                <span className='text-2xl font bold text-white tracking-wider'>
                                    {item.name}
                                </span>
                                <div className='text-center pt-8'>
                                    <a href={item.github} target='_blank' >
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '> 
                                            Code 
                                        </button>
                                    </a>
                                
                                    <a href={item.live} target='_blank' >
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> 
                                        Live
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    </div>
  )
}



export default Work;