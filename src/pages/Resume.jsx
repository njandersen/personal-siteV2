export default function Resume() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h2
          id="projects"
          className="px-10 py-3 font-montserrat text-3xl text-white border-2 border-secondary-100 rounded-lg"
        >
          Resume
        </h2>
        <img src="resume.png" alt="Resume" className="mt-10" />
        <a href="CurrentResume.pdf" download>
          <button className="bg-accent-100 text-primary-300 font-montserrat text-xl px-8 py-3 mt-8 rounded-md">
            Download
          </button>
        </a>
      </div>
    </>
  );
}
