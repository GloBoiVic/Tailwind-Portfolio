import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
  const techStack = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-html",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-orange-500",
    },
    {
      id: 5,
      src: github,
      title: "Github",
      style: "shadow-gray-400",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
  ];
  return (
    <section name="experience" className="w-full text-primary h-screen p-10">
      <div className="max-w-screen-lg  mx-auto flex flex-col justify-center">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-accent">
            Experience
          </p>
          <p className="py-6 text-2xl">My Tech Stack</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-col-3 gap-8 text-center py-5 px-12 sm:px-0 ">
          {techStack.map(({ id, src, title, style }) => {
            return (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-primary ${style}`}
              >
                <img src={src} className="w-20 mx-auto" alt="" />
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
