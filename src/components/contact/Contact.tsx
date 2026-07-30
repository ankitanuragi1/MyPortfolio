import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import { contactData } from "./contactData";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center text-5xl font-bold mb-4"
        >
          Let's Work Together
        </motion.h2>

        <p className="text-center text-gray-400 mb-16">
          Have a project or opportunity? Let's connect.
        </p>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left */}

          <div className="space-y-5">

            {contactData.map((item) => (
              <ContactInfo
                key={item.title}
                item={item}
              />
            ))}

          </div>

          {/* Right */}

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg border border-gray-800 bg-[#111] p-4 outline-none focus:border-purple-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-lg border border-gray-800 bg-[#111] p-4 outline-none focus:border-purple-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-lg border border-gray-800 bg-[#111] p-4 outline-none focus:border-purple-500"
            />

            <textarea
              rows={6}
              placeholder="Message"
              className="w-full rounded-lg border border-gray-800 bg-[#111] p-4 outline-none focus:border-purple-500"
            />

            <button
              className="rounded-lg bg-purple-600 px-8 py-4 hover:bg-purple-700 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;