import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-slate-700 text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p
              className="text-4xl font-bold inline border-b-4 border-rose-600 head"
              data-aos="fade-down"
            >
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-4">
          <div className="text-xl font-bold">
            <p data-aos="fade-right">
              Hello, I'm Farhana, an aspiring junior Web Developer with a strong
              foundation in the MERN (MongoDB, Express.js, React, Node.js)
              stack. Recently completing a comprehensive certificate program in
              MERN stack development, I'm enthusiastic about kickstarting my
              career in the field and continually evolving as a developer.
            </p>
          </div>
          <div className="font-bold">
            <p data-aos="fade-left">
              While my professional experience in web development is limited, my passion for coding, problem-solving, and creating impactful web applications drives me forward. I thrive on continuous learning and am adept at quickly adapting to new technologies, collaborating effectively in team environments, and maintaining a strong work ethic.
              <br />
              As I embark on this exciting journey, I'm actively seeking opportunities with supportive and growth-oriented companies where I can contribute my skills and enthusiasm. I'm
              eager to take on new challenges, gain valuable experience, and contribute to meaningful projects as a Junior Web Developer. If you have any opportunities or would like to discuss how my skills
              and passion align with your organization, I'd be delighted to connect with you.
              <br />
              Let's collaborate to build exceptional web experiences. Thank you
              for visiting my portfolio, and I'm looking forward to the
              opportunity to work with you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


