import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-slate-700 text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-rose-600 head'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-xl font-bold'>
              <p>Hello, I'm Farhana! It's a pleasure to meet you. Take a moment to explore my portfolio.</p>
            </div>
            <div>
              <p>I'm a passionate MERN stack developer with a fresh perspective and a keen eye for turning ideas into reality. 
                My expertise lies in crafting responsive and dynamic web applications that not only meet but exceed expectations.
                Having recently delved into the MERN (MongoDB, Express.js, React, Node.js) stack, I bring a contemporary approach to web development.
               I enjoy tackling complex challenges head-on and transforming them into elegant and efficient solutions.
                Let's create something amazing together! <br />
                 Join me on this coding adventure, and together, we'll bring your ideas to life. </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;