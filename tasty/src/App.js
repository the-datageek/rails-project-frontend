import About from "./components/Landingpage/About/About"
import Contacts from "./components/Landingpage/Contact/Contacts";
import Footer from "./components/Landingpage/Footer";
import LandingPage from "./components/Landingpage/Landing/landingpage";
import Navbar from "./components/Landingpage/Navbar/Navbar";
import './App.css'
import Meal from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <>

      {/* <Navbar />
      <LandingPage />
      <About/>
      <Contacts />
      <Footer /> */}
      <Meal />
      </>
    </div>
  );
}

export default App;
