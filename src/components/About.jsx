import { motion } from "framer-motion";

export default function About() {
  const gallery = [
    "/cricket_2.jpg",
    "/anniversary_1.jpg",
    "/open_mic_1.jpg",
  ];

  const timeline = [
    { year: "2021", text: "DW Innovation was founded with a mission to create impactful digital solutions." },
    { year: "2022", text: "Successfully expanded into mobile & product development." },
    { year: "2023", text: "Launched automation & UI/UX innovation labs." },
    { year: "2024", text: "Grew into a global tech partner, delivering high-end software." },
    { year: "2025", text: "On track to become one of India’s fastest-growing digital agencies." },
  ];

  return (
    <section
      id="about"
      className="py-24 px-10 bg-linear-to-b from-[#111] via-[#0c0c0c] to-black text-white"
    >
      <div className="max-w-7xl mx-auto space-y-20">

        {/* ---- HEADING ---- */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-center"
        >
          About <span className="text-red-600">DW Innovation</span>
        </motion.h2>

        {/* ---- MAIN ABOUT + IMAGE ---- */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT: OFFICE PHOTOS STACKED */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="grid grid-rows-3 gap-6"
          >
            {["/office1.jpg", "/office2.jpg", "/office3.jpg"].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="rounded-xl overflow-hidden shadow-lg shadow-red-900/40"
              >
                <img
                  src={img}
                  className="w-full h-[180px] object-cover hover:opacity-90 transition"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT: TEXT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">Our Story</h3>

            <p className="text-gray-300 leading-relaxed text-lg">
              DW Innovation Pvt. Ltd. was founded by forward-thinking entrepreneurs
              with a vision to build reliable, high-impact digital solutions.
              Rooted in creativity, precision and passion—we transform ideas into
              powerful digital experiences.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">
              Today, we serve clients across industries with cutting-edge web,
              mobile and custom software solutions—making us one of India’s most
              trusted innovation partners.
            </p>

            <h3 className="text-3xl font-bold pt-6">Empowering Through Action</h3>

            <p className="text-gray-300 leading-relaxed text-lg">
              We believe progress matters only when it uplifts communities.  
              From sustainability efforts to cultural engagement—our team takes
              meaningful action that creates lasting impact.
            </p>
          </motion.div>

        </div>

        {/* ---- EVENT MINI-GALLERY ---- */}
        <div>
          <h3 className="text-3xl font-bold mb-6 text-red-500">
            Our Cricket & Cultural Events
          </h3>

          <p className="text-gray-300 mb-6">
            Celebrating teamwork, creativity, and unity—our events strengthen the DW Innovation family.
          </p>

          <div className="grid grid-cols-3 gap-6">
            {gallery.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="rounded-xl overflow-hidden shadow-lg shadow-red-900/40 cursor-pointer"
              >
                <img
                  src={img}
                  className="w-full h-[150px] object-cover hover:opacity-90 transition"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ---- TIMELINE ---- */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-8">Who We Are</h3>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="p-5 bg-[#1a1a1a] rounded-xl border border-white/5 hover:border-red-600 transition"
              >
                <h4 className="text-2xl font-bold text-red-500">{item.year}</h4>
                <p className="text-gray-300 text-sm mt-2">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ---- MISSION & STATS ---- */}
        <div className="grid md:grid-cols-2 gap-10 items-start mt-20">

          {/* MISSION */}
          <div>
            <h3 className="text-3xl font-bold mb-4">Mission & Vision</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              “Experience. Excellence. Every Time.”  
              Empowering businesses with quality-driven digital solutions,
              unmatched innovation, and consistent client satisfaction.
            </p>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-6">
            <motion.div whileHover={{ scale: 1.1 }} className="text-center">
              <h2 className="text-4xl font-extrabold text-red-500">352+</h2>
              <p className="text-gray-300">Projects Completed</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} className="text-center">
              <h2 className="text-4xl font-extrabold text-red-500">100%</h2>
              <p className="text-gray-300">Client Satisfaction</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} className="text-center">
              <h2 className="text-4xl font-extrabold text-red-500">5+</h2>
              <p className="text-gray-300">Years Experience</p>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
