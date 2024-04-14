import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Projects from "./components/Projects/Projects";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 200,
    });
  }, []);

  return (
    <>
      <Navbar/>
      <Home/>
      <About />
      <Skills />
      <Work />
      <Projects/>
    </>
  )
}

export default App
