import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/images/navlogo.png";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <header className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-xl border-b border-white/10 z-50">

      <nav className="max-w-7xl mx-auto h-20 flex justify-between items-center px-6">


        <h1 className="flex items-center text-2xl font-bold text-white">
          <a href = "#home" className="flex items-center">
          <img
            src={logo}
            alt="Ankit Logo"
            className="h-10 w-auto"
          />
          </a>
          {/* <span className="-ml-3 text-white">
            nkit<span className="text-purple-500">.</span>
          </span> */}
        </h1>

        {/* Desktop */}

        <ul className="hidden md:flex gap-8 text-gray-300">
          
          <li><a href="#home">Home</a></li>

          <li><a href="#about">About</a></li>

          <li><a href="#skills">Skills</a></li>

          <li><a href="#projects">Projects</a></li>

          <li><a href="#experience">Experience</a></li>

          <li><a href="#blog">Blog</a></li>

          <li><a href="#contact">Contact</a></li>

        </ul>

        {/* Desktop Button */}

        <button className="hidden md:block bg-purple-600 px-5 py-2 rounded-lg">
          Hire Me
        </button>

        {/* Mobile Icon */}

        <button
          className="md:hidden text-2xl text-purple-500 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </nav>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="md:hidden bg-zinc-900 border-t border-zinc-800">

          <ul className="flex flex-col items-center gap-6 py-8 text-white">

            <li><a href="#home">Home</a></li>

            <li><a href="#about">About</a></li>

            <li><a href="#skills">Skills</a></li>

            <li><a href="#projects">Projects</a></li>

            <li><a href="#experience">Experience</a></li>

            <li><a href="#blog">Blog</a></li>

            <li><a href="#contact">Contact</a></li>

          </ul>

        </div>

      )}

    </header>

  );

}

export default Navbar;