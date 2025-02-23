import { BrowserRouter } from "react-router-dom";

import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from "./components";  
import { Stars } from "@react-three/drei";
import Skills from "./components/skills/skills";
const App = () => {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
      <Navbar />
      <Hero />
      </div>
      <About />
      <Skills />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
      <Contact />
      <StarsCanvas />
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
