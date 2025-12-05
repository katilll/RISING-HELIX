import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-gray-300 pt-16 pb-10 relative overflow-hidden">

      {/* Animated Gradient Line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.2 }}
        className="h-[3px] bg-linear-to-r from-indigo-500 via-blue-400 to-teal-400 mx-auto mb-10"
      ></motion.div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* COLUMN 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-3">DW Innovation</h2>
          <p className="text-gray-400 leading-relaxed">
            Crafting innovative digital products that shape the future.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            {[FaLinkedinIn, FaInstagram, FaFacebookF, FaXTwitter].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer"
              >
                <Icon className="text-xl text-gray-200" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* COLUMN 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            {["Home", "About Us", "Services", "Portfolio", "Career", "Contact"].map((item, i) => (
              <li
                key={i}
                className="hover:text-indigo-400 transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* COLUMN 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-white">Services</h3>
          <ul className="space-y-2 text-gray-400">
            {[
              "Web Development",
              "App Development",
              "UI/UX Design",
              "Automation Systems",
              "Cloud Solutions",
            ].map((srv, i) => (
              <li
                key={i}
                className="hover:text-indigo-400 transition cursor-pointer"
              >
                {srv}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* COLUMN 4 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-white">Contact</h3>
          <p className="text-gray-400 mb-2">📍 Pune, Maharashtra</p>
          <p className="text-gray-400 mb-2">📞 +91 9284117439</p>
          <p className="text-gray-400 mb-2">📧 info@dwinnovation.com</p>
        </motion.div>

      </div>

      {/* FOOTER BOTTOM */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.3 }}
        className="text-center mt-12 text-gray-500 text-sm border-t border-white/10 pt-6"
      >
        © {new Date().getFullYear()} DW Innovation. All rights reserved.
      </motion.div>
    </footer>
  );
}
