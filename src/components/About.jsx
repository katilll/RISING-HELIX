import { motion } from "framer-motion";

export default function About() {
  const values = [
    { title: "Excellence", text: "We maintain the highest standards in teaching and student support." },
    { title: "Passion", text: "Our dedicated team is committed to inspiring every learner." },
    { title: "Community", text: "We build strong, supportive relationships with students and families." },
    { title: "Achievement", text: "We help students reach academic and career milestones with confidence." },
  ];

  const stats = [
    { num: "2024", label: "Established" },
    { num: "500+", label: "Students Helped" },
    { num: "100+", label: "Job Placements" },
    { num: "100%", label: "Free Guidance" },
  ];

  const services = [
    {
      title: "University & Study Abroad Services",
      desc: "Guiding students through international and UK higher education opportunities.",
      points: [
        "Free educational counselling",
        "Course & university selection",
        "Application & admission support",
        "Visa & immigration help",
        "Scholarship guidance",
        "Pre & post-arrival support",
      ],
    },
    {
      title: "Tuition Centre Services",
      desc: "Providing expert tuition from primary level to A-Levels, both online & in-centre.",
      points: [
        "Primary education (Year 1–6)",
        "KS1–KS3 academic support",
        "GCSE preparation",
        "A-Level subjects",
        "11+ Grammar school coaching",
        "Adult & professional exam preparation",
      ],
    },
    {
      title: "Teaching Jobs Placement",
      desc: "Helping aspiring educators secure rewarding roles in UK schools.",
      points: [
        "Teaching assistant roles",
        "SEND & Higher Level TA positions",
        "Holiday club staff support",
        "Interview preparation",
        "Career development guidance",
        "Professional job placements",
      ],
    },
  ];

  return (
    <section id="about" className="py-24 px-10 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* 🌟 TOP HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-center"
        >
          About <span className="text-orange-600">Rising Helix</span>
        </motion.h2>

        {/* 🌟 INTRO + IMAGE SECTION */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(255,165,0,0.25)]"
          >
            <img src="/Student.avif" className="w-full h-[400px] object-cover" />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">Rising Helix</h3>

            <p className="text-gray-700 text-lg leading-relaxed">
              Supporting academic and professional journeys since 2021, Rising Helix
              provides free educational guidance, world-class tuition, and career support
              for students and professionals in the UK and abroad.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Our goal is to make high-quality education accessible while preparing
              learners with strong academic foundations and future-ready skills.
            </p>

            <div className="flex gap-4 pt-4">
              <button className="px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700">
                Get Started
              </button>
              <button className="px-6 py-3 border border-gray-400 rounded-md hover:bg-gray-100">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>

        {/* 🌟 MISSION SECTION */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h3 className="text-3xl font-bold">Our Mission</h3>

          <p className="text-gray-700 text-lg">
            To empower learners with high-quality education, mentorship, and global
            opportunities — helping them achieve academic excellence and long-term success.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {["Educational Excellence", "Student Success", "Global Opportunities"].map(
              (item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.07 }}
                  className="p-6 bg-white rounded-xl border border-orange-300/40 shadow"
                >
                  <p className="font-semibold text-orange-600">{item}</p>
                </motion.div>
              )
            )}
          </div>
        </div>

        {/* 🌟 ACHIEVEMENTS */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-center">Our Achievements</h3>

          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="p-8 text-center bg-white rounded-xl border border-orange-300/40 shadow"
              >
                <h2 className="text-4xl font-extrabold text-orange-600">{item.num}</h2>
                <p className="text-gray-700 mt-2 font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 🌟 SERVICES */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-10">Our Services</h3>

          <div className="grid md:grid-cols-3 gap-12">
            {services.map((srv, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-xl border border-orange-300/30 shadow"
              >
                <h4 className="text-xl font-bold text-orange-600">{srv.title}</h4>
                <p className="text-gray-700 mt-2">{srv.desc}</p>

                <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                  {srv.points.map((p, idx) => (
                    <li key={idx}>• {p}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 🌟 MISSION & VISION */}
        <div className="grid md:grid-cols-2 gap-12 mt-20">
          <div>
            <h3 className="text-3xl font-bold mb-4">Mission & Vision</h3>
            <p className="text-gray-700 text-lg">
              Rising Helix aims to transform lives through innovative teaching,
              personalized learning, and career-focused educational support.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl border border-orange-300/40 shadow text-center">
            <h2 className="text-4xl font-extrabold text-orange-600">5+</h2>
            <p className="text-gray-700 mt-2">Years of Excellence</p>
          </div>
        </div>

        {/* 🌟 CORE VALUES */}
        <div>
          <h3 className="text-3xl font-bold text-center mt-16 mb-10">Our Core Values</h3>

          <div className="grid md:grid-cols-4 gap-10">
            {values.map((v, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-xl border border-orange-300/40 shadow"
              >
                <h4 className="text-xl font-bold text-orange-600">{v.title}</h4>
                <p className="text-gray-700 mt-2 text-sm">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
