import "./index.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import SocialLinks from "./components/SocialLinks";
import Portfolio from "./components/portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <SocialLinks />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
