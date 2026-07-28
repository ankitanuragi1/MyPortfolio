import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
    return (
        <section 
        id = "home"
        className="min-h-screen pt-24 md:pt-0 bg-black text-white flex items-center">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                <div>
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
                                delay: .2,
                                duration: .8
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
                                delay: .4,
                                duration: .8
                            }}
                            className="text-gray-400 max-w-lg"
                        >
                            I build modern and beautiful web applications using
                            React, TypeScript and modern technologies.

                        </motion.p>

                        <div className="flex gap-6 mt-8 text-2xl text-gray-400">
                            <FaGithub className="hover:text-white cursor-pointer" />
                            <FaLinkedin className="hover:text-blue-500 cursor-pointer" />
                            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
                        </div>

                        <div className="flex gap-4 mt-8">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: .5,
                                    duration: .7,
                                }}
                                className="flex gap-4 mt-8"
                            >
                                <button className="bg-purple-600 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]">
                                    View Projects
                                </button>

                                <button className="border border-gray-700 px-6 py-3 rounded-lg">
                                    Download Resume
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                <div className="relative flex justify-center items-center w-full h-full">
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 1,
                            ease: "easeOut",
                        }}
                        className="flex justify-center"
                    >
                        {/* <div className="absolute w-80 h-80 rounded-full bg-purple-600 opacity-30 blur-[120px]"></div> */}
                        <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-[120px]"></div>

                        {/* <div className="absolute w-64 h-64 rounded-full bg-blue-600 opacity-30 blur-[100px]"></div> */}
                    </motion.div>
                </div>

            </div>
        </section >
    );
}

export default Hero;