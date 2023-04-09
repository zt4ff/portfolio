import React from "react";
import { Navigation } from "./components/Navigation";
import { About } from "./components/About";
import Contact from "./components/Contact.js";

function App() {
  return (
    <div className="px-4">
      <Navigation />
      <About />
      <Contact />
    </div>
  );
}

export default App;
