import { useState, useContext } from "react";
import { motion } from "framer-motion";
import { FaCode, FaDesktop, FaPalette, FaArrowRight } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

function Services() {
  const { theme } = useContext(ThemeContext);
  const [hoveredService, setHoveredService] = useState(null);

  const servicesData = [
    {
      id: "web-development",
      title: "Web Development",
      icon: FaCode,
      description:
        "Crafting robust, scalable, and high-performance web applications using modern frameworks.",
      tech: ["Next.js", "React", "Tailwind CSS", "Laravel", "REST API"],
      gradient: "from-blue-600 to-purple-600",
      shadowColor: "shadow-blue-500/50",
    },
    {
      id: "web-design",
      title: "Web Design",
      icon: FaDesktop,
      description:
        "Designing intuitive and visually stunning website layouts that captivate users and tell your story.",
      tech: ["Figma", "UI/UX Principles", "Responsive Design", "Wireframing"],
      gradient: "from-green-600 to-teal-600",
      shadowColor: "shadow-green-500/50",
    },
    {
      id: "ui-design",
      title: "User Interface Design",
      icon: FaPalette,
      description:
        "Creating seamless and engaging user interfaces with a focus on aesthetics and user experience.",
      tech: ["Figma", "Prototyping", "User Research", "Design Systems"],
      gradient: "from-pink-600 to-red-600",
      shadowColor: "shadow-pink-500/50",
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      y: -10,
      rotateX: 0,
      boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
      transition: { duration: 0.3 },
    },
  };

  const iconVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  };

  const learnMoreVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      id="services"
      className="relative py-20 lg:py-32 px-4 sm:px-8 lg:px-16 overflow-hidden" // HAPUS bg-gradient-to-br from-gray-900 to-black text-white
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      {/* Background Gradient Overlay - Conditional for dark mode */}
      {theme === "dark" && ( // TAMBAHKAN KONDISI INI
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      )}

      <div className="container mx-auto relative z-10 text-center">
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
          variants={sectionVariants}
        >
          My Services
        </motion.h2>
        <motion.p
          className="text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-lg sm:text-xl" // SESUAIKAN WARNA TEKS
          variants={sectionVariants}
        >
          Transforming ideas into captivating digital experiences.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              className={`relative w-full max-w-sm p-6 rounded-xl border shadow-lg cursor-pointer overflow-hidden flex flex-col items-center justify-between transition-all duration-300 ease-in-out transform-gpu backdrop-blur-lg
                               ${
                                 theme === "dark"
                                   ? "bg-gray-800/50 border-gray-700/50"
                                   : "bg-gray-50/50 border-gray-300/50"
                               }`} // SESUAIKAN BG & BORDER
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
              style={{
                perspective: "1000px",
              }}
            >
              <motion.div
                className={`absolute inset-0 rounded-xl border-2 border-transparent`}
                animate={{
                  borderColor:
                    hoveredService === service.id
                      ? [
                          null,
                          `rgba(139, 92, 246, 0.8)`,
                          `rgba(59, 130, 246, 0.8)`,
                          `rgba(139, 92, 246, 0.8)`,
                        ]
                      : "transparent",
                  opacity: hoveredService === service.id ? 1 : 0,
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  background:
                    hoveredService === service.id
                      ? `linear-gradient(45deg, ${
                          service.gradient.split(" ")[0]
                        }, ${service.gradient.split(" ")[2]}) border-box`
                      : "none",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  padding: "2px",
                }}
              />

              <div className="relative z-10 flex flex-col items-center text-center">
                <motion.div
                  className={`p-4 rounded-full mb-4 bg-gradient-to-br ${service.gradient} shadow-lg`}
                  variants={iconVariants}
                  initial="initial"
                  animate={hoveredService === service.id ? "hover" : "initial"}
                >
                  <service.icon className="w-12 h-12 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {" "}
                  {/* SESUAIKAN WARNA TEKS */}
                  {service.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-base mb-4 leading-relaxed">
                  {" "}
                  {/* SESUAIKAN WARNA TEKS */}
                  {service.description}
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap justify-center gap-2 mb-4">
                {service.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`text-xs px-3 py-1 rounded-full border
                                   ${
                                     theme === "dark"
                                       ? "bg-gray-700 text-gray-300 border-gray-600"
                                       : "bg-gray-200 text-gray-800 border-gray-300"
                                   }`} // SESUAIKAN BG & BORDER
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <motion.a
                href={`#${service.id}-details`}
                className={`relative z-10 inline-flex items-center justify-center px-6 py-3 text-white font-bold rounded-full shadow-md bg-gradient-to-r ${service.gradient} hover:opacity-90 transition-opacity duration-300`}
                variants={learnMoreVariants}
                initial="hidden"
                animate={hoveredService === service.id ? "visible" : "hidden"}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
                <FaArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Services;
