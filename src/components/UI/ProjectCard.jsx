/* eslint-disable react/prop-types */
import { FaReact, FaNodeJs } from "react-icons/fa";
import { TbBrandTailwind, TbBrandNextjs } from "react-icons/tb";
import { SiFirebase, SiGo } from "react-icons/si";

const getIconComponent = (iconName) => {
  switch (iconName) {
    case "React":
      return <FaReact size={28} color="#4885FF" />;
    case "Tailwind":
      return <TbBrandTailwind size={28} color="#4885FF" />;
    case "Firebase":
      return <SiFirebase size={28} color="#4885FF" />;
    case "Next.js":
      return <TbBrandNextjs size={28} color="#4885FF" />;
    case "Node.js":
      return <FaNodeJs size={28} color="#4885FF" />;
    case "Go":
      return <SiGo size={28} color="#4885FF" />;
    case "AI":
      return (
        <span className="text-xs font-montserrat font-bold text-secondary-100 border border-secondary-100 px-2 py-0.5 rounded">
          AI
        </span>
      );
    default:
      return null;
  }
};

export default function ProjectCard({
  title,
  description,
  imageUrl,
  link,
  icons,
  metric,
}) {
  return (
    <div className="bg-primary-100/20 border border-primary-100/40 rounded-xl overflow-hidden flex flex-col hover:border-accent-100/50 hover:shadow-lg hover:shadow-accent-100/5 transition-all">
      {/* Image or gradient placeholder */}
      {imageUrl ? (
        <img
          className="w-full h-48 object-cover"
          src={imageUrl}
          alt={title}
        />
      ) : (
        <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
          <span className="font-montserrat text-white text-2xl font-bold opacity-40">
            {title}
          </span>
        </div>
      )}

      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between mb-2">
          <h2 className="font-montserrat text-white text-xl font-bold">
            {title}
          </h2>
          {metric && (
            <span className="ml-2 shrink-0 bg-accent-100/10 text-accent-100 text-xs font-montserrat font-semibold px-3 py-1 rounded-full">
              {metric}
            </span>
          )}
        </div>

        <p className="font-hind text-gray-300 text-sm leading-relaxed flex-1 mb-6">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {icons.map((iconName, index) => (
              <div key={index}>{getIconComponent(iconName)}</div>
            ))}
          </div>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button className="border-2 border-accent-100 text-accent-100 font-montserrat text-sm px-4 py-1.5 rounded-lg hover:bg-accent-100 hover:text-primary-300 transition-colors">
                Visit
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
