import { motion } from "framer-motion";

export default function ContactSection() {
  const faqs = [
    {
      q: "What are your class timings?",
      a: "We offer flexible class timings including morning, afternoon, and evening slots. Weekend classes are also available.",
    },
    {
      q: "Do you provide online classes?",
      a: "Yes, we offer both in-person and online classes with highly interactive virtual learning tools.",
    },
    {
      q: "What is your fee structure?",
      a: "Fees depend on the program and level. We offer competitive pricing and flexible payment options.",
    },
    {
      q: "Do you provide university admission guidance?",
      a: "Yes, we assist with applications, interview prep, course selection, and scholarship information.",
    },
  ];

  return (
    <section id="contact" className="py-24 px-10 bg-white text-gray-900">

      {/* HEADER */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center text-5xl font-extrabold text-orange-600 mb-6"
      >
        Contact Us
      </motion.h2>

      <p className="text-center text-gray-700 max-w-2xl mx-auto mb-14">
        Get in touch with our expert team for tuition services, university support,  
        or career guidance. We're here to help you succeed.
      </p>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE - CONTACT INFO */}
        <div>
          <h3 className="text-2xl font-bold text-orange-600 mb-4">Phone</h3>
          <p className="text-gray-700 mb-2">Helpline: +91 00000 00000</p>

          <h3 className="text-2xl font-bold text-orange-600 mt-8 mb-4">Email</h3>
          <p className="text-gray-700 mb-2">risinghelix01@gmail.com</p>

          <h3 className="text-2xl font-bold text-orange-600 mt-8 mb-4">Address</h3>
          <p className="text-gray-500 italic">Address not provided</p>

          <h3 className="text-2xl font-bold text-orange-600 mt-8 mb-4">Hours</h3>
          <p className="text-gray-700">Mon–Fri: 11:00 AM – 8:00 PM</p>
          <p className="text-gray-700">Sat: 10:00 AM – 4:00 PM</p>

          {/* Additional Info */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-orange-600 mb-3">Get in Touch</h3>
            <p className="text-gray-700 mb-4">
              We're here to help with tuition programs, university admissions, and teaching job opportunities.
            </p>

            <p className="text-gray-600 mb-2">
              <strong className="text-gray-900">Quick Response:</strong> Usually responds in 2–4 hours.
            </p>

            <p className="text-gray-600 mb-2">
              <strong className="text-gray-900">Free Consultation:</strong> Book a session with our advisors.
            </p>
          </div>

          <button className="mt-6 px-8 py-3 bg-orange-500 hover:bg-orange-600 rounded-md transition text-white font-semibold">
            Book Consultation
          </button>
        </div>

        {/* RIGHT SIDE - CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white p-8 rounded-xl border border-orange-300/40 
          shadow-[0_0_20px_rgba(255,140,0,0.15)]"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h3>

          <form className="space-y-6">

            {/* FULL NAME */}
            <div>
              <label className="block mb-1 text-gray-600">Full Name *</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 focus:outline-none"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block mb-1 text-gray-600">Email Address *</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 focus:outline-none"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="block mb-1 text-gray-600">Phone Number</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 focus:outline-none"
              />
            </div>

            {/* SUBJECT */}
            <div>
              <label className="block mb-1 text-gray-600">Subject</label>
              <select className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 focus:outline-none">
                <option>Select a subject</option>
                <option>Tuition Inquiry</option>
                <option>University Admission</option>
                <option>Teaching Job</option>
                <option>Other</option>
              </select>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block mb-1 text-gray-600">Message *</label>
              <textarea
                placeholder="Tell us how we can help you..."
                rows="4"
                className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 focus:outline-none"
              ></textarea>
            </div>

            <button className="w-full py-3 bg-orange-500 hover:bg-orange-600 rounded-md transition text-white font-semibold">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      {/* FAQ SECTION */}
      <div className="max-w-6xl mx-auto mt-24">
        <h2 className="text-4xl font-extrabold text-center text-orange-600 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-8">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white rounded-xl border border-orange-300/40 
              shadow-[0_0_15px_rgba(255,165,0,0.15)]"
            >
              <h3 className="text-xl font-bold text-orange-600">{faq.q}</h3>
              <p className="text-gray-700 mt-2">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
