import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const porfolios = [
    {
      id: 1,
      src: arrayDestruct,
    },
    {
      id: 2,
      src: reactParallax,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactSmooth,
    },
    {
      id: 5,
      src: installNode,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];
  {
    /*  TODO Add link functionality to card*/
  }
  return (
    <section
      name="portfolio"
      className="bg-offwhite w-full text-primary min-h-screen p-10"
    >
      <div className="max-w-screen-lg  mx-auto flex flex-col justify-center">
        <div className="">
          <h1 className="text-4xl font-bold inline border-b-4 border-accent">
            My Portfolio
          </h1>
          <p className="py-6 text-2xl">Check out some of my work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-col-3 gap-8 ">
          {porfolios.map(({ id, src }) => {
            return (
              <div
                key={id}
                className="shadow-md shadow-primary rounded-lg duration-200 hover:scale-105"
              >
                <img src={src} alt="" className="rounded-md " />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 font-semibold text-xl">
                    Demo
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 font-semibold text-xl">
                    Code
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
