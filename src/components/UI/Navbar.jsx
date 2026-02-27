import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";

import Logo from "../SVG/Logo";
import MobileMenu from "../SVG/MobileMenu";
import CloseIcon from "../SVG/CloseIcon";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Experience", path: "experience" },
    { name: "Skills", path: "skills" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <div className="bg-darkneutral flex justify-between items-center sticky top-0 z-10 border-b border-primary-100/20">
      <div className="ml-10">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      {isMenuOpen ? (
        <button onClick={toggleMenu} className="md:hidden mr-10">
          <CloseIcon className="transition duration-500 transform rotate-180" />
        </button>
      ) : (
        <button onClick={toggleMenu} className="md:hidden mr-10">
          <MobileMenu className="transition duration-500" />
        </button>
      )}

      {/* Desktop nav */}
      <div className="hidden md:flex">
        <ul className="text-white md:flex md:space-x-9 md:mr-10 items-center">
          {navLinks.map((link) => (
            <li key={link.name} className="font-montserrat text-lg">
              <ScrollLink
                to={link.path}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-accent-100 transition-colors"
              >
                {link.name}
              </ScrollLink>
            </li>
          ))}
          <li className="font-montserrat text-lg">
            <Link
              to="/resume"
              className="hover:text-accent-100 transition-colors"
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      <div
        className={
          isMenuOpen
            ? "fixed left-0 top-0 h-full border-r border-r-gray-900 w-[60%] bg-darkneutral ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <div className="ml-10">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <ul className="text-white">
          {navLinks.map((link) => (
            <li key={link.name} className="p-4 font-montserrat text-lg">
              <ScrollLink
                to={link.path}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-accent-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </ScrollLink>
            </li>
          ))}
          <li className="p-4 font-montserrat text-lg">
            <Link
              to="/resume"
              className="hover:text-accent-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
