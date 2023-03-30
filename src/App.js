import About from "./components/Landingpage/About";
import Contacts from "./components/Landingpage/Contacts";
import Footer from "./components/Landingpage/Footer";
import LandingPage from "./components/Landingpage/landing page";
import Navbar from "./components/Landingpage/Navbar";
function App() {
  return (
    <div className="App">
      <>
      <Navbar />
      <LandingPage />
      <About />
      <Contacts />
      <Footer />
      </>
    </div>
  );
}

export default App;
