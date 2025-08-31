import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 shadow-lg" : "bg-black/80 backdrop-blur-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-5 py-3">
        <a
          href="#"
          className="text-purple-500 hover:text-red-500 transition-colors duration-300 font-bold text-xl"
        >
          Vivekanand
        </a>
        <ul className="hidden md:flex gap-8 font-medium">
          {["HOME", "ABOUT", "EXP", "WORKS"].map((item, i) => (
            <li key={i}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-red-500 transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
