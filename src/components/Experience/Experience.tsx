import { experiences } from "../../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="bg-black text-white py-32 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-20">
          Experience & Journey
        </h2>

        <div className="relative border-l-2 border-purple-600">

          {experiences.map((item, index) => (
            <div
              key={index}
              className="ml-10 mb-16 relative"
            >

              <div
                className="
                  absolute
                  -left-[49px]
                  top-2
                  w-6
                  h-6
                  rounded-full
                  bg-purple-600
                  border-4
                  border-black
                "
              ></div>

              <p className="text-purple-400 text-lg font-semibold">
                {item.year}
              </p>

              <h3 className="text-3xl font-bold mt-2">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-8">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;