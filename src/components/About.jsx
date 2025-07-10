import { useState, useContext } from "react";
import { motion } from "framer-motion";
import {
  FaDownload,
  FaUniversity,
  FaUsers,
  FaLightbulb,
  FaTools,
  FaCode,
  FaPaintBrush,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import profilePhoto from "../assets/foto-fe2.png";
import { ThemeContext } from "../context/ThemeContext";

const cvFile =
  "https://drive.google.com/drive/folders/18KZ0E2bgGptOEGsjfsy3iwFmtZYpdKaM?usp=sharing"; // PERUBAHAN: Tautan Google Drive

function About() {
  const { theme } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState("academic");

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const techIconVariants = {
    initial: { y: 0, opacity: 0 },
    animate: {
      y: [0, -15, 0],
      opacity: 1,
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay: Math.random() * 3,
      },
    },
    hover: {
      scale: 1.2,
      filter: "drop-shadow(0px 0px 8px rgba(139, 92, 246, 0.7))",
    },
  };

  const tabContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="about"
      className="relative py-20 lg:py-32 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      {theme === "dark" && (
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      )}

      {theme === "dark" && (
        <>
          {[
            { icon: FaHtml5, color: "text-orange-500", top: "10%", left: "5%" },
            {
              icon: FaCss3Alt,
              color: "text-blue-500",
              top: "20%",
              left: "80%",
            },
            {
              icon: FaJsSquare,
              color: "text-yellow-500",
              top: "50%",
              left: "10%",
            },
            { icon: FaReact, color: "text-blue-400", top: "70%", left: "85%" },
            {
              icon: SiTailwindcss,
              color: "text-teal-400",
              top: "30%",
              left: "40%",
            },
            { icon: FaFigma, color: "text-pink-500", top: "85%", left: "20%" },
            { icon: FaGithub, color: "text-gray-400", top: "5%", left: "60%" },
            {
              icon: FaLinkedin,
              color: "text-blue-600",
              top: "90%",
              left: "50%",
            },
          ].map((tech, index) => (
            <motion.div
              key={index}
              className={`absolute ${tech.color} opacity-80`}
              variants={techIconVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              style={{
                top: tech.top,
                left: tech.left,
                fontSize: "2.5rem",
                zIndex: 1,
              }}
            >
              <tech.icon />
            </motion.div>
          ))}
        </>
      )}

      <div className="container mx-auto relative z-10">
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
          variants={itemVariants}
        >
          {"Who am I?".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index, duration: 0.3 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            className="flex justify-center lg:justify-end relative p-4"
            variants={itemVariants}
          >
            <div
              className={`relative w-full max-w-sm lg:max-w-md rounded-3xl p-6 shadow-2xl backdrop-blur-md border border-purple-700/50 overflow-hidden
                            ${
                              theme === "dark"
                                ? "bg-purple-800/30 to-blue-800/30"
                                : "bg-gray-100/30 border-purple-300/50"
                            }`}
            >
              <motion.img
                src={profilePhoto}
                alt="Fendyra Restu Dewangga Profile"
                className="w-full h-auto object-cover rounded-2xl shadow-lg"
                whileHover={{ scale: 1.02, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
          </motion.div>

          <motion.div
            className="text-center lg:text-left"
            variants={itemVariants}
          >
            <div className="flex justify-center lg:justify-start space-x-4 mb-8">
              <motion.button
                className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                  activeTab === "academic"
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 text-gray-800 bg-gray-200 hover:bg-gray-300"
                }`}
                onClick={() => setActiveTab("academic")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Academic
              </motion.button>
              <motion.button
                className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                  activeTab === "organizational"
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 text-gray-800 bg-gray-200 hover:bg-gray-300"
                }`}
                onClick={() => setActiveTab("organizational")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Roles
              </motion.button>
              <motion.button
                className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                  activeTab === "skills"
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 text-gray-800 bg-gray-200 hover:bg-gray-300"
                }`}
                onClick={() => setActiveTab("skills")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Skills
              </motion.button>
            </div>

            <motion.div
              key={activeTab}
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              className={`backdrop-blur-lg rounded-xl p-6 border shadow-xl min-h-[200px] flex flex-col justify-center
                          ${
                            theme === "dark"
                              ? "bg-gray-800/50 border-gray-700"
                              : "bg-gray-50/50 border-gray-300"
                          }`}
            >
              {activeTab === "academic" && (
                <div className="space-y-4">
                  <p className="text-lg text-gray-300 flex items-center gap-3 mb-4">
                    <FaUniversity className="text-purple-400 text-2xl" />
                    Student at Universitas Pembangunan "Nasional" Veteran
                    Yogyakarta
                  </p>
                  <p className="text-base text-gray-300 text-justify leading-relaxed">
                    I’m a 5th-semester Information Systems student at
                    Universitas Pembangunan "Nasional" Veteran Yogyakarta with a
                    strong passion for front-end web development, User Interface
                    Design, and Web Design. My academic journey has equipped me
                    with a solid foundation in both technical and analytical
                    thinking, enabling me to approach digital challenges with a
                    balance of logic, creativity, and user empathy. Through my
                    studies, I’ve developed a keen interest in creating web
                    experiences that are not only functional and responsive but
                    also visually intuitive and user-friendly. Beyond the
                    classroom, I actively contribute to campus life as a member
                    of HIMASISFO and various student committees, where I’ve
                    sharpened my collaboration, leadership, and communication
                    skills. These experiences have shaped my adaptability and
                    attention to detail, and fueled my drive to keep learning
                    and growing as a developer. I’m excited by the opportunity
                    to turn ideas into impactful digital solutions, and I’m
                    always eager to take part in meaningful projects that push
                    my skills forward and bring value to real users.
                  </p>
                </div>
              )}
              {activeTab === "organizational" && (
                <div className="space-y-4">
                  <p className="text-lg text-gray-300 flex items-center gap-3">
                    <FaUsers className="text-pink-400 text-2xl" />
                    Active Member of HIMASISFO
                  </p>
                  <p className="text-lg text-gray-300 flex items-center gap-3">
                    <FaLightbulb className="text-yellow-400 text-2xl" />
                    Involved in various student organizations & committees
                  </p>
                </div>
              )}
              {activeTab === "skills" && (
                <div className="grid grid-cols-2 gap-4 text-center">
                  <motion.div
                    className="bg-gray-700/70 p-3 rounded-lg flex flex-col items-center justify-center gap-2"
                    whileHover={{ scale: 1.05, backgroundColor: "#4a5568" }}
                  >
                    <FaTools className="text-green-400 text-3xl" />
                    <span className="text-md font-medium">Collaboration</span>
                  </motion.div>
                  <motion.div
                    className="bg-gray-700/70 p-3 rounded-lg flex flex-col items-center justify-center gap-2"
                    whileHover={{ scale: 1.05, backgroundColor: "#4a5568" }}
                  >
                    <FaCode className="text-blue-400 text-3xl" />
                    <span className="text-md font-medium">Coding</span>
                  </motion.div>
                  <motion.div
                    className="bg-gray-700/70 p-3 rounded-lg flex flex-col items-center justify-center gap-2"
                    whileHover={{ scale: 1.05, backgroundColor: "#4a5568" }}
                  >
                    <FaPaintBrush className="text-red-400 text-3xl" />
                    <span className="text-md font-medium">Design Thinking</span>
                  </motion.div>
                  <motion.div
                    className="bg-gray-700/70 p-3 rounded-lg flex flex-col items-center justify-center gap-2"
                    whileHover={{ scale: 1.05, backgroundColor: "#4a5568" }}
                  >
                    <FaLightbulb className="text-yellow-400 text-3xl" />
                    <span className="text-md font-medium">Leadership</span>
                  </motion.div>
                </div>
              )}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-10"
              variants={itemVariants}
            >
              <a
                href={cvFile}
                download="CV_MUHAMMAD_FARHAN_NABIL.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out group"
              >
                <FaDownload className="mr-3 text-xl group-hover:animate-bounce-once" />
                View Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
