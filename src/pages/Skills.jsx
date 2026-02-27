import {
  SiJavascript,
  SiTypescript,
  SiFirebase,
  SiPostgresql,
  SiGo,
  SiDocker,
} from "react-icons/si";
import { TbBrandTailwind, TbBrandNextjs } from "react-icons/tb";
import { FaReact, FaNodeJs, FaFigma, FaAws, FaJava } from "react-icons/fa";
import { VscGithubAction } from "react-icons/vsc";

const iconColor = "#4885FF";
const iconSize = 40;

const skillGroups = [
  {
    label: "Frontend",
    skills: [
      { name: "JavaScript", icon: <SiJavascript size={iconSize} color={iconColor} /> },
      { name: "TypeScript", icon: <SiTypescript size={iconSize} color={iconColor} /> },
      { name: "React", icon: <FaReact size={iconSize} color={iconColor} /> },
      { name: "Next.js", icon: <TbBrandNextjs size={iconSize} color={iconColor} /> },
      { name: "Tailwind", icon: <TbBrandTailwind size={iconSize} color={iconColor} /> },
      { name: "Figma", icon: <FaFigma size={iconSize} color={iconColor} /> },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Go", icon: <SiGo size={iconSize} color={iconColor} /> },
      { name: "Node.js", icon: <FaNodeJs size={iconSize} color={iconColor} /> },
      { name: "Java", icon: <FaJava size={iconSize} color={iconColor} /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={iconSize} color={iconColor} /> },
      { name: "Firebase", icon: <SiFirebase size={iconSize} color={iconColor} /> },
    ],
  },
  {
    label: "DevOps",
    skills: [
      { name: "GitHub Actions", icon: <VscGithubAction size={iconSize} color={iconColor} /> },
      { name: "AWS", icon: <FaAws size={iconSize} color={iconColor} /> },
      { name: "Docker", icon: <SiDocker size={iconSize} color={iconColor} /> },
    ],
  },
];

export default function Skills() {
  return (
    <section className="px-8 md:px-20 lg:px-32 py-24 relative overflow-hidden">
      {/* Ambient cyan glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "500px",
          height: "300px",
          bottom: "0",
          right: "0",
          background:
            "radial-gradient(ellipse, rgba(5,255,231,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10">
        <h2
          id="skills"
          className="font-montserrat text-3xl text-white border-2 border-secondary-100 rounded-lg px-10 py-3 inline-block mb-16"
          style={{ boxShadow: "0 0 20px rgba(72,133,255,0.2)" }}
        >
          Skills
        </h2>

        <div className="space-y-12">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="font-montserrat text-accent-100 text-xs tracking-widest uppercase mb-6">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-8">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-2 transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(72,133,255,0.8)] cursor-default"
                  >
                    {skill.icon}
                    <p className="font-hind text-gray-300 text-sm">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
