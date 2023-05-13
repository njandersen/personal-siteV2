/* eslint-disable react/no-unescaped-entities */
export default function About() {
  return (
    <div className="py-40 relative lg:pl-44 mt-60 ">
      <div className="max-w-screen-xl  px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-6 text-teal-500">About Me</h2>
            <p className="text-white leading-relaxed text-lg">
              I started my journey to become a software engineer in 2019. Ever
              since I have fallen in love with creating beautiful and functional
              web applications. I enjoy Full Stack Development because I love
              the creative side of Front end and the reqarding logic of Back
              end. I am currently working as a freelance web developer and as an
              Intern at Bit Source.
            </p>
            <br />
            <p className="text-white text-lg">
              I am a graduate of Southern New Hampshire University and have a
              Bachelor's degree in Computer Science. I am always looking for
              more opportunities to learn and grow as a developer. please feel
              free to reach out.
            </p>
          </div>
          <div className="max-w-xs mx-auto lg:mx-0">
            <img
              src="portfolio-pic.jpg"
              alt="Profile"
              className="rounded-full mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
