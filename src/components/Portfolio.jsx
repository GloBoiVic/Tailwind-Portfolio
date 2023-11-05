import { portfolioData } from '../assets/data/data';

function Portfolio() {
  return (
    <section
      name="portfolio"
      className="min-h-screen bg-offwhite dark:border-t-2 dark:border-info dark:bg-primary"
    >
      <div className="container px-10 py-20 md:px-20">
        <div className="flex flex-col justify-center">
          <div>
            <h1 className="inline text-2xl font-bold border-b-4 sm:text-4xl border-accent">
              My Portfolio
            </h1>
            <p className="py-6 text-xl">Check out some of my work</p>
          </div>

          <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 w-fit">
            {portfolioData.map(({ image, svg, name, description, demo, code }) => {
              return (
                <div
                  key={name}
                  className="grid overflow-hidden duration-200 rounded-lg shadow-md dark:shadow-info shadow-primary hover:scale-105 grid-rows-[auto_1fr_auto] border dark:border-info"
                >
                  <div className="px-4 pt-6">
                    <h3 className="flex gap-3 font-bold tracking-wide">
                      <span>
                        <img src={svg} alt="" className="w-6 h-6" />
                      </span>
                      {name}
                    </h3>
                    <p className="my-4 tracking-tight text-offblue">{description}</p>
                  </div>
                  <figure className="">
                    <img src={image} className="object-cover max-w-full" />
                  </figure>
                  <div className="flex items-center justify-center">
                    <button className="w-1/2 px-6 py-3 text-xl font-semibold border hover:underline dark:border-info">
                      <a href={demo} target="_blank" rel="noreferrer">
                        Demo
                      </a>
                    </button>
                    <button className="w-1/2 px-6 py-3 text-xl font-semibold border dark:border-info hover:underline">
                      <a href={code} target="_blank" rel="noreferrer">
                        Code
                      </a>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
