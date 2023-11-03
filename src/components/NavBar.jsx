import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdOutlineToggleOff, MdOutlineToggleOn } from 'react-icons/md';
import { Link } from 'react-scroll';
import useLocalStorage from 'use-local-storage';
import { NavLinks } from '../assets/data/data';

function NavBar() {
  const [theme, setTheme] = useLocalStorage('light');
  const [hamburger, setHamburger] = useState(false);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, [theme, setTheme]);

  function handleThemeSwitch() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  function handleHamburger() {
    setHamburger(!hamburger);
  }

  return (
    <header className="fixed z-50 flex items-center justify-between w-full h-20 px-10 shadow-lg dark:bg-primary text-primary bg-offwhite dark:text-offgray">
      <h1 className="text-3xl font-bold ">
        <span className="p-1 font-bold text-white rounded-md bg-accent">Victor</span> Ike
      </h1>

      <div className="z-10 ml-auto mr-4 cursor-pointer text-primary dark:text-offgray">
        {theme === 'dark' ? (
          <MdOutlineToggleOn onClick={handleThemeSwitch} size={40} />
        ) : (
          <MdOutlineToggleOff onClick={handleThemeSwitch} size={40} />
        )}
      </div>
      <nav className="hidden w-full md:flex md:items-center md:w-auto" id="menu" role="menu">
        <ul className="pt-4 space-x-1 text-xl md:flex md:justify-between md:pt-0" id="menu">
          {NavLinks.map(({ id, link }) => {
            return (
              <li
                key={id}
                className="block py-2 font-semibold capitalize duration-200 border-b-2 cursor-pointer md:p-4 text-primary dark:text-offgray border-accent hover:scale-105"
              >
                <Link to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div
        onClick={handleHamburger}
        className="z-10 pr-4 cursor-pointer text-primary dark:text-offgray md:hidden"
      >
        {hamburger ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      <div className="shadow-lg">
        {hamburger && (
          <ul className="absolute left-0 z-10 flex flex-col justify-start w-full pl-6 shadow-xl cursor-pointer md:hidden top-20 bg-offwhite dark:bg-primary">
            {NavLinks.map(({ id, link }) => {
              return (
                <li
                  key={id}
                  className="px-2 py-1 mx-2 text-lg font-semibold capitalize hover:underline hover:decoration-accent "
                >
                  <Link onClick={handleHamburger} to={link} smooth duration={500}>
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </header>
  );
}

export default NavBar;
