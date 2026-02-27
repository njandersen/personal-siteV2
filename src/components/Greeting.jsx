import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

export default function Greeting() {
  return (
    <div
      id="hero"
      className="min-h-screen flex flex-col justify-center px-8 md:px-20 lg:px-32 relative overflow-hidden"
    >
      {/* Purple radial glow — top left */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "700px",
          height: "700px",
          top: "-200px",
          left: "-250px",
          background:
            "radial-gradient(circle, rgba(76,29,143,0.45) 0%, transparent 65%)",
          borderRadius: "50%",
        }}
      />
      {/* Cyan radial glow — right side */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "500px",
          height: "500px",
          top: "50%",
          right: "-150px",
          transform: "translateY(-50%)",
          background:
            "radial-gradient(circle, rgba(5,255,231,0.07) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      <div className="max-w-3xl relative z-10">
        <p className="font-montserrat text-accent-100 text-sm mb-5 tracking-widest uppercase">
          Full Stack Software Engineer
        </p>

        <h1
          className="font-montserrat text-white text-6xl md:text-7xl font-bold leading-tight mb-3"
          style={{ textShadow: "0 0 60px rgba(76,29,143,0.6)" }}
        >
          Nicholas
          <br />
          Andersen
        </h1>

        {/* Shimmer gradient underline */}
        <div className="shimmer-bar mb-8" style={{ maxWidth: "340px" }} />

        <p className="font-hind text-gray-300 text-lg max-w-xl mb-10 leading-relaxed">
          Full stack engineer with 2+ years of professional experience at Bit
          Source, building and shipping production applications. Focused on
          performance, UX, and measurable business impact.
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-12">
          <ScrollLink to="experience" smooth={true} duration={500}>
            <button className="btn-glow bg-accent-100 text-primary-300 font-montserrat font-bold text-base px-8 py-3 rounded-md hover:opacity-90 transition-opacity cursor-pointer">
              View Work
            </button>
          </ScrollLink>
          <Link to="/resume">
            <button className="border-2 border-accent-100 text-accent-100 font-montserrat font-bold text-base px-8 py-3 rounded-md hover:bg-accent-100 hover:text-primary-300 transition-colors hover:shadow-[0_0_20px_rgba(5,255,231,0.4)]">
              Resume
            </button>
          </Link>
        </div>

        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/njandersen22/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:drop-shadow-[0_0_8px_rgba(5,255,231,0.7)] transition-all"
          >
            <FaLinkedin size={36} color="#05FFE7" />
          </a>
          <a
            href="https://github.com/njandersen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:drop-shadow-[0_0_8px_rgba(5,255,231,0.7)] transition-all"
          >
            <FaGithubSquare size={36} color="#05FFE7" />
          </a>
        </div>
      </div>
    </div>
  );
}
