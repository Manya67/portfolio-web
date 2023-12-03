import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";

const Container = () => {
  return (
    <div className="w-4/5 overflow-y-scroll max-h-screen ">
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Container;
