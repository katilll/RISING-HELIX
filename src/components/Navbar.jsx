import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-xl ${
        scrolled
          ? "bg-black/90 shadow-[0_5px_25px_rgba(0,0,0,0.6)]"
          : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6">

        {/* LOGO + BRAND CLICKABLE */}
        <Link
          to="/"
          className="flex items-center gap-3 group cursor-pointer select-none"
        >
          <img
            src="/HELIX.jpeg"
            alt="Rising Helix Logo"
            className="w-12 h-12 rounded-lg object-cover transition duration-300 
                       shadow-[0_0_15px_rgba(255,80,0,0.5)]
                       group-hover:scale-110 group-hover:rotate-3"
          />

          <h1
            className="text-2xl font-extrabold tracking-wide transition-all duration-300 
                       group-hover:scale-105 group-hover:text-red-500"
          >
            <span className="text-red-600">RISING</span>
            <span className="text-white"> HELIX</span>
          </h1>
        </Link>

        {/* MENU LINKS */}
        <div className="hidden md:flex gap-8 text-gray-300 font-medium text-sm">
          <Link to="/" className="hover:text-red-500 transition">Home</Link>
          <Link to="/tuition" className="hover:text-red-500 transition">Tuition Centre</Link>
          <Link to="/jobs" className="hover:text-red-500 transition">Jobs</Link>
          <Link to="/about" className="hover:text-red-500 transition">About</Link>
          <Link to="/contact" className="hover:text-red-500 transition">Contact</Link>
          <Link to="/blogs" className="hover:text-red-500 transition">Blogs</Link>
        </div>

        {/* CTA */}
        <button
          className="hidden md:block px-6 py-2 bg-red-600 text-white rounded-md 
                     shadow-lg hover:bg-red-700 hover:shadow-red-500/30 
                     transition font-semibold"
        >
          Enroll Now
        </button>
      </div>
    </nav>
  );
}
