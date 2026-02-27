import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/UI/Navbar";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

function App() {
  return (
    <BrowserRouter>
      <div className="relative" id="blob">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
