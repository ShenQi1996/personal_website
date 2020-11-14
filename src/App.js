import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
