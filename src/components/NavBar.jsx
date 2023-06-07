import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function NavBar() {
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
    <nav className="fixed flex items-center justify-between w-full h-20 px-4 text-primary bg-gray shadow-lg">
      <header>
        <h1 className="m-5 text-3xl font-bold">
          <span className="bg-accent rounded-md p-1 text-white font-bold">
            Victor
          </span>{" "}
          Ike
        </h1>
      </header>

      {/* Loop through links array and map them as li tags*/}

      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        id="menu-button"
        className="h-10 w-10 cursor-pointer md:hidden block"
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
      <div
        className="hidden w-full md:flex md:items-center md:w-auto"
        id="menu"
      >
        <ul
          className="pt-4 text-gray-700
          md:flex
          md:justify-between 
          md:pt-0 space-x-1 text-xl"
          id="menu"
        >
          {links.map(({ id, link }) => {
            return (
              <li
                key={id}
                className="md:p-4 py-2 block text-primary border-b-2 border-accent font-semibold capitalize duration-200 cursor-pointer hover:scale-105"
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
        className="z-10 pr-4 text-primary cursor-pointer md:hidden"
      >
        {hamburger ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {hamburger && (
        <ul className="md:hidden flex justify-start items-center cursor-pointer absolute top-20 left-0 w-full bg-gray shadow-lg ">
          {links.map(({ id, link }) => {
            return (
              <li
                key={id}
                className="px-2 mx-2 py-6 text-2xl border-b-2 border-accent font-semibold capitalize"
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
