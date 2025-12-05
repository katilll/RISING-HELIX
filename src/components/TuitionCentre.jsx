import { motion } from "framer-motion";

export default function TuitionCentre() {
  const techPrograms = [
    {
      title: "KS1 Smart Tech & Creativity",
      age: "5–7 years",
      duration: "1 hour",
      highlights: [
        "Magic Doorbell",
        "Talking Weather Box",
        "Colour & Sound Interaction Games",
      ],
      learn: "Smart objects, sensors, visual coding, creativity tools",
      btn: "Enroll Now",
      color: "blue",
    },

    {
      title: "KS2 Coding, Robotics & IoT Basics",
      age: "7–11 years",
      duration: "1.5 hours",
      highlights: ["Smart Dustbin", "Plant Water Alert", "Mini Robot Control"],
      learn: "Block coding, Python intro, simple robotics, automation",
      btn: "Start Learning",
      color: "green",
    },

    {
      title: "KS3 Python, Electronics & Smart Systems",
      age: "11–14 years",
      duration: "1.5 hours",
      highlights: [
        "IoT Weather Dashboard",
        "Smart Parking System",
        "Home Security System",
      ],
      learn: "Python programming, circuits, sensors, connected devices",
      btn: "Join Course",
      color: "orange",
    },

    {
      title: "KS4 Advanced Python, AI & IoT Projects",
      age: "14–16 years",
      duration: "1.5 hours",
      highlights: [
        "AI-Based Vision System",
        "Industrial IoT Monitor",
        "Home Automation Hub",
      ],
      learn: "Advanced Python, AI basics, cloud IoT, real engineering",
      btn: "Get Started",
      color: "purple",
    },

    {
      title: "KS2 Maths & English Tuition",
      age: "Year 4 – Year 6",
      duration: "1.5 hours",
      highlights: [
        "Multiplication & fractions",
        "Grammar & comprehension",
        "Real SATs past papers",
        "Interactive lessons",
      ],
      learn: "Maths + English foundation development",
      btn: "Get Started",
      color: "orange",
    },

    {
      title: "11+ Entrance Exams / SAT",
      age: "Year 4 – Year 6",
      duration: "1.5 hours",
      highlights: [
        "Verbal & Non-verbal Reasoning",
        "Maths & English Skills",
        "Mock Exams & Strategies",
        "Tailored Preparation",
      ],
      learn: "11+ Grammar School preparation",
      btn: "Get Started",
      color: "orange",
    },
  ];

  return (
    <section id="tuition" className="py-24 px-10 bg-white text-gray-900">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <h1 className="text-5xl font-extrabold text-orange-600 mb-4">
          Smart Tech & Tuition Programs
        </h1>
        <p className="text-gray-700 text-lg">
          Cutting-edge Coding, IoT, Robotics & Core Subjects — all designed to
          prepare students for the future.
        </p>
      </motion.div>

      {/* PROGRAM CARDS */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {techPrograms.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.06 }}
            className="p-6 bg-white rounded-xl border border-orange-300/30 
            shadow-[0_0_20px_rgba(255,140,0,0.2)] hover:shadow-[0_0_30px_rgba(255,140,0,0.35)] 
            transition"
          >
            <h3 className="text-xl font-bold text-orange-600">{p.title}</h3>

            <p className="text-gray-700 mt-1 text-sm"><b>Age:</b> {p.age}</p>
            <p className="text-gray-500 text-sm"><b>Duration:</b> {p.duration}</p>

            <p className="text-gray-700 mt-3"><b>Learn:</b> {p.learn}</p>

            <ul className="mt-4 space-y-2 text-gray-700 text-sm">
              {p.highlights.map((pt, index) => (
                <li key={index}>✔ {pt}</li>
              ))}
            </ul>

            <button
              className={`mt-5 px-4 py-2 w-full rounded text-white font-semibold transition
              ${
                p.color === "blue"
                  ? "bg-blue-500 hover:bg-blue-600"
                  : p.color === "green"
                  ? "bg-green-500 hover:bg-green-600"
                  : p.color === "purple"
                  ? "bg-purple-500 hover:bg-purple-600"
                  : "bg-orange-500 hover:bg-orange-600"
              }`}
            >
              {p.btn}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
