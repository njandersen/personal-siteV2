/* eslint-disable react/prop-types */
import { FaReact, FaNodeJs } from "react-icons/fa";
import { TbBrandTailwind, TbBrandNextjs } from "react-icons/tb";
import { SiFirebase } from "react-icons/si";

export default function ProjectCard({
  title,
  description,
  imageUrl,
  link,
  icons,
}) {
  const getIconComponent = (iconName) => {
    switch (iconName) {
      case "React":
        return <FaReact size={48} color="#447EF2" />;
      case "Tailwind":
        return <TbBrandTailwind size={48} color="#447EF2" />;
      case "Firebase":
        return <SiFirebase size={48} color="#447EF2" />;
      case "Next.js":
        return <TbBrandNextjs size={48} color="#447EF2" />;
      case "Node.js":
        return <FaNodeJs size={48} color="#447EF2" />;
      default:
        return null;
    }
  };
  return (
    <div className="max-w-[846px] max-h-[507px] bg-white rounded-lg">
      <img
        className="max-w-[849px] max-h-[320px] w-full rounded-lg"
        src={imageUrl}
        alt="project"
      />
      <div className="flex flex-col justify-end">
        <h2 className="text-3xl font-montserrat mb-3 ml-2">{title}</h2>
        <p className="font-hind ml-2">{description}</p>
        <div className="flex justify-between ml-1">
          {/* Use the map method to render each icon component */}
          <div className="flex">
            {icons.map((iconName, index) => (
              <div className="mr-3" key={index}>
                {getIconComponent(iconName)}
              </div>
            ))}
          </div>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="border-2 border-primary-100 px-3 py-1 rounded-lg mt-2 mr-4">
              Visit
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
