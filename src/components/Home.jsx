import { useState, useEffect, useContext } from "react"; // Tambahkan useContext
import {
  FaInstagram,
  FaGithub,
  FaWhatsapp,
  FaLinkedin,
  FaTimes,
} from "react-icons/fa";
import { motion } from "framer-motion";
import profilePhoto from "../assets/foto_fe.png";
import { ThemeContext } from "../context/ThemeContext"; // Import ThemeContext

function Home() {
  const { theme } = useContext(ThemeContext); // Gunakan theme dari context
  const [displayName, setDisplayName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fullName = "Fendyra Restu Dewangga";
  const typingSpeed = 150;
  const delayBeforeRestart = 2000;

  const [techTags] = useState([
    {
      id: 1,
      name: "HTML",
      color: "bg-orange-500",
      icon: "M10 20l4-16h2l-4 16h-2zm8.5-16l-5 16h-2l5-16h2z",
    },
    {
      id: 2,
      name: "CSS",
      color: "bg-blue-500",
      icon: "M10 20l4-16h2l-4 16h-2zm8.5-16l-5 16h-2l5-16h2z",
    },
    {
      id: 3,
      name: "Tailwind",
      color: "bg-teal-500",
      icon: "M10 20l4-16h2l-4 16h-2zm8.5-16l-5 16h-2l5-16h2z",
    },
    {
      id: 4,
      name: "JavaScript",
      color: "bg-yellow-500",
      icon: "M10 20l4-16h2l-4 16h-2zm8.5-16l-5 16h-2l5-16h2z",
    },
    {
      id: 5,
      name: "React",
      color: "bg-blue-400",
      icon: "M10 20l4-16h2l-4 16h-2zm8.5-16l-5 16h-2l5-16h2z",
    },
    {
      id: 6,
      name: "Figma",
      color: "bg-purple-500",
      icon: "M10 20l4-16h2l-4 16h-2zm8.5-16l-5 16h-2l5-16h2z",
    },
  ]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 10 },
    },
    hover: { scale: 1.3, color: "var(--hover-color)" },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        delay: 0.5,
      },
    },
  };

  const tagVariants = {
    initial: { y: 0, opacity: 0 },
    animate: {
      y: [0, -10, 0],
      opacity: 1,
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay: Math.random() * 2,
      },
    },
    hover: { scale: 1.1, boxShadow: "0px 0px 10px rgba(255,255,255,0.5)" },
  };

  useEffect(() => {
    let index = 0;
    let forward = true;

    const typeEffect = () => {
      if (forward) {
        setDisplayName(fullName.substring(0, index));
        index++;
        if (index > fullName.length) {
          forward = false;
          setTimeout(typeEffect, delayBeforeRestart);
          return;
        }
      } else {
        setDisplayName(fullName.substring(0, index));
        index--;
        if (index < 0) {
          forward = true;
        }
      }
      setTimeout(typeEffect, typingSpeed);
    };

    typeEffect();
  }, []);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      return "Good Morning";
    } else if (hour >= 12 && hour < 15) {
      return "Good Afternoon";
    } else if (hour >= 15 && hour < 18) {
      return "Good Evening";
    } else {
      return "Good Night";
    }
  };

  const handleContactMeClick = () => {
    setIsModalOpen(true);
  };

  const handleOptionSelect = (type) => {
    const greeting = getGreeting();
    let message = "";

    if (type === "recruitment") {
      message = `${greeting}, Fendyra.\n\nPerkenalkan, saya [Nama HRD/HR] dari [PT APA]. Kami tertarik dengan portofolio Anda sebagai Full Stack Developer, terutama pada proyek-proyek yang Anda kerjakan sebelumnya yang terlihat sangat inovatif.\n\nKami ingin menawarkan Anda posisi sebagai Full Stack Developer di perusahaan kami, dengan fokus pada pengembangan antarmuka aplikasi web modern dan responsif. Jika Anda tertarik, kami dapat mendiskusikan lebih lanjut mengenai detail pekerjaan ini dan proses seleksi.\n\nApakah Anda memiliki waktu untuk berdiskusi lebih lanjut?`;
    } else {
      message = `${greeting}, Fendyra.\n\nSaya ingin menghubungi Anda untuk berdiskusi lebih lanjut mengenai proyek yang Anda kerjakan. Saya sangat tertarik dengan portofolio Anda, dan saya rasa ada potensi kolaborasi yang menarik.\n\nApakah Anda memiliki waktu untuk berbincang lebih lanjut?`;
    }

    const whatsappUrl = `https://wa.me/6285602683420?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
    setIsModalOpen(false);
  };

  return (
    <motion.section
      id="home"
      className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 sm:px-8 md:px-16 py-20 lg:py-0 overflow-hidden" // HAPUS bg-black
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {/* Background Gradient Overlay - Conditional for dark mode */}
      {theme === "dark" && ( // TAMBAHKAN KONDISI INI
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      )}

      {/* Floating Tech Tags */}
      {/* Pertimbangkan untuk membuat warna techTags menjadi theme-aware atau menghapusnya di light mode jika tidak cocok */}
      {techTags.map((tag) => (
        <motion.div
          key={tag.id}
          className={`absolute ${tag.color} text-white text-sm px-3 py-1 rounded-full shadow-lg flex items-center gap-1`}
          variants={tagVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 80}%`,
            zIndex: 1,
          }}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-6h-2v6zm0-8h2V7h-2v2z" />
          </svg>
          {tag.name}
        </motion.div>
      ))}

      {/* Content Area */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-12 lg:gap-24">
        {/* Left Section: Text Content & Social Icons */}
        <motion.div
          className="w-full lg:w-3/5 text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.h3
            className="text-purple-700 dark:text-purple-300 font-medium mb-2" // SESUAIKAN WARNA TEKS
            variants={textVariants}
          >
            {getGreeting()}, I&apos;m
          </motion.h3>
          <motion.h1
            className="text-gray-900 dark:text-white leading-tight mb-4 tracking-tight text-4xl sm:text-5xl lg:text-7xl font-extrabold" // SESUAIKAN WARNA TEKS
            variants={textVariants}
          >
            <span className="relative inline-block">
              {displayName}
              <motion.span
                className="absolute right-0 top-0 bottom-0 w-1 bg-gray-900 dark:bg-white animate-blink" // SESUAIKAN WARNA BLINKER
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  repeat: Infinity,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
              />
            </span>
          </motion.h1>
          <motion.h2
            className="text-blue-700 dark:text-blue-300 font-semibold mb-6 text-xl sm:text-2xl lg:text-3xl" // SESUAIKAN WARNA TEKS
            variants={textVariants}
          >
            Front-End Developer & UI/Web Designer
          </motion.h2>
          <motion.p
            className="text-gray-700 dark:text-gray-300 max-w-xl mb-8 leading-relaxed text-base sm:text-lg" // SESUAIKAN WARNA TEKS
            variants={textVariants}
          >
            Passionate about crafting responsive, accessible, and meaningful web
            experiences. I blend creativity and technology to turn ideas into
            seamless digital interfaces that not only work, but feel right.
            Let’s build something meaningful.
          </motion.p>

          <motion.button
            onClick={handleContactMeClick}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out flex items-center gap-3 group"
            variants={textVariants}
            whileHover={{
              backgroundPosition: "100% 0",
              boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
              scale: 1.05,
            }}
            style={{ backgroundSize: "200% auto" }}
          >
            Let's Collaborate
            <FaWhatsapp className="w-6 h-6 group-hover:rotate-6 transition-transform duration-300" />
          </motion.button>

          <motion.div
            className="flex space-x-6 mt-10"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.8,
                },
              },
            }}
          >
            <motion.a
              href="https://www.instagram.com/fendyrard/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-purple-400 dark:text-gray-400 transition-colors duration-300" // SESUAIKAN WARNA TEKS
              variants={socialIconVariants}
              whileHover="hover"
              custom={{ "--hover-color": "#c13584" }}
              aria-label="Instagram"
            >
              <FaInstagram size={32} />
            </motion.a>
            <motion.a
              href="https://github.com/Fendyra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-400 dark:text-gray-400 transition-colors duration-300" // SESUAIKAN WARNA TEKS
              variants={socialIconVariants}
              whileHover="hover"
              custom={{ "--hover-color": "#6e5494" }}
              aria-label="GitHub"
            >
              <FaGithub size={32} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/fendyra-dewangga/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-400 dark:text-gray-400 transition-colors duration-300" // SESUAIKAN WARNA TEKS
              variants={socialIconVariants}
              whileHover="hover"
              custom={{ "--hover-color": "#0077B5" }}
              aria-label="LinkedIn"
            >
              <FaLinkedin size={32} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Section: Stylized Profile Image / Illustration */}
        <motion.div
          className="w-full lg:w-2/5 flex justify-center lg:justify-end order-1 lg:order-2 relative"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 p-2 shadow-2xl backdrop-blur-md flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 rounded-full border-4 border-purple-400/50 animate-pulse-slow"></div>
            <motion.img
              src={profilePhoto}
              alt="Fendyra Restu Dewangga Profile"
              className="w-full h-full object-cover rounded-full z-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            />
            {/* Abstract shapes around the image for visual interest */}
            {theme === "dark" && ( // TAMBAHKAN KONDISI INI
              <>
                <motion.div
                  className="absolute -top-8 -left-8 w-24 h-24 bg-blue-400/20 rounded-full filter blur-xl"
                  animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 8,
                    ease: "easeInOut",
                  }}
                ></motion.div>
                <motion.div
                  className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-400/20 rounded-full filter blur-xl"
                  animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                ></motion.div>
              </>
            )}
          </div>
        </motion.div>
      </div>

      {/* Contact Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-gray-800 border border-purple-700 p-6 sm:p-8 rounded-xl shadow-2xl max-w-md w-full mx-auto transform"
            initial={{ scale: 0.8, y: -50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: -50 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-400 transition duration-200"
              aria-label="Close modal"
            >
              <FaTimes size={28} />
            </button>

            <h2 className="text-3xl text-center text-white font-bold mb-8">
              Select Message Category
            </h2>

            <div className="space-y-4">
              <motion.button
                onClick={() => handleOptionSelect("recruitment")}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-purple-700 transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center gap-3"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-1.04-8.704-2.745M9 6a3 3 0 11-6 0 3 3 0 016 0zm12 0a3 3 0 11-6 0 3 3 0 016 0zm-9 12a3 3 0 11-6 0 3 3 0 016 0zm9 0a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                Candidate Search
              </motion.button>
              <motion.button
                onClick={() => handleOptionSelect("general")}
                className="w-full py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white text-xl font-semibold rounded-lg shadow-md hover:from-green-700 hover:to-teal-700 transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center gap-3"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  ></path>
                </svg>
                General Questions
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
}

export default Home;
