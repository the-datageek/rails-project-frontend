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
  const [token, setToken] = useState([])
  if (!token){
    return<LandingPage setToken={setToken}/>
  }
  console.log(">>>>> token")
  console.log(token)
  return (
    <div className="App">


      <>
        <Navbar />
        <div>
          <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/landingpage" element={<LandingPage/>}/>
                <Route path="/recipes" element={<Meal/>}/>
                <Route path="/myrecipes" element={<Myrecipe/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contacts/>}/>
                


            </Routes>
        {/* <Footer /> */}
        </div>
         
      </>
    
    </div>
  )
}

export default App


