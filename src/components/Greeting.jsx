import LinkedinIcon from "./SVG/LinkedinIcon";

/* eslint-disable react/no-unescaped-entities */
export default function Greeting() {
  return (
    <div className="flex flex-col md:flex-row justify-center">
      <div className="mt-52">
        <div className="ml-5 md:ml-0">
          <h3 className="font-montserrat text-white text-2xl">Hello There.</h3>
          <h1 className="font-montserrat text-white text-5xl">I'm Nicholas,</h1>
          <h3 className="font-montserrat text-white text-2xl">
            A Front End Engineer.
          </h3>
          <p className="font-hind text-white mt-8 max-w-md">
            I’m Nicholas, Front End Engineer with a passion for all things
            software and design. I’m fluent with both front end and back end
            infrastructures and have recently begun fleshing out my design
            skills. I am always seeking new challenges and opportunities. Feel
            free to reach out!
          </p>
          <div className="flex items-center">
            <button className="bg-accent-100 text-primary-300 font-montserrat text-xl px-8 py-3 mt-8 rounded-md">
              Lets Talk!
            </button>
            <div className="mt-10 ml-10">
              <LinkedinIcon />
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
