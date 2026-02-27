import Greeting from "../components/Greeting";
import Experience from "../components/Experience";
import Skills from "./Skills";
import ContactFooter from "./ContactFooter";

export default function Home() {
  return (
    <>
      <Greeting />
      <Experience />
      <Skills />
      <ContactFooter />
    </>
  );
}
