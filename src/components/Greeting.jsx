/* eslint-disable react/no-unescaped-entities */
export default function Greeting() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = 0;
  const handleMouseOver = (e) => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      e.target.innerText = e.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return e.target.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");
      iteration += 1 / 3;
    }, 30);
  };
  return (
    <div className="lg:mt-96 lg:mb-96 flex items-center relative pl-10 pt-28 lg:pt-0 lg:pl-44">
      <div className="text-white flex flex-col items-start">
        <h2 className="text-2xl md:text-3xl pb-2">Hello There,</h2>
        <h1
          data-value="I'm N.J. Andersen"
          onMouseOver={handleMouseOver}
          className="font-extrabold text-transparent text-4xl md:text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 pb-2"
        >
          I'm N.J. Andersen
        </h1>
        <h2 className=" text-2xl md:text-3xl">Full Stack Web Developer.</h2>
      </div>
    </div>
  );
}
