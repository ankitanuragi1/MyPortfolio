import profile from "../../assets/images/ankitn11.jpeg";
function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div className="flex justify-center">
          <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-purple-600 to-blue-600 p-1">
            <div className="w-full h-full rounded-3xl bg-zinc-900 flex items-center justify-center">
              {/* <span className="text-7xl">👨‍💻</span> */}
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <p className="text-purple-400 font-semibold mb-3">
            About Me
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Passionate Full Stack Developer
          </h2>

          <p className="text-gray-400 leading-8">
            I am a Computer Science student passionate about
            building modern and scalable web applications.
            I love learning new technologies and solving
            real-world problems through code.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">

            <div>
              <h3 className="text-3xl font-bold text-purple-400">
                10+
              </h3>
              <p className="text-gray-400">
                Projects Completed
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-purple-400">
                15+
              </h3>
              <p className="text-gray-400">
                Technologies Learned
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-purple-400">
                3+
              </h3>
              <p className="text-gray-400">
                Years Learning
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-purple-400">
                100%
              </h3>
              <p className="text-gray-400">
                Dedication
              </p>
            </div>

          </div>

          <button
            className="
              mt-10
              px-7
              py-3
              bg-purple-600
              rounded-xl
              hover:bg-purple-700
              transition
            "
          >
            Download Resume
          </button>
        </div>

      </div>
    </section>
  );
}

export default About;