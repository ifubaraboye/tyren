import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {

  const [openSections, setOpenSections] = useState({
    about: false,
    programs: false,
    involved: false,
    lens: false,
    stories: false
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div>
      <Navbar />
<Outlet />
          <Footer />
    </div>
  );
}

export default App;
