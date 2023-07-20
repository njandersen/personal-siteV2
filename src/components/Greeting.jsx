import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

/* eslint-disable react/no-unescaped-entities */
export default function Greeting() {
  return (
    <div className="flex flex-col md:flex-row justify-center" id="about">
      <div className="mt-52">
        <div className="ml-5 md:ml-0">
          <h3 className="font-montserrat text-white text-2xl">Hello There.</h3>
          <h1 className="font-montserrat text-white text-5xl">I'm Nicholas,</h1>
          <h3 className="font-montserrat text-white text-2xl">
            A Front End Engineer.
          </h3>
          <p className="font-hind text-white mt-8 max-w-md">
            I’m a Comp Sci grad with a passion for all things software and
            design. I’m fluent with both front end and back end infrastructures
            and have recently begun fleshing out my design skills. I am always
            seeking new challenges and opportunities. Feel free to reach out!
          </p>
          <div className="flex items-center">
            <ScrollLink
              to={"contact"}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <button className="bg-accent-100 text-primary-300 font-montserrat text-xl px-8 py-3 mt-8 rounded-md">
                Lets Talk!
              </button>
            </ScrollLink>

            <div className="mt-10 ml-10 flex">
              <a
                href="https://www.linkedin.com/in/njandersen22/"
                className="mr-10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={48} color="#05FFE7" />
              </a>
              <a
                href="https://github.com/njandersen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithubSquare size={48} color="#05FFE7" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src="Avatar.svg" alt="Avatar" />
      </div>
    </div>
  );
}
