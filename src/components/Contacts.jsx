import useScrollReveal from "../hooks/useScrollReveal";

function Contacts() {
  const sectionRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="contact" className="min-h-screen bg-[#240000]">
      <div
        ref={sectionRef}
        className="scroll-reveal container-main flex min-h-screen flex-col items-center justify-center px-6 py-20"
      >
        {/* Heading */}
        <div className="scroll-reveal visible delay-100 mb-12 text-center">
          <h1 className="text-5xl font-bold text-[#E69A00]">CONTACT</h1>
          <h2 className="mt-4 text-3xl font-bold text-white">
            Let's work together
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Have a project, opportunity, or task in mind? Feel free to reach out
            and let's discuss how I can help.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid w-full max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="scroll-reveal visible delay-200 rounded-2xl border border-[#E69A00]/20 bg-[#300000] p-8">
            <h3 className="text-2xl font-bold text-[#E69A00]">
              Get in Touch
            </h3>
            <p className="mt-3 leading-relaxed text-white/70">
              I'm open to administrative, data entry and virtual assistant.
            </p>
            <div className="mt-8 space-y-6">
              {/* Email */}
              <div>
                <p className="text-sm text-[#E69A00]">Email</p>
                <p className="mt-1 text-white">egunadimplekay@gmail.com</p>
              </div>
              {/* Location */}
              <div>
                <p className="text-sm text-[#E69A00]">Location</p>
                <p className="mt-1 text-white">Philippines</p>
              </div>
              {/* Availability */}
              <div>
                <p className="text-sm text-[#E69A00]">Availability</p>
                <p className="mt-1 text-white">Open for opportunities</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="scroll-reveal visible delay-300 rounded-2xl border border-[#E69A00]/20 bg-[#300000] p-8">
            <div>
              <label className="text-sm text-white">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="mt-2 w-full rounded-lg border border-white/10 bg-[#240000] px-4 py-3 text-white outline-none transition-all duration-200 focus:border-[#E69A00] focus:shadow-[0_0_0_2px_rgba(230,154,0,0.2)]"
              />
            </div>
            <div className="mt-5">
              <label className="text-sm text-white">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="mt-2 w-full rounded-lg border border-white/10 bg-[#240000] px-4 py-3 text-white outline-none transition-all duration-200 focus:border-[#E69A00] focus:shadow-[0_0_0_2px_rgba(230,154,0,0.2)]"
              />
            </div>
            <div className="mt-5">
              <label className="text-sm text-white">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-[#240000] px-4 py-3 text-white outline-none transition-all duration-200 focus:border-[#E69A00] focus:shadow-[0_0_0_2px_rgba(230,154,0,0.2)]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-[#E69A00] px-6 py-3 font-bold text-[#240000] transition-all duration-200 hover:scale-[1.02] hover:bg-[#f0a900] active:scale-[0.98]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Contacts;
