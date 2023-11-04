import { Link } from 'react-scroll';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="min-h-screen px-10 py-20 bg-white dark:bg-primary md:px-20">
      <div className="flex flex-col gap-8 mt-20 md:mt-60 md:flex-row">
        <div className="grow">
          <TypeAnimation
            sequence={['Developer', 1000, 'Programmer', 1000, 'Gym Enthusiast', 1000]}
            speed={50}
            className="text-4xl font-bold text-primary whitespace-nowrap dark:text-offgray md:text-5xl lg:text-6xl"
            repeat={Infinity}
          />
          <p className="mt-8 text-lg tracking-tighter text-offblue md:text-xl">
            I am a passionate Full Stack Developer with a strong proficiency in the MERN (MongoDB,
            Express, React, Node.js) stack. I&apos;m committed to delivering high-quality,
            efficient, and user-centric applications; ready to embark on new and exciting challenges
            in the ever-evolving world of technology.
          </p>
          <Link
            to="portfolio"
            smooth
            duration={700}
            className="flex items-center px-4 py-2 mt-6 text-lg text-white transition-all duration-700 rounded-md cursor-pointer md:text-xl hover:scale-110 group hover:bg-info bg-primary dark:bg-accent w-fit dark:text-offgray"
          >
            Portfolio
            <span className="duration-300 group-hover:rotate-90">
              <MdKeyboardDoubleArrowRight size={25} />
            </span>
          </Link>
        </div>
        <div className="md:self-center">
          <img
            src="heroImage.png"
            className="object-cover max-w-full rounded-xl"
            alt="my-profile"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
