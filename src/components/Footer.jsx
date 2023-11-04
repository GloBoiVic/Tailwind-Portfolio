import { FaGithub, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="flex items-center justify-between w-full h-20 px-10 border-t-2 shadow-lg dark:border-info">
      <h1 className="text-2xl font-bold md:text-3xl">
        <span className="p-1 font-bold text-white rounded-md bg-accent">Victor</span> Ike
      </h1>

      <p className="text-lg">© GloBoiVic</p>

      <ul className="flex gap-2">
        <li>
          <a href="https://www.linkedin.com/in/developing-vic/">
            <FaLinkedin className="w-7 h-7" />
          </a>
        </li>
        <li>
          <a href="https://github.com/GloBoiVic">
            <FaGithub className="w-7 h-7" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
