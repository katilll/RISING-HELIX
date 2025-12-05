import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-xl ${
        scrolled
          ? "bg-black/90 shadow-[0_5px_25px_rgba(0,0,0,0.6)]"
          : "bg-linear-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

        {/* LOGO with smooth animation */}
        <h1
          className={`text-3xl font-extrabold tracking-wide transition-all duration-300 ${
            scrolled ? "scale-[1.03]" : "scale-100"
          }`}
        >
          <span className="text-red-600">DW</span>
          <span className="text-white">Innovation</span>
        </h1>

        {/* MENU */}
        <div className="hidden md:flex gap-8 text-gray-300 font-medium text-sm">
          {["Home", "About", "Services", "Why Us", "Testimonials"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="relative group transition"
            >
              {item}
              {/* Red underline on hover */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* JOIN BUTTON (Netflix style) */}
        <button className="hidden md:block px-5 py-2 bg-red-600 text-white font-semibold rounded-md shadow-md hover:bg-red-700 hover:shadow-red-900/50 transition-all duration-300">
          Join Now
        </button>

      </div>
    </nav>
  );
}
