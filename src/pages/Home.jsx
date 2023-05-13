import Greeting from "../components/Greeting";
import Portfolio from "../components/Portfolio";
import About from "./About";
import Skills from "./Skills";
import ContactFooter from "./ContactFooter";

export default function Home() {
  return (
    <>
      <Greeting />

      <Portfolio />
      <About />
      <Skills />
      <ContactFooter />
    </>
  );
}
