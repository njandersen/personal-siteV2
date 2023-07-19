import {
  SiJavascript,
  SiFirebase,
  SiPrisma,
  SiPostgresql,
} from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3, TbBrandTailwind, TbBrandNextjs } from "react-icons/tb";
import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";

export default function Skills() {
  return (
    <div className="flex flex-col items-center justify-center mt-36 ">
      <h2 className="px-10 py-3 font-montserrat text-3xl text-white border-2 border-secondary-100 rounded-lg">
        Tech
      </h2>
      <div className="mt-20 flex space-x-2 md:space-x-10 flex-wrap">
        <div className="flex flex-col items-center">
          <SiJavascript size={48} color="#447EF2" />
          <p className="font-hind text-white pt-2">JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <AiOutlineHtml5 size={48} color="#447EF2" />
          <p className="font-hind text-white pt-2">HTML</p>
        </div>
        <div className="flex flex-col items-center">
          <TbBrandCss3 size={48} color="#447EF2" />
          <p className="font-hind text-white pt-2">CSS</p>
        </div>
        <div className="flex flex-col items-center">
          <FaReact size={48} color="#447EF2" />
          <p className="font-hind text-white pt-2">React</p>
        </div>
        <div className="flex flex-col items-center">
          <TbBrandNextjs size={48} color="#447EF2" />
          <p className="font-hind text-white pt-2">Next.js</p>
        </div>
        <div className="flex flex-col items-center">
          <TbBrandTailwind size={48} color="#447EF2" />
          <p className="font-hind text-white pt-2">Tailwind</p>
        </div>
        <div className="flex flex-col items-center">
          <FaNodeJs size={48} color="#447EF2" />
          <p className="font-hind text-white pt-2">Node.js</p>
        </div>
        <div className="flex flex-col items-center">
          <SiPrisma size={48} color="#447EF2" />
          <p className="font-hind text-white pt-2">Prisma</p>
        </div>
        <div className="flex flex-col items-center">
          <SiPostgresql size={48} color="#447EF2" />
          <p className="font-hind text-white pt-2">PostgreSQL</p>
        </div>
        <div className="flex flex-col items-center">
          <SiFirebase size={48} color="#447EF2" />
          <p className="font-hind text-white pt-2">Firebase</p>
        </div>
        <div className="flex flex-col items-center">
          <FaFigma size={48} color="#447EF2" />
          <p className="font-hind text-white pt-2">Figma</p>
        </div>
      </div>
    </div>
  );
}
