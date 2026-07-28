function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-purple-400 font-semibold">
            Get In Touch
          </p>

          <h2 className="text-5xl font-bold mt-2">
            Contact Me
          </h2>

          <p className="text-gray-400 mt-4">
            Have a project or want to work together?
            Feel free to contact me.
          </p>
        </div>

        <form className="max-w-3xl mx-auto space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700 outline-none focus:border-purple-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700 outline-none focus:border-purple-500"
          />

          <input
            type="text"
            placeholder="Subject"
            className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700 outline-none focus:border-purple-500"
          />

          <textarea
            rows={6}
            placeholder="Your Message"
            className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700 outline-none resize-none focus:border-purple-500"
          />

          <button
            className="w-full bg-purple-600 py-4 rounded-xl font-semibold hover:bg-purple-700 transition"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;