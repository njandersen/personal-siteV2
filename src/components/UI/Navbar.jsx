import { useState } from "react";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "white" }}>
        {!isOpen && (
          <div
            className="fixed md:hidden left-0 top-0 z-10"
            onClick={toggleSidebar}
          >
            <GiHamburgerMenu />
          </div>
        )}
        {/* Mobile Nav */}
        {isOpen && (
          <div className="bg-zinc-900 w-full h-96 fixed top-0 z-10">
            <div
              className="lg:hidden absolute left-0 top-0"
              onClick={toggleSidebar}
            >
              <AiOutlineClose />
            </div>
            <nav className="flex mt-20 text-white items-center ml-32 ">
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="flex items-center hover:text-gray-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="flex items-center hover:text-gray-300"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/skills"
                    className="flex items-center hover:text-gray-300"
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portfolio"
                    className="flex items-center hover:text-gray-300"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="flex items-center hover:text-gray-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
        {/* Desktop Nav */}
        <div
          className={
            "hidden md:flex flex-col md:h-screen py-4 px-6 fixed inset-y-0 left-0 bg-zinc-900 text-white justify-between z-10"
          }
        >
          <div className="">
            <h1 className="text-8xl">N</h1>
          </div>
          <nav className="flex">
            <ul className="space-y-2">
              <li>
                <Link to="/" className="flex items-center hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="flex items-center hover:text-gray-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/skills"
                  className="flex items-center hover:text-gray-300"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="flex items-center hover:text-gray-300"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="flex items-center hover:text-gray-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </IconContext.Provider>
    </>
  );
}
