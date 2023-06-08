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
      className="w-full min-h-screen p-10 dark:border-t-2 bg-offwhite dark:text-offgray dark:bg-primary dark:border-info text-primary"
    >
      <div className="flex flex-col justify-center max-w-screen-xl mx-auto">
        <div className="">
          <h1 className="inline text-4xl font-bold border-b-4 border-accent">
            My Portfolio
          </h1>
          <p className="py-6 text-2xl">Check out some of my work</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-col-3 ">
          {porfolios.map(({ id, src }) => {
            return (
              <div
                key={id}
                className="duration-200 rounded-lg shadow-md dark:shadow-info shadow-primary hover:scale-105"
              >
                <img src={src} alt="" className="rounded-md " />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 text-xl font-semibold duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 text-xl font-semibold duration-200 hover:scale-105">
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
