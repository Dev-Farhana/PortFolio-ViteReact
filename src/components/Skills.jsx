import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Git from '../assets/Git.png';
import Express from '../assets/express.png';
import AntD from '../assets/AntD.png';


function Skills() {
  return (
    <div name="skills" className='w-full bg-slate-600 text-gray-300 py-20' >
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-screen'>
            <div data-aos="fade-up-right" >
                <p className='text-4xl font-bold inline border-b-4 border-rose-600 head' > Skills  </p>
                <p className='py-4'> These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center ' >
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300' >
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4' data-aos="fade-down-right"> HTML </p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300' >
                    <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                    <p className='my-4' data-aos="fade-up-right"> CSS </p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300' >
                    <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                    <p className='my-4' data-aos="fade-up-left"> JavaScript </p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300' >
                    <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                    <p className='my-4' data-aos="fade-down-right" > ReactJS </p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300' >
                    <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                    <p className='my-4' data-aos="fade-up-right" > Node JS </p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300' >
                    <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                    <p className='my-4'  data-aos="fade-up" > Github </p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300' >
                    <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                    <p className='my-4'  data-aos="fade-up" > TailwindCss </p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300' >
                    <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                    <p className='my-4'data-aos="fade-up-left" > MongoDB </p>
                </div>
                
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300' >
                    <img className='w-20 mx-auto' src={Express} alt="HTML icon" />
                    <p className='my-4'data-aos="fade-up-left" > ExpressJS  </p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300' >
                    <img className='w-20 mx-auto' src={Git} alt="HTML icon" />
                    <p className='my-4'data-aos="fade-up-left" > Git </p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300' >
                    <img className='w-20 mx-auto' src={AntD} alt="HTML icon" />
                    <p className='my-4'data-aos="fade-up-left" > AntD </p>
                </div>

            </div>
        </div>
    </div>
  )
}

  
export default Skills;