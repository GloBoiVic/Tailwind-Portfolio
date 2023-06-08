import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineToggleOn, MdToggleOn } from "react-icons/md";
import { Link } from "react-scroll";
import useLocalStorage from "use-local-storage";

function NavBar() {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  const [theme, setTheme] = useLocalStorage("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      handleToggle();
    } else {
      document.documentElement.classList.remove("dark");
      handleToggle();
    }
  }, [theme]);

  function handleThemeSwitch() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  const [hamburger, setHamburger] = useState(false);

  function handleHamburger() {
    setHamburger(!hamburger);
  }

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "portfolio",
    },
    {
      id: 3,
      link: "experience",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <nav className="fixed z-10 flex items-center justify-between w-full h-20 px-4 shadow-lg text-primary bg-offwhite dark:bg-primary dark:text-offgray">
      <header>
        <h1 className="m-5 text-3xl font-bold">
          <span className="p-1 font-bold text-white rounded-md bg-accent">
            Victor
          </span>{" "}
          Ike
        </h1>
      </header>

      {/* Loop through links array and map them as li tags*/}

      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        id="menu-button"
        className="block w-10 h-10 cursor-pointer md:hidden"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg> */}
      <div className="z-10 pr-4 ml-auto cursor-pointer text-primary dark:text-offgray">
        {toggle ? (
          <MdOutlineToggleOn onClick={handleThemeSwitch} size={40} />
        ) : (
          <MdToggleOn onClick={handleThemeSwitch} size={40} />
        )}
        {/* <MdOutlineToggleOn size={40} /> */}
      </div>
      <div
        className="hidden w-full md:flex md:items-center md:w-auto"
        id="menu"
      >
        <ul
          className="pt-4 space-x-1 text-xl md:flex md:justify-between md:pt-0"
          id="menu"
        >
          {links.map(({ id, link }) => {
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
      </div>

      <div
        onClick={handleHamburger}
        className="z-10 pr-4 cursor-pointer text-primary dark:text-offgray md:hidden"
      >
        {hamburger ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {hamburger && (
        <ul className="absolute left-0 flex items-center justify-start w-full shadow-lg cursor-pointer md:hidden top-20 bg-offwhite dark:bg-primary">
          {links.map(({ id, link }) => {
            return (
              <li
                key={id}
                className="px-2 py-6 mx-2 text-2xl font-semibold capitalize border-b-2 border-accent"
              >
                <Link onClick={handleHamburger} to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
