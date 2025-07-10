import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { useContext } from "react"; // Import useContext
import { ThemeContext } from "../context/ThemeContext"; // Import ThemeContext

function Footer() {
  const { theme } = useContext(ThemeContext); // Gunakan theme dari context
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        delay: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.1, color: "var(--hover-color)" },
  };

  return (
    <motion.footer
      id="footer"
      className="relative py-12 lg:py-16 px-4 sm:px-8 lg:px-16 overflow-hidden
                         border-t-2 border-purple-700/50 shadow-inner-top" // HAPUS bg-black text-white
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={footerVariants}
    >
      {/* Background Gradient Overlay - Conditional for dark mode */}
      {theme === "dark" && ( // TAMBAHKAN KONDISI INI
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      )}

      <div className="container mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
        <motion.div
          className="flex flex-col items-center md:items-start"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Fendyfolio
          </h3>{" "}
          {/* SESUAIKAN WARNA TEKS */}
          <p className="text-sm text-gray-700 dark:text-gray-400">
            {" "}
            {/* SESUAIKAN WARNA TEKS */}
            Crafting code, creating experiences.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4"
          variants={itemVariants}
        >
          <a
            href="#home"
            className="text-gray-700 hover:text-purple-400 dark:text-gray-300 transition-colors" // SESUAIKAN WARNA TEKS
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-purple-400 dark:text-gray-300 transition-colors" // SESUAIKAN WARNA TEKS
          >
            About
          </a>
          <a
            href="#skills"
            className="text-gray-700 hover:text-purple-400 dark:text-gray-300 transition-colors" // SESUAIKAN WARNA TEKS
          >
            Skills
          </a>
          <a
            href="#services"
            className="text-gray-700 hover:text-purple-400 dark:text-gray-300 transition-colors" // SESUAIKAN WARNA TEKS
          >
            Services
          </a>
          <a
            href="#certificate"
            className="text-gray-700 hover:text-purple-400 dark:text-gray-300 transition-colors" // SESUAIKAN WARNA TEKS
          >
            Certificate
          </a>
          <a
            href="#project"
            className="text-gray-700 hover:text-purple-400 dark:text-gray-300 transition-colors" // SESUAIKAN WARNA TEKS
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-purple-400 dark:text-gray-300 transition-colors" // SESUAIKAN WARNA TEKS
          >
            Contact
          </a>
        </motion.div>

        <motion.div
          className="flex justify-center md:justify-end gap-6"
          variants={itemVariants}
        >
          <motion.a
            href="https://www.instagram.com/fendyrard/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-pink-400 dark:text-gray-300 transition-colors duration-300" // SESUAIKAN WARNA TEKS
            whileHover="hover"
            custom={{ "--hover-color": "#c13584" }}
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </motion.a>
          <motion.a
            href="https://github.com/Fendyra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-400 dark:text-gray-300 transition-colors duration-300" // SESUAIKAN WARNA TEKS
            whileHover="hover"
            custom={{ "--hover-color": "#6e5494" }}
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/fendyra-dewangga/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-green-400 dark:text-gray-300 transition-colors duration-300" // SESUAIKAN WARNA TEKS
            whileHover="hover"
            custom={{ "--hover-color": "#0077B5" }}
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="mt-8 pt-6 border-t border-gray-700/50 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500"
        variants={itemVariants}
      >
        <p className="text-gray-700 dark:text-gray-500">
          {" "}
          {/* SESUAIKAN WARNA TEKS */}
          By Fendyra Restu Dewangga &copy; {currentYear}. All rights reserved.
        </p>
        <motion.button
          onClick={scrollToTop}
          className={`mt-4 sm:mt-0 p-3 rounded-full hover:bg-purple-600 transition-colors duration-300 shadow-lg ${
            theme === "dark" ? "bg-gray-700/50" : "bg-gray-200/50"
          }`} // SESUAIKAN BG
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <FaArrowUp className="text-gray-900 dark:text-white" size={18} />{" "}
          {/* SESUAIKAN WARNA IKON */}
        </motion.button>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
