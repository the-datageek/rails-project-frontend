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

function App() {
  return (
    <div className="App">


      <div>
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
         
      </div>
    
    </div>
  )
}

export default App


