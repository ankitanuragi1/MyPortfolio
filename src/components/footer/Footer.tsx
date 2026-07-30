import SocialIcon from "../common/SocialIcon";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
  FaEnvelope,
} from "react-icons/fa";

import { motion } from "framer-motion";
import logo from "../../assets/images/mylogo.jpeg";

function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black text-white">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-3">

          {/* ---------------- Left ---------------- */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >

            <img
              src={logo}
              alt="Ankit Logo"
              className="h-16 w-auto"
            />

            <p className="mt-5 leading-7 text-gray-400">

              Full Stack Developer passionate about building
              fast, scalable and beautiful web applications.

            </p>

            <div className="mt-6 inline-flex items-center rounded-full border border-green-500/40 bg-green-500/10 px-4 py-2 text-sm text-green-400">

              🟢 Available for Opportunities

            </div>

          </motion.div>

          {/* ---------------- Center ---------------- */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: .7,
              delay: .2
            }}
          >

            <h3 className="mb-6 text-xl font-semibold">

              Quick Links

            </h3>

            <ul className="space-y-4">

              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Blog",
                "Contact",
              ].map((item) => (

                <li key={item}>

                  <a
                    href={`#${item.toLowerCase()}`}
                    className="group inline-flex items-center text-gray-400 transition-all duration-300 hover:text-purple-400"
                  >

                    <span className="mr-2 h-[2px] w-0 bg-purple-500 transition-all duration-300 group-hover:w-4"></span>

                    {item}

                  </a>

                </li>

              ))}

            </ul>

          </motion.div>

          {/* ---------------- Right ---------------- */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: .7,
              delay: .4
            }}
          >

            <h3 className="mb-6 text-xl font-semibold">

              Connect

            </h3>

            <div className="flex gap-4">

              <SocialIcon
                href="https://github.com/yourusername"
                icon={FaGithub}
                hoverColor="#ffffff"
                glowColor="rgba(255,255,255,.6)"
                label="GitHub"
              />

              <SocialIcon
                href="https://linkedin.com/in/yourusername"
                icon={FaLinkedin}
                hoverColor="#0A66C2"
                glowColor="rgba(10,102,194,.6)"
                label="LinkedIn"
              />

              <SocialIcon
                href="https://instagram.com/yourusername"
                icon={FaInstagram}
                hoverColor="#E1306C"
                glowColor="rgba(225,48,108,.6)"
                label="Instagram"
              />

              <SocialIcon
                href="mailto:your@email.com"
                icon={FaEnvelope}
                hoverColor="#EA4335"
                glowColor="rgba(234,67,53,.6)"
                label="Email"
              />

            </div>

            <button

              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }

              className="
              mt-10

              flex

              h-12
              w-12

              items-center
              justify-center

              rounded-full

              bg-purple-600

              transition-all
              duration-300

              hover:scale-110

              hover:bg-purple-700

              hover:shadow-[0_0_30px_rgba(168,85,247,.6)]
              "
            >

              <FaArrowUp />

            </button>

          </motion.div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-zinc-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-gray-500 md:flex-row">

          <p>

            © {new Date().getFullYear()} Ankit.
            All Rights Reserved.

          </p>

          <p>

            Built with ❤️ using React, TypeScript & Tailwind CSS

          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;