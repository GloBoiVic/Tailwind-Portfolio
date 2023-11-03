import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { cn } from '../lib/utils';

const links = [
  {
    id: 1,
    child: (
      <>
        LinkedIn <FaLinkedin size={30} />
      </>
    ),
    href: 'https://www.linkedin.com/in/developing-vic/',
    style: 'rounded-tr-md',
  },
  {
    id: 2,
    child: (
      <>
        Github <FaGithub size={30} />
      </>
    ),
    href: 'https://github.com/GloBoiVic',
    style: 'rounded-tr-md',
  },
  {
    id: 3,
    child: (
      <>
        Mail <HiOutlineMail size={30} />
      </>
    ),
    href: 'mailto:victorike@gmail.com',
  },
  {
    id: 4,
    child: (
      <>
        Resume <BsFillPersonLinesFill size={30} />
      </>
    ),
    href: '/Vike-Resume.pdf',
    style: 'rounded-br-md',
    download: true,
  },
];

function SocialLinks() {
  return (
    <div className="hidden md:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => {
          return (
            <li
              key={id}
              className={cn(
                'flex justify-between items-center w-40 h-14 px-4 dark:bg-info bg-primary ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 font-bold',
                style,
              )}
            >
              <a
                href={href}
                className="flex items-center justify-between w-full text-white"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SocialLinks;
