import { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";

// Import skill images
import bootstrap from "../assets/bootstrap.png";
import tailwindcss from "../assets/tailwindcss.png";
import css3 from "../assets/css-3.png";
import figma from "../assets/figma.png";
import html5 from "../assets/html-5.png";
import js from "../assets/js.png";
import php from "../assets/php.png";
import vite from "../assets/vite.png";
import laravel from "../assets/laravel.svg";
import nextjs from "../assets/nextjs.png";
import github from "../assets/github.png";
import git from "../assets/git.png";
import mysql from "../assets/mysql.png";
import vercel from "../assets/vercel.png";
import cplus from "../assets/cplus.png";

const allSkills = [
  {
    name: "HTML5",
    image: html5,
    color: "#E34F26",
    category: "Frontend",
    confidence: 5,
  },
  {
    name: "CSS3",
    image: css3,
    color: "#1572B6",
    category: "Frontend",
    confidence: 5,
  },
  {
    name: "JavaScript",
    image: js,
    color: "#F7DF1E",
    category: "Frontend",
    confidence: 5,
  },
  {
    name: "React",
    image: nextjs,
    color: "#61DAFB",
    category: "Frontend",
    confidence: 4,
  },
  {
    name: "Next.js",
    image: nextjs,
    color: "#000000",
    category: "Frontend",
    confidence: 4,
  },
  {
    name: "TailwindCSS",
    image: tailwindcss,
    color: "#06B6D4",
    category: "Frontend",
    confidence: 5,
  },
  {
    name: "Bootstrap",
    image: bootstrap,
    color: "#7952B3",
    category: "Frontend",
    confidence: 4,
  },
  {
    name: "PHP",
    image: php,
    color: "#777BB4",
    category: "Backend",
    confidence: 3,
  },
  {
    name: "Laravel",
    image: laravel,
    color: "#FF2D20",
    category: "Backend",
    confidence: 3,
  },
  {
    name: "MySQL",
    image: mysql,
    color: "#4479A1",
    category: "Backend",
    confidence: 3,
  },
  {
    name: "Git",
    image: git,
    color: "#F05032",
    category: "Tools",
    confidence: 4,
  },
  {
    name: "GitHub",
    image: github,
    color: "#181717",
    category: "Tools",
    confidence: 4,
  },
  {
    name: "Vercel",
    image: vercel,
    color: "#000000",
    category: "Tools",
    confidence: 4,
  },
  {
    name: "Vite",
    image: vite,
    color: "#646CFF",
    category: "Tools",
    confidence: 3,
  },
  {
    name: "Figma",
    image: figma,
    color: "#F24E1E",
    category: "Design",
    confidence: 4,
  },
  {
    name: "C++",
    image: cplus,
    color: "#00599C",
    category: "Other",
    confidence: 2,
  },
];

function StarRating({ rating }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span
        key={i}
        className={i < rating ? "text-yellow-400" : "text-gray-600"}
      >
        ★
      </span>
    );
  }
  return <div className="flex justify-center text-xl">{stars}</div>;
}

function SkillCard({ skill }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const { theme } = useContext(ThemeContext);

  const cardBgColor = theme === "dark" ? "bg-gray-800" : "bg-white";
  const glowColor = skill.color;

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.1,
      boxShadow: `0 0 30px ${glowColor}80`,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className={`relative flex flex-col items-center justify-center p-4 rounded-xl cursor-pointer
                         border border-transparent hover:border-purple-500 transition-all duration-300
                         ${cardBgColor} text-gray-900 dark:text-white overflow-hidden`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      style={{
        background:
          theme === "dark"
            ? `rgba(31, 41, 55, 0.6)`
            : `rgba(255, 255, 255, 0.6)`,
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      {skill.name === "JavaScript" && (
        <span className="absolute inset-0 rounded-xl bg-yellow-500/30 animate-pulse-ring z-0"></span>
      )}

      {skill.image ? (
        <img
          src={skill.image}
          alt={skill.name}
          className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-2 relative z-10"
        />
      ) : (
        <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-4xl mb-2 relative z-10">
          {skill.name === "REST API" && (
            <span className="text-gray-400">API</span>
          )}
          {skill.name === "UI/UX Tools" && (
            <span className="text-gray-400">UI/UX</span>
          )}
        </div>
      )}

      <span className="text-sm sm:text-base font-semibold relative z-10 text-gray-900 dark:text-white">
        {" "}
        {/* SESUAIKAN WARNA TEKS */}
        {skill.name}
      </span>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            className="absolute bottom-full mb-2 p-2 bg-gray-900 text-white text-xs rounded-md shadow-lg whitespace-nowrap z-20"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-center font-bold mb-1">{skill.name}</p>
            <StarRating rating={skill.confidence} />
            <div className="absolute left-1/2 -bottom-1 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 transform -translate-x-1/2"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function Skills() {
  const { theme } = useContext(ThemeContext);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(allSkills.map((skill) => skill.category)),
  ];

  const filteredSkills =
    activeCategory === "All"
      ? allSkills
      : allSkills.filter((skill) => skill.category === activeCategory);

  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <motion.section
      id="skills"
      className="relative py-20 lg:py-32 px-4 sm:px-8 lg:px-16 overflow-hidden" // HAPUS bg-black text-white
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
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
      }}
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
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          My Expertise
        </motion.h2>
        <motion.p
          className="text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-lg sm:text-xl" // SESUAIKAN WARNA TEKS
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 0.6 },
            },
          }}
        >
          A glimpse into the technologies and tools I wield to build engaging
          web experiences.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300
                             ${
                               activeCategory === category
                                 ? "bg-purple-600 text-white shadow-lg"
                                 : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600" // SESUAIKAN WARNA BUTTON
                             }`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center"
          variants={gridContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="wait">
            {" "}
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Skills;
