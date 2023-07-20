import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/UI/Navbar";
import Portfolio from "./components/Portfolio";
import About from "./pages/About";
import Skills from "./pages/Skills";
import ContactFooter from "./pages/ContactFooter";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

function App() {
  return (
    <BrowserRouter>
      <div className="relative" id="blob">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<ContactFooter />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
