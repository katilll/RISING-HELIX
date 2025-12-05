import { motion } from "framer-motion";

export default function TeachingJobs() {
  const categories = [
    { title: "Teaching Assistant", desc: "Primary & Secondary Schools" },
    { title: "SEN Support", desc: "Special Educational Needs" },
    { title: "Holiday Clubs", desc: "Seasonal Opportunities" },
  ];

  const stats = [
    { number: "100+", label: "Job Placements" },
    { number: "95%", label: "Success Rate" },
    { number: "50+", label: "Partner Schools" },
  ];

  const jobs = [
    {
      title: "Teaching Assistant (KS1–KS4)",
      location: "West London, UK",
      type: "Full-time, Part-time, Temp to perm",
      pay: "£100–115/day",
      schedule: "Day shift, Monday–Friday, No weekends",
      mode: "In-person",
      desc: "Support learners across Primary, Secondary & SEND schools.",
    },
    {
      title: "Higher Level Teaching Assistant (HLTA)",
      location: "London, UK",
      type: "Full-time, Part-time, Temp to perm",
      pay: "£100–115/day",
      schedule: "Term-time only",
      mode: "In-person",
      desc: "Assist children with ADHD, autism & SEN needs.",
    },
    {
      title: "Nursery Assistant",
      location: "London, UK",
      type: "Full-time, Part-time",
      pay: "£100–115/day",
      schedule: "Mon–Fri, No weekends",
      mode: "In-person",
      desc: "Help in nursery activities & child development.",
    },
    {
      title: "Midday Supervisory Assistant",
      location: "London, UK",
      type: "Part-time",
      pay: "£100–115/day",
      schedule: "Mon–Fri",
      mode: "In-person",
      desc: "Supervise students during lunchtime.",
    },
    {
      title: "Nursery & Reception Teaching Assistant",
      location: "London, UK",
      type: "Full-time, Part-time",
      pay: "£100–115/day",
      schedule: "Mon–Fri",
      mode: "In-person",
      desc: "Support EYFS children with learning activities.",
    },
    {
      title: "Primary School Teacher",
      location: "London, UK",
      type: "Full-time",
      pay: "£100–115/day",
      schedule: "Mon–Fri",
      mode: "In-person",
      desc: "Deliver UK curriculum lessons.",
    },
    {
      title: "SEND Teacher",
      location: "West London, UK",
      type: "Full-time, Part-time",
      pay: "£100–115/day",
      schedule: "Term-time",
      mode: "In-person",
      desc: "Teach SEND learners across primary & secondary settings.",
    },
    {
      title: "Cover Supervisor",
      location: "West London, UK",
      type: "Full-time, Part-time",
      pay: "£100–115/day",
      schedule: "Mon–Fri",
      mode: "In-person",
      desc: "Manage classes for absent teachers.",
    },
  ];

  return (
    <section id="jobs" className="py-24 px-10 bg-white text-gray-900">
      
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <h1 className="text-5xl font-extrabold text-orange-600 mb-4">
          Teaching Job Opportunities
        </h1>
        <p className="text-gray-700 text-lg">
          Start your teaching career with our expert job placement support across UK schools.
        </p>

        <div className="flex justify-center gap-6 mt-8">
          <a href="#contact">
            <button className="px-10 py-3 bg-orange-500 hover:bg-orange-600 
            rounded-md text-white font-semibold transition">
              Apply Now
            </button>
          </a>

          <a href="#contact">
            <button className="px-10 py-3 border border-gray-400 hover:bg-gray-100 
            rounded-md transition">
              Learn More
            </button>
          </a>
        </div>
      </motion.div>

      {/* STATS */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10 text-center mb-24">
        {stats.map((s, i) => (
          <motion.div whileHover={{ scale: 1.1 }} key={i}>
            <h2 className="text-5xl font-extrabold text-orange-600">{s.number}</h2>
            <p className="text-gray-700 mt-2">{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* CATEGORIES */}
      <h2 className="text-4xl font-extrabold text-center text-orange-600 mb-10">
        Teaching Categories
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mb-20">
        {categories.map((c, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.08 }}
            className="p-6 rounded-xl bg-white border border-orange-300/40 
            shadow-[0_0_20px_rgba(255,140,0,0.15)] transition"
          >
            <h3 className="text-xl font-bold text-orange-600">{c.title}</h3>
            <p className="text-gray-700 mt-2">{c.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* JOB LISTINGS */}
      <h2 className="text-4xl font-extrabold text-center text-orange-600 mb-14">
        Job Opportunities
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {jobs.map((job, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-xl border border-orange-300/30 
                       shadow-[0_0_20px_rgba(255,140,0,0.2)] hover:shadow-[0_0_30px_rgba(255,140,0,0.35)]
                       transition duration-300"
          >
            <h3 className="text-xl font-bold text-orange-600">{job.title}</h3>

            <p className="text-gray-700 mt-1">{job.location}</p>
            <p className="text-gray-500 text-sm">{job.type}</p>
            <p className="text-gray-500 text-sm">{job.pay}</p>
            <p className="text-gray-500 text-sm">{job.schedule}</p>

            <p className="text-gray-700 mt-3">{job.desc}</p>

            <a href="#contact">
              <button className="mt-4 px-5 py-2 bg-orange-500 hover:bg-orange-600 
              rounded-md transition text-white">
                Contact Us
              </button>
            </a>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-24">
        <h2 className="text-4xl font-extrabold text-orange-600 mb-4">
          Ready to Start Your Teaching Career?
        </h2>
        <p className="text-gray-700 mb-6">
          Join our community of passionate educators and begin your journey.
        </p>

        <a href="#contact">
          <button className="px-10 py-3 bg-orange-500 hover:bg-orange-600 rounded-md text-white font-semibold transition">
            Apply Now
          </button>
        </a>
      </div>
    </section>
  );
}
