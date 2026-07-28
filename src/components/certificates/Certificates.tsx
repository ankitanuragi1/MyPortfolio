import { certificates } from "../../data/certificates";

function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-black text-white py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-20">
          Certificates
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {certificates.map((certificate) => (

            <div
              key={certificate.id}
              className="bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-purple-500 transition"
            >

              <h3 className="text-2xl font-bold">
                {certificate.title}
              </h3>

              <p className="text-gray-400 mt-4">
                {certificate.issuer}
              </p>

              <p className="text-purple-400 mt-2">
                {certificate.year}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Certificates;