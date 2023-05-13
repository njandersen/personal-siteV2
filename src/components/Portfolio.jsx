const projects = [
  {
    title: "Tunezle",
    description: "A melody guessing game built with React",
    imageUrl: "tunezle.png",
    link: "https://tunezle.com/",
  },
  {
    title: "Nushi",
    description: "A web app that generates art using user prompts ",
    imageUrl: "nushiai.png",
    link: "https://nushiai.com/",
  },
  {
    title: "Guardian Dispatch",
    description:
      "A social site for the Destiny 2 community to share their favorite builds",
    imageUrl: "guardian-dispatch.png",
    link: "https://guardian-dispatch.vercel.app/",
  },
  {
    title: "Personal Blog",
    description: "A personal blog built with Next.js",
    imageUrl: "blog screenshot.png",
    link: "https://personal-blog-tau-six.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <div className="py-80 ">
      <div className="lg:pl-[450px] pl-10 mb-10">
        <h2 className="font-extrabold text-transparent text-6xl lg:text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
          Portfolio
        </h2>
      </div>
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block h-64 rounded-lg overflow-hidden group"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="object-cover w-full h-full transition-all duration-300 transform group-hover:scale-105 group-hover:z-10"
              />
              <div className="absolute inset-0 bg-black opacity-25"></div>
              <div className="absolute inset-0 p-6 flex items-center justify-center flex-col text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
