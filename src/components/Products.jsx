import { motion } from "framer-motion";

export default function Products() {
  const services = [
    {
      title: "University & Study Abroad Services",
      desc: "Support for course selection, applications, scholarships, visas & pre/post-arrival assistance.",
    },
    {
      title: "Tuition Centre",
      desc: "High-quality in-centre & online tuition for KS1–KS3, GCSE, A-Levels & 11+ Entrance Exams.",
    },
    {
      title: "Teaching Jobs Placement",
      desc: "Placement support for TA, HLTA, SEND roles & teaching positions across London.",
    },
    {
      title: "Smart Preparation Courses",
      desc: "Driving Theory, Life in the UK Test, English Levels A1–B2, Quran & Bangla language classes.",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 px-10 bg-white"
    >
      <h2 className="text-4xl font-extrabold text-center text-orange-600 mb-14">
        What We Provide
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-10 text-gray-900">
        {services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-xl bg-white border border-orange-300/40 
                       shadow-[0_0_20px_rgba(255,140,0,0.15)] 
                       hover:shadow-[0_0_25px_rgba(255,140,0,0.3)] 
                       transition cursor-pointer"
          >
            <h3 className="text-xl font-bold mb-2 text-orange-600">{s.title}</h3>
            <p className="text-gray-700">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
