import { techStack } from '../assets/data/data';

const Experience = () => {
  return (
    <section className="min-h-screen px-10 py-20 bg-white dark:border-t-2 md:px-20 dark:border-info dark:bg-primary">
      <div className="flex flex-col justify-center">
        <div>
          <p className="inline text-2xl font-bold border-b-4 sm:text-4xl border-accent">
            Experience
          </p>
          <p className="py-6 text-xl">My Tech Stack</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {techStack.map(({ svg, title, style }) => {
            return (
              <div
                key={title}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={svg} className="w-20" alt="" />
                <p className="mt-4">{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
