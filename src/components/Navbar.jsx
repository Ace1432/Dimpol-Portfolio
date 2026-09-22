import { useEffect, useRef, useState } from "react";

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const lastScrollY = useRef(0);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    let timeout;


    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
          setIsVisible(false);
        }, 300);
      }

      if (currentScrollY < lastScrollY.current) {
        clearTimeout(timeout);
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        bg-transparent backdrop-blur-md
        transition-transform duration-500 ease-in-out
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="container-main">
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            KAI.
          </div>

          {/* Desktop Menu */}
          <ul className="hidden gap-5 roboto-regular text-[#fcb8b8] md:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="nav-link-hover transition-colors hover:text-white"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="z-[60] text-2xl text-white md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`
                inline-block transition-transform duration-300
                ${isMenuOpen ? "rotate-90" : "rotate-0"}
              `}
            >
              {isMenuOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>

        {/* Mobile Overlay */}
        <div
          className={`
            fixed inset-0 z-40
            bg-black/50 backdrop-blur-sm
            transition-opacity duration-300
            md:hidden
            ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          `}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        ></div>

        {/* Mobile Sidebar */}
        <div
          className={`
            fixed top-0 right-0 h-screen w-64
            z-50
            bg-[#240000]/70
            backdrop-blur-xl
            border-l border-white/10
            shadow-2xl
            transition-transform duration-300 ease-in-out
            md:hidden
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <ul className="flex flex-col gap-3 px-5 pt-24 roboto-regular text-lg">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    block rounded-xl px-5 py-3
                    text-[#f6e4e4]
                    transition-all duration-300
                    hover:bg-[#E69A00]/15
                    hover:text-[#E69A00]
                    hover:translate-x-1
                  "
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;