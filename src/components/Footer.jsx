import { FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="flex items-center justify-between w-full h-20 p-10 bg-white border-t-2 shadow-lg dark:border-info dark:text-offgray dark:bg-primary footer text-primary">
        <header>
          <h1 className="m-5 text-3xl font-bold">
            <span className="p-1 font-bold text-white rounded-md bg-accent">
              Victor
            </span>{" "}
            Ike
          </h1>
        </header>

        <div className="text-xl font-semibold ">
          <ul className="flex flex-col gap-4 md:flex-row">
            <li>
              <a
                href="https://www.linkedin.com/in/developing-vic/"
                className="flex gap-2"
              >
                <FaLinkedin size={30} />
              </a>
            </li>
            <li>
              <a href="https://github.com/GloBoiVic" className="flex gap-2">
                <FaGithub size={30} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
