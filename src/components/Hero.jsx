import { Link } from 'react-scroll';
import { MdOutlineDownload } from 'react-icons/md';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const onResumeButtonClick = () => {
    const pdfUrl = 'Vike-Resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = "Victor Ike's resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section name="home" className="w-full bg-white dark:bg-primary">
      <div className="container flex items-center justify-center min-h-screen px-10 py-20 md:px-20">
        <div className="flex flex-col gap-8 mt-20 md:flex-row md:mt-0">
          <div className="grow">
            <TypeAnimation
              sequence={['Developer', 1000, 'Programmer', 1000, 'Gym Enthusiast', 1000]}
              speed={50}
              className="text-4xl font-bold text-primary whitespace-nowrap dark:text-offgray md:text-5xl lg:text-6xl"
              repeat={Infinity}
            />
            <p className="mt-8 text-lg tracking-tighter text-offblue md:text-xl">
              I am a passionate Full-Stack JavaScript Developer with a strong proficiency in the
              MERN (MongoDB, Express, React, Node.js) stack. I&apos;m committed to delivering
              high-quality, efficient, and user-centric applications. I am ready to embark on new
              and exciting challenges in the ever-evolving world of technology; let's work!
            </p>
            <button
              className="flex items-center px-4 py-2 mt-6 text-lg text-white transition-all duration-700 rounded-md cursor-pointer md:text-xl hover:scale-110 group hover:bg-info bg-primary dark:bg-accent w-fit dark:text-offgray"
              onClick={onResumeButtonClick}
            >
              See my resume
              <span>
                <MdOutlineDownload className="w-6 h-6" />
              </span>
            </button>
          </div>
          <div className="self-center">
            <img
              loading="lazy"
              src="heroImage.png"
              className="object-cover max-w-full rounded-xl"
              alt="my-profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
