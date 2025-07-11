import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import image2 from "../assets/busyweeknds.png";
import image3 from "../assets/portfolio-2025.png";
import image4 from "../assets/volcanoria.png";
import image5 from "../assets/elearnify.png";
import image6 from "../assets/portfolio-V1.png";

// Import logo teknologi
import laravelLogo from "../assets/laravel.svg";
import tailwindLogo from "../assets/tailwindcss.png";
import phpLogo from "../assets/php.png";
import jsLogo from "../assets/js.png";
import cssLogo from "../assets/css.png";
import reactLogo from "../assets/react.png";
import figmaLogo from "../assets/figma.png";
import nextLogo from "../assets/nextjs.png";
import htmlLogo from "../assets/html-5.png";
const projects = [
  {
    id: 1,
    title: "BusyWeeknds",
    description:
      "An e-commerce website for the clothing brand BusyWeeknds, offering a modern, responsive, and user-friendly online shopping experience for streetwear collections.",
    image: image2,
    link: "https://busyweeknds.fendyverse.web.id/",
    github: "https://github.com/Fendyra/Busyweeknds",
    technologies: [
      { name: "Laravel", logo: laravelLogo },
      { name: "TailwindCSS", logo: tailwindLogo },
      { name: "figma", logo: figmaLogo },
      { name: "PHP", logo: phpLogo },
      { name: "Javascript", logo: jsLogo },
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "E-Learnify",
    description:
      "An online learning platform providing structured IT classes for beginners to advanced learners, complete with registration features and digital course materials.",
    image: image5,
    link: "#home",
    github: "https://github.com/Fendyra/Elearnify",
    technologies: [
      { name: "PHP", logo: phpLogo },
      { name: "TailwindCSS", logo: tailwindLogo },
      { name: "Javascript", logo: jsLogo },
      { name: "Figma", logo: figmaLogo },
      { name: "CSS", logo: cssLogo },
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Portfolio V2",
    description:
      "A modern and creative upgrade of the personal portfolio, featuring interactive navigation and visually engaging design to highlight works and experiences.",
    image: image3,
    link: "#home",
    github: "https://github.com/Fendyra/my-portfolio",
    technologies: [
      { name: "React", logo: reactLogo },
      { name: "TailwindCSS", logo: tailwindLogo },
      { name: "Javascript", logo: jsLogo },
      { name: "Figma", logo: figmaLogo },
      { name: "Next Js", logo: nextLogo },
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 5,
    title: "Volcanoria",
    description:
      "An informative website presenting real-time data and visual distribution of volcanoes across Indonesia, along with educational content on volcanic disasters.",
    image: image4,
    link: "#home",
    github: "https://github.com/Fendyra/volcanoria",
    technologies: [
      { name: "HTML", logo: htmlLogo },
      { name: "PHP", logo: phpLogo },
      { name: "CSS", logo: cssLogo },
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 6,
    title: "Portfolio V1",
    description:
      "The first version of a personal portfolio showcasing identity, projects, and web development skills in a clean and professional layout.",
    image: image6,
    link: "#home",
    github: "#home",
    technologies: [
      { name: "React", logo: reactLogo },
      { name: "TailwindCSS", logo: tailwindLogo },
      { name: "Javascript", logo: jsLogo },
      { name: "Figma", logo: figmaLogo },
      { name: "Next Js", logo: nextLogo },
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
];

function Project() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      id="project"
      className="relative py-20 lg:py-32 px-4 sm:px-8 lg:px-16 overflow-hidden "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Background Gradient Overlay - Conditional for dark mode */}
      {theme === "dark" && (
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
            variants={cardVariants}
          >
            My Projects
          </motion.h2>
          <motion.p
            className="text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-lg sm:text-xl"
            variants={cardVariants}
          >
            Key milestones and validated skills demonstrated through my hands-on
            projects.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12"
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`relative group overflow-hidden rounded-2xl
                border shadow-lg hover:shadow-2xl transition-all duration-500 backdrop-blur-lg
                ${
                  theme === "dark"
                    ? "bg-gray-800/50 border-gray-700 hover:bg-gray-700/50"
                    : "bg-white/50 border-gray-300 hover:bg-gray-100/50"
                }`}
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              <div className="relative overflow-hidden aspect-video">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay tetap gelap untuk kontras dengan teks di atasnya */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 dark:from-gray-900/90 via-black/50 dark:via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink size={20} />
                      <span>Live Demo</span>
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiGithub size={20} />
                      <span>Source Code</span>
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) =>
                    tech.logo ? (
                      <motion.div
                        key={index}
                        className={`flex items-center gap-2 px-7 py-1 rounded-full border border-gray-200 dark:border-gray-700 transition-colors duration-300 ${
                          theme === "dark"
                            ? "bg-gray-800 hover:bg-gray-700"
                            : "bg-gray-100 hover:bg-gray-200"
                        }`}
                        whileHover={{ scale: 1.05 }}
                      >
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-10 h-9"
                          title={tech.name}
                        />
                      </motion.div>
                    ) : (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${project.gradient} text-white`}
                      >
                        {tech.name}
                      </span>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Project;
