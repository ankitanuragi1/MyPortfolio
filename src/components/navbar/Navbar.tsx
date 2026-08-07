import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/images/navlogo.png";

const navItems = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Blog",
  "Contact",
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <a
          href="#home"
          className="transition-transform duration-300 hover:scale-105"
        >
          <img
            src={logo}
            alt="Ankit Logo"
            className="h-11 w-auto"
          />
        </a>

        {/* Desktop Menu */}

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="
                  relative
                  text-gray-300
                  transition
                  duration-300
                  hover:text-purple-400

                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-purple-500
                  after:transition-all
                  after:duration-300

                  hover:after:w-full
                "
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}

        <button
          className="
          hidden
          rounded-xl
          bg-purple-600
          px-6
          py-2.5
          font-medium
          transition-all
          duration-300

          hover:scale-105
          hover:bg-purple-700
          hover:shadow-[0_0_25px_rgba(168,85,247,.5)]

          md:block
          "
        >
          Hire Me
        </button>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
          text-2xl
          text-white
          transition
          hover:text-purple-400

          md:hidden
          "
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.3 }}
            className="
            border-t
            border-zinc-800
            bg-zinc-950/95
            backdrop-blur-xl

            md:hidden
            "
          >
            <ul className="flex flex-col items-center py-8">

              {navItems.map((item) => (

                <li key={item} className="w-full">

                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="
                    block
                    py-4
                    text-center
                    text-gray-300
                    transition
                    duration-300

                    hover:bg-purple-600/10
                    hover:text-purple-400
                    "
                  >
                    {item}
                  </a>

                </li>

              ))}

              <button
                className="
                mt-6

                rounded-xl

                bg-purple-600

                px-8
                py-3

                transition-all
                duration-300

                hover:bg-purple-700
                "
              >
                Hire Me
              </button>

            </ul>

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;