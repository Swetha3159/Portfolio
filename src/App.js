import { useState, useEffect } from "react";
import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import Home from "./containers/home";
import About from "./containers/about";
import Contact from "./containers/contact";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import Resume from "./containers/resume";
import Navbar from "./components/navBar";
import particles from "./utils/particles";
function App() {
  const location = useLocation();

  const [init, setInit] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  const renderParticleJsInHomePage = location.pathname === "/";

  return (
    <div className="App">
      {init && renderParticleJsInHomePage && (
        <Particles
          id="particles"
          particlesLoaded={particlesLoaded}
          options={particles}
        />
      )}
      {/* navbar */}
      <Navbar />
      {/* main page content */}
      <div className="App__main_page_content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
