import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function ContactFooter() {
  return (
    <IconContext.Provider value={{ color: "teal", size: "3rem" }}>
      <div className="max-w-screen-xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-start bg-zinc-900 p-10">
            <p className="text-white leading-relaxed text-lg mb-3">
              Feel free to reach out to me at any time.
            </p>
            <button className="text-white text-lg bg-teal-500 rounded-lg w-32">
              <a href="mailto:njandersen22@gmail.com">Contact Me</a>
            </button>
          </div>
          <div className="flex items-center justify-center bg-zinc-900 p-10">
            <a href="https://github.com/njandersen" className="pr-3">
              <FaGithubSquare />
            </a>
            <a href="https://www.linkedin.com/in/nicholas-andersen-962b60121/">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
