import { motion } from "framer-motion";

export default function WhyChoose() {
  const reasons = [
    "Innovation First Approach",
    "Experienced Professionals",
    "Future-Ready Technology",
    "Commitment to Quality"
  ];

  return (
    <section
      id="whyus"
      className="py-24 px-10 bg-linear-to-b from-[#111] via-[#0d0d0d] to-black text-white"
    >
      <h2 className="text-4xl font-extrabold text-center text-red-600 mb-14">
        Why Choose DW Innovation?
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="p-8 bg-[#161616] rounded-xl border border-red-800/40 shadow hover:shadow-red-900/60 transition"
          >
            <p className="font-semibold text-lg text-gray-200">{r}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
