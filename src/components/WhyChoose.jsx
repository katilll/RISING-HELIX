import { motion } from "framer-motion";

export default function WhyChoose() {
  const reasons = [
    "Expert & Qualified Teachers",
    "Comprehensive Curriculum for All Age Groups",
    "Flexible Scheduling – Weekday & Weekend Options",
    "95% Student Success Rate",
    "Dedicated Career & University Guidance",
    "Safe & Supportive Learning Environment",
    "Modern Classrooms & Teaching Resources",
    "Job Placement Support for Teaching Roles",
  ];

  return (
    <section
      id="whyus"
      className="py-24 px-10 bg-white text-gray-900"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-orange-600 mb-14">
        Why Choose Rising Helix?
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        {reasons.map((reason, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.07 }}
            className="p-8 bg-white rounded-xl border border-orange-300/40 
            shadow-[0_0_20px_rgba(255,165,0,0.15)] 
            hover:shadow-[0_0_25px_rgba(255,140,0,0.25)] 
            transition cursor-pointer"
          >
            <p className="font-semibold text-lg text-gray-800">{reason}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
