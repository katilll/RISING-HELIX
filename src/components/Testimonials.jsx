import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  const list = [
    {
      name: "Rohan S.",
      text: "DW Innovation transformed our digital presence. Highly recommended!",
      rating: 5,
    },
    {
      name: "Priya M.",
      text: "Professional, responsive, and creative team.",
      rating: 4,
    },
    {
      name: "Arjun P.",
      text: "Delivered outstanding UI/UX for our startup.",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 px-10 bg-linear-to-b from-black via-[#0b0b0b] to-[#111] text-white"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-red-600 mb-16 tracking-wide">
        What Clients Say
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {list.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="p-8 rounded-xl bg-[#141414]/80 backdrop-blur-md 
                       border border-white/10 hover:border-red-600/40 
                       shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(255,0,0,0.2)] 
                       transition-all"
          >
            {/* Stars */}
            <div className="flex mb-4 opacity-80">
              {[...Array(t.rating)].map((_, idx) => (
                <FaStar key={idx} className="text-red-500 text-lg" />
              ))}
            </div>

            {/* Text */}
            <p className="italic text-gray-300 mb-6 leading-relaxed">
              "{t.text}"
            </p>

            {/* Name */}
            <h4 className="font-semibold text-red-500 text-right">
              — {t.name}
            </h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
