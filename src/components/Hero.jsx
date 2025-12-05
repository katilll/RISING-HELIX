import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const images = [
    "/Web_development_1.jpg",
    "/mvp_to_product.jpg",
    "/Custom_SD_1.jpg",
    "/UI_UX_4 (1).jpg",
    "/Resource_outsource_1.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-[90vh] w-full flex items-center bg-linear-to-b from-black via-[#0c0c0c] to-[#111] text-white px-10 md:px-20 py-20"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT TEXT - FIXED SPACING */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-snug">
            Your Partner in  
            <br />
            <span className="text-red-600">Innovation</span> & Technology
            <br />
            Providing
            <br />
            <span className="text-red-500">Next-Gen Software</span>
            <br />
            Solutions
          </h1>

          <p className="text-gray-300 text-lg max-w-lg">
            Building high-performance digital products with a cinematic experience inspired by Netflix.
          </p>

          <div className="flex gap-5 pt-4">
            <motion.button
              whileHover={{ scale: 1.08 }}
              className="px-8 py-3 bg-red-600 text-white font-semibold rounded-md shadow-lg hover:bg-red-700 transition"
            >
              Get Started
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              className="px-8 py-3 border border-gray-500 rounded-md hover:bg-white/10 transition"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE SLIDER - FIXED SIZE + NO OVERFLOW */}
        <div className="relative flex justify-center items-center h-[420px]">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="w-full max-w-xl h-full object-cover rounded-2xl shadow-[0_0_40px_rgba(255,0,0,0.45)]"
            />
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
