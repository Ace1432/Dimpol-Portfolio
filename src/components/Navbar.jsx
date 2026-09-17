import { useEffect, useRef, useState } from "react";

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const lastScrollY = useRef(0);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scroll down
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
          setIsVisible(false);
        }, 300);
      }

      // Scroll up
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
        transition-transform duration-500 ease-in-out
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="container-main">

      
      {/* Navbar */}
      <div className="flex items-center justify-between py-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          KAI.
        </div>

        {/* Desktop Menu */}
        <ul className="hidden gap-5 roboto-regular text-[#fcb8b8] md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="z-[60] text-2xl text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`
          fixed top-0 right-0 h-screen w-55
          backdrop-blur-md
          transition-transform duration-300 ease-in-out
          md:hidden
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Sidebar Links */}
        <ul className="flex flex-col gap-8 px-8 pt-24 roboto-regular text-lg text-[#f6e4e4]">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block transition-colors hover:text-white"
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