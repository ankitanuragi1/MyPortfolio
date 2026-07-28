import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";
import logo from "../../assets/images/mylogo.jpeg";

function Footer() {
  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-800">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo */}

          <div>

            {/* <h2 className="text-3xl font-bold">
              Ankit<span className="text-purple-500">.</span>
            </h2> */}
            <img
            src={logo}
            alt="Ankit Logo"
            className="h-18 w-auto"
          />

            <p className="text-gray-400 mt-4 leading-7">
              Full Stack Developer passionate about building
              modern, fast and beautiful web applications.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li><a href="#about">About</a></li>

              <li><a href="#skills">Skills</a></li>

              <li><a href="#projects">Projects</a></li>

              <li><a href="#contact">Contact</a></li>

            </ul>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Connect
            </h3>

            <div className="flex gap-5 text-2xl">

              <FaGithub className="cursor-pointer hover:text-purple-500 transition"/>

              <FaLinkedin className="cursor-pointer hover:text-blue-500 transition"/>

              <FaInstagram className="cursor-pointer hover:text-pink-500 transition"/>

            </div>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="mt-8 bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center hover:bg-purple-700 transition"
            >
              <FaArrowUp />
            </button>

          </div>

        </div>

      </div>

      <div className="border-t border-zinc-800">

        <div className="max-w-7xl mx-auto py-6 text-center text-gray-500">

          © 2026 Ankit. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;