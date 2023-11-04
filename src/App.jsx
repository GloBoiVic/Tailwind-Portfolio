import './index.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex dark:bg-primary text-primary bg-offwhite dark:text-offgray">
      <NavBar />
      <main className="">
        <Hero />
        <Portfolio />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
