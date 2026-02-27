const projects = [
  {
    name: "Tunezle",
    description:
      "Music game with a piano interface, user accounts, and a global leaderboard.",
    metric: "~1,500 monthly users",
    tags: ["React", "Firebase", "Tailwind"],
  },
  {
    name: "Bingocize",
    description:
      "Revitalized a broken web app for nursing home customers — rewrote the React frontend, optimized Node.js backend, and added real-time Go WebSocket functionality.",
    metric: "Ohio state contract",
    tags: ["React", "Node.js", "Go"],
  },
  {
    name: "Aizver",
    description:
      "AI-powered interactive storytelling app for children, integrating ElevenLabs voice narration and ChatGPT story generation.",
    metric: "Deployed in 8+ libraries",
    tags: ["Next.js", "Firebase", "AI"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-8 md:px-20 lg:px-32 py-24 relative overflow-hidden">
      {/* Ambient purple glow behind section */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "600px",
          height: "400px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(ellipse, rgba(76,29,143,0.2) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10">
        <h2 className="font-montserrat text-3xl text-white border-2 border-secondary-100 rounded-lg px-10 py-3 inline-block mb-16"
          style={{ boxShadow: "0 0 20px rgba(72,133,255,0.2)" }}
        >
          Experience
        </h2>

        <div className="relative border-l-2 border-primary-100/60 pl-8 ml-2">
          {/* Timeline dot */}
          <div
            className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent-100"
            style={{ boxShadow: "0 0 12px rgba(5,255,231,0.8)" }}
          />

          <div className="mb-4">
            <div className="flex flex-wrap items-baseline gap-3 mb-1">
              <h3 className="font-montserrat text-2xl text-white font-bold">
                Software Engineer &amp; Lead Developer
              </h3>
              <span className="font-montserrat text-accent-100 text-sm font-semibold tracking-wide uppercase">
                Bit Source
              </span>
            </div>
            <p className="font-hind text-gray-400 text-sm mb-1">
              March 2023 – Present · Pikeville, KY
            </p>
            <ul className="font-hind text-gray-300 mt-4 space-y-2 list-disc list-inside">
              <li>
                Optimized CI/CD pipeline with GitHub Actions →{" "}
                <span className="text-accent-100 font-semibold">30% faster deploys</span>{" "}
                and{" "}
                <span className="text-accent-100 font-semibold">20% fewer incidents</span>
              </li>
              <li>
                Led Agile adoption across the team — sprints, standups, and retros
              </li>
            </ul>
          </div>

          {/* Project cards */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.name}
                className="bg-primary-100/20 border border-primary-100/40 rounded-xl p-6 transition-all duration-300 hover:border-accent-100/60 cursor-default"
                style={{ transition: "box-shadow 0.3s ease, border-color 0.3s ease" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 0 30px rgba(5,255,231,0.12), 0 0 60px rgba(5,255,231,0.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <h4 className="font-montserrat text-white text-lg font-bold mb-2">
                  {project.name}
                </h4>
                <span
                  className="inline-block bg-accent-100/10 text-accent-100 text-xs font-montserrat font-semibold px-3 py-1 rounded-full mb-3"
                  style={{ boxShadow: "0 0 10px rgba(5,255,231,0.15)" }}
                >
                  {project.metric}
                </span>
                <p className="font-hind text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-montserrat text-secondary-100 bg-secondary-100/10 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
