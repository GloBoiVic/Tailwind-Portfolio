import "./index.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import SocialLinks from "./components/SocialLinks";
import Portfolio from "./components/portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <SocialLinks />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
