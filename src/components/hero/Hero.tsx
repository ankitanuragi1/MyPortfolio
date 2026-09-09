import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import {
    SiReact,
    SiJavascript,
    SiTypescript,
    SiHtml5,
    SiCss,
    SiTailwindcss
} from "react-icons/si";
import heroImg from "../../assets/images/heroImg.png";

function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen pt-24 md:pt-10 lg:pt-18 bg-black text-white flex items-center overflow-x-hidden"
        >

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* ================= LEFT CONTENT ================= */}

                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                >

                    <p className="text-purple-400 mb-3">
                        Hello, I'm
                    </p>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.2,
                            duration: 0.8
                        }}
                        className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
                    >
                        Ankit
                    </motion.h1>

                    <h2 className="text-2xl md:text-4xl text-gray-300 mb-6">
                        Full Stack Developer
                    </h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: 0.4,
                            duration: 0.8
                        }}
                        className="text-gray-400 max-w-lg"
                    >
                        I build modern and beautiful web applications using
                        React, TypeScript and modern technologies.
                    </motion.p>

                    {/* Social Icons */}
                    <div className="flex gap-6 mt-8 text-2xl text-gray-400">

                        <a
                            href="https://github.com/ankitanuragi1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub className="hover:text-white cursor-pointer transition" />
                        </a>

                        <a
                            href="https://linkedin.com/in/ankitanuragi"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin className="hover:text-blue-500 cursor-pointer transition" />
                        </a>

                        {/* <a
                            href="https://instagram.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />
                        </a> */}

                    </div>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.5,
                            duration: 0.7,
                        }}
                        className="flex gap-4 mt-8"
                    >

                        <a
                            href="#projects"
                            className="block"
                        >
                            <button
                                className="
                                bg-purple-600
                                px-6 py-3
                                rounded-lg
                                transition-all
                                duration-300
                                hover:cursor-pointer
                                hover:scale-105
                                hover:bg-purple-700
                                
                            "
                            >

                                View Projects
                            </button>
                        </a>

                        <button
                            className="
                                border border-gray-700
                                px-6 py-3
                                rounded-lg
                                hover:cursor-pointer
                                hover:scale-105
                                transition
                            "
                        >
                            Download Resume
                        </button>

                    </motion.div>

                </motion.div>


                {/* ================= RIGHT IMAGE ================= */}

                <div className="relative flex justify-center items-center w-full">

                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 1,
                            ease: "easeOut",
                        }}
                        className="flex justify-center"
                    >

                        {/* IMAGE CONTAINER */}

                        <div
                            className="
                                relative
                                w-56 h-72
                                sm:w-72 sm:h-80
                                md:w-80 md:h-96
                                lg:w-[420px] lg:h-[500px]
                            "
                        >

                            {/* ================= GLOW ================= */}

                            <div
                                className="
                                    absolute
                                    inset-0
                                    rounded-full
                                    bg-gradient-to-r
                                    from-purple-600
                                    via-blue-500
                                    to-cyan-400
                                    opacity-30
                                    blur-[100px]
                                "
                            />

                            {/* ================= IMAGE ================= */}

                            <img
                                src={heroImg}
                                alt="Profile"
                                className="
                                    relative
                                    z-10
                                    w-full
                                    h-full
                                    rounded-3xl
                                    object-contain
                                "
                            />


                            {/* ================================================= */}
                            {/* TOP LEFT - JAVASCRIPT */}
                            {/* ================================================= */}

                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="
                                    absolute
                                    top-4
                                    -left-2
                                    sm:top-6 sm:-left-6
                                    md:top-8 md:-left-8
                                    lg:top-10 lg:-left-10
                                    z-20
                                    p-3
                                    rounded-xl
                                    border border-yellow-400/30
                                    bg-yellow-400/10
                                    backdrop-blur-md
                                    shadow-lg
                                    shadow-yellow-400/20
                                "
                            >
                                <SiJavascript className="text-2xl sm:text-3xl text-yellow-400" />
                            </motion.div>


                            {/* ================================================= */}
                            {/* TOP RIGHT - REACT */}
                            {/* ================================================= */}

                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{
                                    duration: 3.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="
                                    absolute
                                    top-4
                                    -right-2
                                    sm:top-6 sm:-right-6
                                    md:top-8 md:-right-8
                                    lg:top-10 lg:-right-10
                                    z-20
                                    p-3
                                    rounded-xl
                                    border border-cyan-400/30
                                    bg-cyan-400/10
                                    backdrop-blur-md
                                    shadow-lg
                                    shadow-cyan-400/20
                                "
                            >
                                <SiReact className="text-2xl sm:text-3xl text-cyan-400" />
                            </motion.div>


                            {/* ================================================= */}
                            {/* MIDDLE LEFT - HTML */}
                            {/* ================================================= */}

                            <motion.div
                                animate={{ x: [0, -6, 0] }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="
                                    absolute
                                    top-1/2
                                    -translate-y-1/2
                                    -left-2
                                    sm:-left-6
                                    md:-left-8
                                    lg:-left-10
                                    z-20
                                    p-3
                                    rounded-xl
                                    border border-orange-400/30
                                    bg-orange-400/10
                                    backdrop-blur-md
                                    shadow-lg
                                    shadow-orange-400/20
                                "
                            >
                                <SiHtml5 className="text-2xl sm:text-3xl text-orange-500" />
                            </motion.div>


                            {/* ================================================= */}
                            {/* MIDDLE RIGHT - TYPESCRIPT */}
                            {/* ================================================= */}

                            <motion.div
                                animate={{ x: [0, 6, 0] }}
                                transition={{
                                    duration: 3.2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="
                                    absolute
                                    top-1/2
                                    -translate-y-1/2
                                    -right-2
                                    sm:-right-6
                                    md:-right-8
                                    lg:-right-10
                                    z-20
                                    p-3
                                    rounded-xl
                                    border border-blue-400/30
                                    bg-blue-400/10
                                    backdrop-blur-md
                                    shadow-lg
                                    shadow-blue-400/20
                                "
                            >
                                <SiTypescript className="text-2xl sm:text-3xl text-blue-400" />
                            </motion.div>


                            {/* ================================================= */}
                            {/* BOTTOM LEFT - CSS */}
                            {/* ================================================= */}

                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{
                                    duration: 3.4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="
                                    absolute
                                    bottom-4
                                    -left-2
                                    sm:bottom-6 sm:-left-6
                                    md:bottom-8 md:-left-8
                                    lg:bottom-10 lg:-left-10
                                    z-20
                                    p-3
                                    rounded-xl
                                    border border-blue-500/30
                                    bg-blue-500/10
                                    backdrop-blur-md
                                    shadow-lg
                                    shadow-blue-500/20
                                "
                            >
                                <SiCss className="text-2xl sm:text-3xl text-blue-500" />
                            </motion.div>


                            {/* ================================================= */}
                            {/* BOTTOM RIGHT - TAILWIND */}
                            {/* ================================================= */}

                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{
                                    duration: 3.2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="
                                    absolute
                                    bottom-4
                                    -right-2
                                    sm:bottom-6 sm:-right-6
                                    md:bottom-8 md:-right-8
                                    lg:bottom-10 lg:-right-10
                                    z-20
                                    p-3
                                    rounded-xl
                                    border border-cyan-400/30
                                    bg-cyan-400/10
                                    backdrop-blur-md
                                    shadow-lg
                                    shadow-cyan-400/20
                                "
                            >
                                <SiTailwindcss className="text-2xl sm:text-3xl text-cyan-400" />
                            </motion.div>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section >
    );
}

export default Hero;