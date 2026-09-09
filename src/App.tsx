import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Experience from "./components/Experience/Experience";
import Education from "./components/education/Education";
import Certificates from "./components/certificates/Certificates";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <Experience /> */}
      <Education />
      <Certificates />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;