<<<<<<< HEAD
import { useState } from "react";
import About from "./components/Landingpage/About/About"
import Contacts from "./components/Landingpage/Contact/Contacts";
import Footer from "./components/Landingpage/Footer";
import LandingPage from "./components/Landingpage/Landing/landingpage";
import Navbar from "./components/Landingpage/Navbar/Navbar";
import './App.css'
import Meal from "./components/Home/Home";
import { Myrecipe } from "./components/MyRecipe/myrecipe";
import { Profile } from "./components/Profile/Profile";
import {Routes, Route} from 'react-router-dom'
=======
import logo from './logo.svg';
import './App.css';
>>>>>>> main

function App() {
  return (
    <div className="App">
<<<<<<< HEAD

      <>
        <Navbar />
        <div>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/recipes" element={<Meal/>}/>
                <Route path="/myrecipes" element={<Myrecipe/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contacts/>}/>
                


            </Routes>
        {/* <Footer /> */}
        </div>
         

      {/* <Navbar />
      <LandingPage />
      <About/>
      <Contacts />
      <Footer /> */}
      {/* <Meal /> */}
      {/* <Myrecipe/>
       */}
      {/* <Profile /> */}
      </>
=======
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> main
    </div>
  );
}

export default App;
