import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Intro";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";

import App from "./App";
import Intro from "./pages/Intro";

import WelcomePage from "./Components/WelcomePage";
import Login from "./pages/Login";
import FooterPage from "./pages/FooterPage";


const App2 = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="Intro" element={<Intro />} />
        <Route path="Login" element={<Login />} />
        <Route path="Home" element={<App />} />
        <Route path="AboutUs" element={<About />} />
        <Route path="Home" element={<Home />} />
        <Route path="ContactUs" element={<ContactUs />} />
      </Routes>
      <FooterPage/>
    </div>
  );
};

export default App2;
