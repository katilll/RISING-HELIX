import { motion } from "framer-motion";

export default function UniversitySection() {
  const support = [
    {
      title: "Personalized Counseling",
      desc: "Our expert counselors tailor guidance to your unique academic and career goals.",
    },
    {
      title: "Simplified Applications",
      desc: "We streamline the application process, making it easier to apply to your dream university.",
    },
    {
      title: "Scholarship Support",
      desc: "We help you find and apply for scholarships to reduce financial burden.",
    },
    {
      title: "Visa Assistance",
      desc: "Expert guidance to ensure your visa process is smooth and successful.",
    },
  ];

  const testimonials = [
    {
      text: "The guidance for my Canadian student visa was flawless. I felt supported at every step—from choosing a university to landing in Toronto.",
      name: "Anika Rahman",
      role: "International Student",
      program: "MSc in Computer Science, University of Toronto",
    },
    {
      text: "Getting my HND in Business locally was the best decision. The curriculum was top-notch and the support made the process so simple.",
      name: "Fahim Ahmed",
      role: "Home Student",
      program: "HND in Business, London Campus",
    },
  ];

  return (
    <section
      id="university"
      className="py-24 px-10 bg-linear-to-b from-black via-[#0c0c0c] to-[#111] text-white"
    >

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <h1 className="text-5xl font-extrabold text-red-600 mb-4">
          January 2026 Intake Now Open
        </h1>
        <p className="text-gray-300 text-lg">
          Shape Your Tomorrow, Today. Explore world-class degrees at home and abroad.
        </p>
      </motion.div>

      {/* TWO PATHS TO SUCCESS */}
      <h2 className="text-4xl font-extrabold text-center text-red-500 mb-14">
        Two Paths to Success
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 mb-24">

        {/* HOME STUDENTS */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-8 bg-[#161616] rounded-xl border border-white/10 shadow-lg transition"
        >
          <h3 className="text-3xl font-bold text-red-500 mb-3">Excel at Home</h3>
          <p className="text-gray-300">
            Gain prestigious UK qualifications without leaving Bangladesh.
          </p>

          <div className="grid grid-cols-3 gap-6 mt-6 text-center">
            <div>
              <h2 className="text-3xl font-extrabold text-red-500">4</h2>
              <p className="text-sm text-gray-400">Degree Types</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-red-500">50+</h2>
              <p className="text-sm text-gray-400">Specialized Courses</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-red-500">100%</h2>
              <p className="text-sm text-gray-400">UK Curriculum</p>
            </div>
          </div>

          <ul className="mt-6 space-y-2 text-gray-300">
            <li>• Affordable & Accessible UK Degrees</li>
            <li>• Globally Recognized Certifications</li>
          </ul>

          <button className="mt-6 px-6 py-2 bg-red-600 hover:bg-red-700 rounded-md transition">
            View Home Programs
          </button>
        </motion.div>

        {/* INTERNATIONAL STUDENTS */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-8 bg-[#161616] rounded-xl border border-white/10 shadow-lg transition"
        >
          <h3 className="text-3xl font-bold text-red-500 mb-3">Go Global</h3>
          <p className="text-gray-300">
            Your complete solution for studying at top universities worldwide.
          </p>

          <div className="grid grid-cols-3 gap-6 mt-6 text-center">
            <div>
              <h2 className="text-3xl font-extrabold text-red-500">10+</h2>
              <p className="text-sm text-gray-400">Countries</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-red-500">1000+</h2>
              <p className="text-sm text-gray-400">Partner Universities</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-red-500">95%</h2>
              <p className="text-sm text-gray-400">Visa Success Rate</p>
            </div>
          </div>

          <ul className="mt-6 space-y-2 text-gray-300">
            <li>• Expert Visa & Scholarship Guidance</li>
            <li>• Direct Access to Top Institutions</li>
          </ul>

          <button className="mt-6 px-6 py-2 bg-red-600 hover:bg-red-700 rounded-md transition">
            Explore International Options
          </button>
        </motion.div>
      </div>

      {/* TESTIMONIALS */}
      <h2 className="text-4xl font-extrabold text-center text-red-500 mb-14">
        What Our Students Say
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 mb-24">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-xl bg-[#141414] border border-white/10 shadow-lg transition"
          >
            <p className="text-gray-300 italic">"{t.text}"</p>
            <h4 className="mt-4 font-bold text-red-500">{t.name}</h4>
            <p className="text-sm text-gray-400">{t.role}</p>
            <p className="text-sm text-gray-400">{t.program}</p>
          </motion.div>
        ))}
      </div>

      {/* SUPPORT SECTION */}
      <h2 className="text-4xl font-extrabold text-center text-red-500 mb-14">
        A Foundation of Support
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 mb-24">
        {support.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="p-6 bg-[#161616] rounded-xl border border-white/10 transition shadow"
          >
            <h3 className="text-xl font-bold text-red-500">{s.title}</h3>
            <p className="text-gray-300 mt-2">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* FINAL CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-4xl font-extrabold text-red-600 mb-4">
          Don’t Miss the January 2026 Intake
        </h2>
        <p className="text-gray-300 mb-6">
          Applications are closing soon. Secure your spot today.
        </p>

        <a href="#contact">
          <button className="px-10 py-3 bg-red-600 hover:bg-red-700 rounded-md text-white font-semibold transition">
            Enroll Now
          </button>
        </a>
      </motion.div>

    </section>
  );
}
