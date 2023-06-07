import { Link } from "react-scroll";
import heroImage from "../assets/heroImage.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      name="home"
      className="w-full pt-40 md:pt-10 text-primary h-screen p-10"
    >
      <div className="flex flex-col items-center justify-center h-[60rem] max-w-screen-lg px-4 mx-auto md:flex-row md:gap-10">
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
            className="text-9xl font-bold text-primary sm:text-6xl"
            repeat={Infinity}
          />

          <p className="mt-8 py-4 text-2xl text-offblue">
            A self-taught developer with a solid foundation in HTML, CSS, and
            JavaScript, I am eager to bring my creativity and problem-solving
            skills to the world of web development.
          </p>
          <div className="mb-12">
            <Link
              to="portfolio"
              smooth
              duration={700}
              className="flex items-center px-6 py-3 my-2 text-xl text-white rounded-md cursor-pointer group bg-primary w-fit font-semibold"
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
            className="mx-auto rounded-2xl w-full "
            alt="my-profile"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
