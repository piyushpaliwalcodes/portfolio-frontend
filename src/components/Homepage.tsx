import Header from "./Header";
import Mail from "./Mail";
import Social from "./Social";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import AOS from "aos";
const Homepage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: false, // Whether animation should happen only once
      offset: 400, // Start the animation when the element is 400px from the top of the viewport
    });
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, []);
  return (
    <div className="homepage h-full w-[100vw]">
      <Toaster />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Mail />
      <Social />
      <Footer />
    </div>
  );
};

export default Homepage;
