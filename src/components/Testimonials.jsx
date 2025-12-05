import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  const list = [
    {
      name: "Ayesha K.",
      text: "Rising Helix helped my daughter excel in Maths and English. Her confidence has grown massively!",
      rating: 5,
    },
    {
      name: "Mohammed R.",
      text: "The Life in the UK and B1 English preparation was excellent. Passed smoothly thanks to their guidance.",
      rating: 5,
    },
    {
      name: "Sarah H.",
      text: "Amazing teachers! Their 11+ exam preparation helped my son secure admission to a top grammar school.",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 px-10 bg-white text-gray-900"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-orange-600 mb-16 tracking-wide">
        What Students & Parents Say
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {list.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="p-8 rounded-xl bg-white border border-orange-300/30 
                       shadow-[0_0_20px_rgba(255,140,0,0.15)] 
                       hover:shadow-[0_0_25px_rgba(255,140,0,0.25)] 
                       transition-all"
          >
            {/* Stars */}
            <div className="flex mb-4 opacity-90">
              {[...Array(t.rating)].map((_, idx) => (
                <FaStar key={idx} className="text-orange-500 text-lg" />
              ))}
            </div>

            {/* Text */}
            <p className="italic text-gray-700 mb-6 leading-relaxed">
              "{t.text}"
            </p>

            {/* Name */}
            <h4 className="font-semibold text-orange-600 text-right">
              — {t.name}
            </h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
