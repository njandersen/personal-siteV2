export default function Skills() {
  return (
    <div className="py-48 relative lg:pl-44 mt-96">
      <div>
        <h2 className="font-extrabold text-transparent text-5xl lg:text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Skills & Experience
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="text-white flex flex-col mt-10 pr-10">
          <div className="mb-8">
            <span className="block mb-[7px]">Front End</span>
            <footer className="h-[2px] bg-gray-900 w-[450px]">
              <div className="h-full bg-teal-500 w-96"></div>
            </footer>
          </div>
          <div className="mb-8">
            <span className="block mb-[7px]">Back End</span>
            <footer className="h-[2px] bg-gray-900 w-[450px]">
              <div className="h-full bg-purple-400 w-80"></div>
            </footer>
          </div>
          <div className="mb-8">
            <span className="block mb-[7px]">React</span>
            <footer className="h-[2px] bg-gray-900 w-[450px]">
              <div className="h-full bg-pink-600 w-96"></div>
            </footer>
          </div>
          <div className="mb-8">
            <span className="block mb-[7px]">Node/Express</span>
            <footer className="h-[2px] bg-gray-900 w-[450px]">
              <div className="h-full bg-teal-500 w-80"></div>
            </footer>
          </div>
        </div>
        <div className="text-white lg:w-2/3 lg:p-10 text-lg ">
          <p>
            I embarked on my journey in software engineering when I started
            college in 2019, and it was there that I discovered my passion for
            web development. Throughout my academic journey, I have honed my
            skills in React, showcasing a strong proficiency in building dynamic
            and interactive user interfaces. Front-end design is an area where I
            truly excel, as I combine my technical knowledge with a keen eye for
            aesthetics to create visually appealing and user-friendly websites.
            With a solid foundation in software engineering principles and a
            specialization in web development, I am equipped to tackle complex
            front-end challenges and deliver high-quality solutions.
          </p>
          <br />
          <p>
            Currently I am interning at Bit Source, a software development
            company and am also persuing freelance work. I am always looking for
            more opportunities to learn and grow as a developer.{" "}
            <a href="/ResumeV5.pdf" className="text-teal-500">
              You can find my resume here.
            </a>{" "}
            Please feel free to reach out.
          </p>
        </div>
      </div>
    </div>
  );
}
