import ProjectCard from "./UI/ProjectCard";

const projects = [
  {
    title: "Tunezle",
    description:
      "A Wordle-inspired music game with a piano interface. Features user accounts, stat tracking, and a global leaderboard. Grew to ~1,500 active monthly users and won multiple pitch competitions.",
    imageUrl: "./Tunezle2.0.png",
    icons: ["React", "Tailwind", "Firebase"],
    link: "https://tunezle.com/",
    metric: "~1,500 monthly users",
  },
  {
    title: "Bingocize",
    description:
      "Revitalized a broken web app for nursing home customers — rewrote the React frontend, optimized the Node.js backend, and added real-time Go WebSocket functionality. Improvements led to a contract win with the state of Ohio.",
    imageUrl: null,
    icons: ["React", "Node.js", "Go"],
    link: null,
    metric: "Ohio state contract",
  },
  {
    title: "Aizver",
    description:
      "An AI-powered interactive storytelling app for children. Integrates ElevenLabs for AI voice narration and ChatGPT for dynamic story generation. Deployed across all Pike County libraries.",
    imageUrl: null,
    icons: ["Next.js", "Firebase", "AI"],
    link: null,
    metric: "Deployed in 8+ libraries",
  },
];

const Portfolio = () => {
  return (
    <section className="px-8 md:px-20 lg:px-32 py-24">
      <h2
        id="projects"
        className="font-montserrat text-3xl text-white border-2 border-secondary-100 rounded-lg px-10 py-3 inline-block mb-16"
      >
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            icons={project.icons}
            link={project.link}
            metric={project.metric}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
