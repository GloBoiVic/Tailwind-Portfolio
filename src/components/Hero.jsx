import { Link } from "react-scroll";
import heroImage from "../assets/heroImage.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      name="home"
      className="w-full min-h-screen p-10 pt-40 hero md:pt-10 text-primary dark:bg-primary"
    >
      <div className="flex flex-col items-center justify-center h-[60rem] max-w-screen-xl px-4 mx-auto md:flex-row md:gap-10">
        <div className="flex flex-col justify-center">
          <TypeAnimation
            sequence={[
              "Web Developer",
              1000,
              "Programmer",
              1000,
              "Gym Enthusiast",
              1000,
            ]}
            speed={50}
            className="text-2xl font-bold text-primary whitespace-nowrap dark:text-offgray md:text-5xl"
            repeat={Infinity}
          />

          <p className="py-4 mt-8 text-2xl text-gray-400">
            A self-taught developer with a solid foundation in HTML, CSS, and
            JavaScript, I am eager to bring my creativity and problem-solving
            skills to the world of web development.
          </p>
          <div className="mb-12">
            <Link
              to="portfolio"
              smooth
              duration={700}
              className="flex items-center px-6 py-3 my-2 text-xl text-white transition-all duration-700 rounded-md cursor-pointer hover:scale-125 group hover:bg-info bg-primary dark:bg-accent w-fit dark:text-offgray"
            >
              Portfolio
              <span className="duration-300 group-hover:rotate-90">
                <MdKeyboardDoubleArrowRight size={25} className="ml-md-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={heroImage}
            className="w-full mx-auto rounded-2xl "
            alt="my-profile"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
