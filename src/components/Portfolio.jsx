import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import ProjectCard from "./UI/ProjectCard";

const projects = [
  {
    title: "Tunezle",
    description:
      "A wordle like game where users can use the piano to guess the current melody of the day. Users can sign up and track their stats as well see a leaderboard of top players. Built during my internship",
    imageUrl: "./Tunezle2.0.png",
    icons: ["React", "Tailwind", "Firebase"],
    link: "https://tunezle.com/",
  },
  {
    title: "Guardian Dispatch",
    description:
      "A social site for the Destiny 2 community to share their favorite builds. Users can sign up and create posts as well as comment on other posts.",
    imageUrl: "./guardian-dispatch.png",
    icons: ["Next.js", "Tailwind", "Firebase"],
    link: "https://guardian-dispatch.vercel.app/",
  },
  {
    title: "Loop Chat - Twitter Clone",
    description: "A basic twitter clone made with Next.js and TRPC.",
    imageUrl: "./LoopChat.png",
    icons: ["Next.js", "Tailwind"],
    link: "https://loopchatio.vercel.app/",
  },
];

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const handleNextProject = () => {
    setCurrentProject((prevProject) =>
      prevProject === projects.length - 1 ? 0 : prevProject + 1
    );
  };

  const handlePrevProject = () => {
    setCurrentProject((prevProject) =>
      prevProject === 0 ? projects.length - 1 : prevProject - 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center mt-36">
      <h2
        id="projects"
        className="px-10 py-3 font-montserrat text-3xl text-white border-2 border-secondary-100 rounded-lg"
      >
        Projects
      </h2>
      <div className="mt-32 relative w-full max-w-xl">
        <div className="carousel-wrapper">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${
                index === currentProject ? "active" : "inactive"
              }`}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                icons={project.icons}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 flex ">
        <button className="prev-button pr-32 " onClick={handlePrevProject}>
          <FaChevronLeft size={48} color="#447EF2" />
        </button>
        <button className="next-button " onClick={handleNextProject}>
          <FaChevronRight size={48} color="#447EF2" />
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
