import useScrollReveal from "../hooks/useScrollReveal";

function Footer() {
  const footerRef = useScrollReveal({ threshold: 0.2 });

  return (
    <footer className="border-t border-[#E69A00]/20 bg-[#240000]">
      <div ref={footerRef} className="scroll-reveal container-main px-6 py-10">

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          {/* Logo / Name */}
          <div className="text-2xl font-bold text-white">
            KAI<span className="text-[#E69A00]">.</span>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <a
              href="#hero"
              className="nav-link-hover transition-colors hover:text-[#E69A00]"
            >
              Home
            </a>

            <a
              href="#about"
              className="nav-link-hover transition-colors hover:text-[#E69A00]"
            >
              About
            </a>

            <a
              href="#skills"
              className="nav-link-hover transition-colors hover:text-[#E69A00]"
            >
              Skills
            </a>

            <a
              href="#contact"
              className="nav-link-hover transition-colors hover:text-[#E69A00]"
            >
              Contact
            </a>
          </div>

        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/10"></div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 text-sm text-white/50 md:flex-row">

          <p>
            © {new Date().getFullYear()} KAI. All rights reserved.
          </p>

          <p>
            Designed & Built with{" "}
            <span className="text-[#E69A00]">React</span>
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;