import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./WelcomePages/Intro";
import About from "./WelcomePages/About";
import ContactUs from "./WelcomePages/ContactUs";

import App from "./App";
import Intro from "./WelcomePages/Intro";

import WelcomePage from "./Components/WelcomePage";
import Login from "./WelcomePages/Login";
import FooterPage from "./WelcomePages/FooterPage";
import EmailSignature from "./SidebarPages/EmailSignature";
import Dashboard from "./SidebarPages/Dashboard";
import EmailLabel from "./SidebarPages/EmailLabel";
import SetVacation from "./SidebarPages/SetVaction";


const App2 = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="intro" element={<Intro />} />
        <Route path="login" element={<Login />} />
        <Route path="emailSignature" element={<EmailSignature/>}/>
        <Route path="emailLabel" element={<EmailLabel/>}/>
        <Route path="setVacation" element={<SetVacation/>}/>
        <Route path="home" element={<Dashboard />} />
        <Route path="aboutUs" element={<About />} />
        <Route path="contactUs" element={<ContactUs />} />
      </Routes>
      <FooterPage/>
    </div>
  );
};

export default App2;
