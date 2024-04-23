import React from "react";
import Expense from "../../assets/projects/ExpenseApp2.png";
import Ecom from "../../assets/projects/EcommerceUI2.png";
import Bookstore from "../../assets/projects/Bookstore2.png";


const ProjectsData = [
  {
    id: 1,
    name: "Expense MernApp",
    image: Expense,
    link: "https://expense-app-mern.vercel.app",
    sourceCode: "https://github.com/Dev-Farhana/ExpenseApp-MERN.git",
  },
  {
    id: 2,
    name: "Ecom-Web Clone UI",
    image: Ecom,
    link: "https://ecom-vite-react.vercel.app/",
    sourceCode: "https://github.com/Dev-Farhana/Ecom-ViteReact",
  },
  {
    id: 3,
    name: "Bookstore MernApp",
    image: Bookstore,
    link: "https://bookstore-mern-app-front.vercel.app/",
    sourceCode: "https://github.com/Dev-Farhana/Bookstore-MernApp",
  },
];

const Projects = () => {
  return (
    <>
      <span id="project"></span>
      <div className="dark:bg-black dark:text-white py-14">
        <div className="container">
          <header className="text-center mb-8">
              <h1 className="uppercase text-3xl font-bold">
                Featured Projects
              </h1>
          </header>
          {/* card section */}
          <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-">
              {/* card */}
              {ProjectsData.map(({ id, name, image, link , sourceCode }) => {
              return (
                <>
                  <div className="h-full w-3/4 place-items-center p-3 ">
                    <img src={image} alt="" className="" />
                  </div>
                  <div className="pt-4 space-y-3">
                    <h1 className="text-3xl font-bold text-pink-300	">
                      {name}
                    </h1>
                    <div>
                      <a href={link} className="text-sky-300	 uppercase">
                        Click here for Live View!
                      </a>
                    </div>
                    <div>
                      <a
                        href={sourceCode}
                        className="text-rose-400	 uppercase"
                      >
                        Source Code!
                      </a>
                    </div>
                  </div>
                </>
              );
              })}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Projects;
