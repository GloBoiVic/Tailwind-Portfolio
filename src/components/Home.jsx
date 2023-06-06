import heroImage from '../assets/heroImage.png';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="flex flex-col items-center justify-center h-full max-w-screen-lg px-4 mx-auto md:flex-row gap-x-4">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl font-bold text-white sm:text-6xl">
            Front-End Web Developer
          </h2>
          <p className="py-4 text-xl text-gray-500 ">
            A self-taught developer with a solid foundation in HTML, CSS, and
            JavaScript, I am eager to bring my creativity and problem-solving
            skills to the world of web development.
          </p>
          <div>
            <button className="flex items-center px-6 py-3 my-2 text-xl text-white rounded-md cursor-pointer group bg-gradient-to-r from-cyan-500 to-blue-500 w-fit">
              Portfolio
              <span className="duration-300 group-hover:rotate-90">
                <MdKeyboardDoubleArrowRight size={25} className="ml-md-1" />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={heroImage}
            className="w-2/3 mx-auto rounded-2xl md:w-full "
            alt="my-profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
