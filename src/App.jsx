import './index.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import SocialLinks from './components/SocialLinks';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative flex dark:bg-primary text-primary bg-offwhite dark:text-offgray">
      <NavBar />
      <main className="px-10 mt-20 overflow-auto">
        <Hero />
        {/* <SocialLinks />
        <Portfolio />
        <Experience />
        <Contact />
        <Footer /> */}
      </main>
    </div>
  );
}

export default App;
