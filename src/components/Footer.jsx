import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 pt-20 pb-10 relative overflow-hidden">

      {/* 🔥 Animated Orange Line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.3, ease: "easeInOut" }}
        className="h-[3px] bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 mx-auto mb-12"
      />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-14">

        {/* COLUMN 1 – Brand */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-extrabold text-orange-600 mb-4">
            RISING HELIX
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Your gateway to academic excellence and career success.
            We provide tuition services, university admissions, and job placements.
          </p>

          {/* 🔥 Animated Social Icons */}
          <div className="flex gap-4 mt-6">
            {[FaLinkedinIn, FaInstagram, FaFacebookF, FaXTwitter].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2, rotate: 8 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-orange-100 hover:bg-orange-200 transition cursor-pointer shadow-sm"
              >
                <Icon className="text-xl text-orange-600" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* COLUMN 2 – Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-700">
            {[
              "Home",
              "Tuition Centre",
              "Jobs",
              "University",
              "Smart Preparation",
              "About Us",
              "Contact",
            ].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 5, color: "#ea580c" }} // Orange hover animation
                className="cursor-pointer transition"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* COLUMN 3 – Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-700">
            {[
              "Smart Tech Courses (KS1–KS4)",
              "Maths & English Tuition",
              "GCSE & A-Level Prep",
              "11+ Entrance Training",
              "Study Abroad Guidance",
              "Teaching Job Placement",
            ].map((srv, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 5, color: "#ea580c" }}
                className="cursor-pointer transition"
              >
                {srv}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* COLUMN 4 – Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3 }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Info</h3>

          <p className="text-gray-500 mb-2 italic">📍 Address Not Provided</p>
          <p className="text-gray-700 mb-2">📞 Helpline: +91 00000 00000</p>
          <p className="text-gray-700 mb-2">📧 risinghelix01@gmail.com</p>
        </motion.div>

      </div>

      {/* FOOTER BOTTOM WITH FADE ANIMATION */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.3 }}
        className="text-center mt-14 text-gray-500 text-sm border-t border-orange-200/40 pt-6"
      >
        © {new Date().getFullYear()}{" "}
        <span className="text-orange-600 font-semibold">RISING HELIX</span>. All rights reserved.
      </motion.div>
    </footer>
  );
}
