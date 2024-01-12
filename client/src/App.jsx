import './App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/global-components/nav-bar/NavBar";
import Footer from "./components/global-components/footer/Footer";
import Home from "./views/Home";
import About from "./views/About";
import Services from "./views/Services";
import Contact from "./views/Contact";


function App() {
  return (
    <>
      <div className="App container mx-auto ">
        <div>
          <NavBar></NavBar>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
