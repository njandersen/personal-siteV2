import Greeting from "../components/Greeting";
import Portfolio from "../components/Portfolio";
import Skills from "./Skills";
import ContactFooter from "./ContactFooter";

export default function Home() {
  return (
    <>
      <Greeting />
      <Skills />
      <Portfolio />
      <ContactFooter />
    </>
  );
}
