import { motion } from "framer-motion";

export default function Products() {
  const services = [
    { title: "Web App Development", desc: "Modern & scalable digital platforms." },
    { title: "UI/UX Design", desc: "User-centered, clean, and innovative designs." },
    { title: "Automation Solutions", desc: "Smart tools for smarter workflows." },
    { title: "Branding & Identity", desc: "Design that communicates your vision." }
  ];

  return (
    <section
      id="products"
      className="py-24 px-10 bg-linear-to-b from-black via-[#0c0c0c] to-[#111]"
    >
      <h2 className="text-4xl font-extrabold text-center text-red-600 mb-14">
        Our Services
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-10 text-white">
        {services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.07 }}
            className="p-6 rounded-xl bg-[#161616] border border-red-700/40 shadow-lg hover:shadow-red-900/50 transition cursor-pointer"
          >
            <h3 className="text-xl font-bold mb-2 text-red-500">{s.title}</h3>
            <p className="text-gray-300">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
