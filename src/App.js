import React from "react";
import { Navigation } from "./components/Navigation";
import { About } from "./components/About";
import Contact from "./components/Contact.js";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div className="px-4">
      <Navigation />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
