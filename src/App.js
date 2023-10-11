import React from "react";
import "./App.css";
import { Route, Routes , Redirect } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Education from "./Components/Education";
import Experince from "./Components/Experince";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import User from "./Components/User";
import Search from "./Components/Search";
import Error from "./Components/Error";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/Education" element={<Education name="Education" />} />
        <Route exact path="/Experince" element={<Experince name="Experience" />} />
        <Route exact path="/About" element={<About name="About" />} />
        <Route exact path="/Contact" element={<Contact name="Contact" />} />
        <Route exact path="/Search" element={<Search name="Search" />} />
        <Route path="/User/:fname/:lname" Component={()=> <User/>} />
        <Route path="*" element={<Home/>} />
        {/* <Redirect to="/" /> */}
      </Routes>
      <Footer /> 
    </>
  );
}

export default App;
