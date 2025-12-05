import { motion } from "framer-motion";

export default function Hero() {
  const image = "/Student.avif";

  return (
    <section
      id="home"
      className="pt-32 pb-20 bg-white text-gray-900"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 px-8 md:px-16 items-center">

        {/* ---------------- LEFT CONTENT ---------------- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Welcome to  
            <br />
            <span className="text-orange-600">Rising Helix</span>
            <br />
            Your Gateway to
            <br />
            <span className="text-orange-500">Academic Excellence</span>
            <br />
            & Career Success
          </h1>

          <p className="text-gray-600 text-lg max-w-lg leading-relaxed">
            High-quality tuition, tech learning programs, job placements 
            and personalised academic guidance for students and professionals.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-5 pt-2">
            <motion.button
              whileHover={{ scale: 1.08 }}
              className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-md shadow hover:bg-orange-700"
            >
              Get Started
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 border border-gray-400 text-gray-700 rounded-md hover:bg-gray-100"
            >
              Watch Video
            </motion.button>
          </div>

          {/* STATS */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="flex gap-12 pt-6 text-gray-700 font-semibold"
          >
            <div>
              <p className="text-4xl text-orange-600">500+</p>
              <p>Students</p>
            </div>
            <div>
              <p className="text-4xl text-orange-600">20+</p>
              <p>Courses</p>
            </div>
            <div>
              <p className="text-4xl text-orange-600">95%</p>
              <p>Success Rate</p>
            </div>
          </motion.div>
        </motion.div>

        {/* ---------------- RIGHT IMAGE ---------------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="flex justify-center"
        >
          <img
            src={image}
            className="w-full max-w-lg h-[420px] object-cover rounded-2xl 
            shadow-[0_0_35px_rgba(255,140,0,0.25)]"
          />
        </motion.div>
      </div>

      {/* ---------------- MINI INFO CARDS ---------------- */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mt-20 px-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-white border border-orange-200 rounded-xl 
          shadow-[0_0_15px_rgba(255,165,0,0.2)]"
        >
          <h3 className="text-xl font-bold text-orange-600">Tuition Programs</h3>
          <p className="text-gray-700 text-sm mt-2">
            KS1–A Levels, GCSE, 11+ Grammar Prep & Academic Excellence Courses.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-white border border-orange-200 rounded-xl 
          shadow-[0_0_15px_rgba(255,165,0,0.2)]"
        >
          <h3 className="text-xl font-bold text-orange-600">Tech & Coding</h3>
          <p className="text-gray-700 text-sm mt-2">
            Robotics, Python, IoT, AI & Smart Tech programs for ages 5–16.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
