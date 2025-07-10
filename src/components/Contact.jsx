import React, { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaInstagram,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
  FaPaperPlane,
  FaTimes,
} from "react-icons/fa";
import emailjs from "emailjs-com";
import { ThemeContext } from "../context/ThemeContext";

function Contact() {
  const { theme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [messageWordCount, setMessageWordCount] = useState(0);
  const maxWordLimit = 500;
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    // AOS.init({ ... }); // Jika AOS tidak digunakan, bisa dihapus
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "message") {
      const words = value.trim().split(/\s+/).filter(Boolean);
      const currentWordCount = words.length;
      setMessageWordCount(currentWordCount);

      if (currentWordCount > maxWordLimit) {
        setStatusMessage({
          type: "error",
          text: `Word limit exceeded! Maximum ${maxWordLimit} words allowed.`,
        });
        setShowStatusModal(true);
        setFormData({
          ...formData,
          [name]: words.slice(0, maxWordLimit).join(" "),
        });
        return;
      }
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage({ type: "error", text: "Please fill in all fields." });
      setShowStatusModal(true);
      return;
    }

    try {
      await emailjs.send(
        "service_rkbaiya", // Your Service ID
        "template_7bghmex", // Your Template ID
        {
          from_name: formData.name,
          message: formData.message,
          email: formData.email,
          to_name: "Fendyra",
        },
        "mEbd9WRZIqlcbJCBd" // Your User ID (Public Key)
      );

      setStatusMessage({
        type: "success",
        text: "Your message has been sent successfully! We will contact you soon.",
      });
      setShowStatusModal(true);
      setFormData({ name: "", email: "", message: "" });
      setMessageWordCount(0);
    } catch (error) {
      console.error("Failed to send message:", error);
      setStatusMessage({
        type: "error",
        text: "Failed to send message. Please try again later.",
      });
      setShowStatusModal(true);
    }
  };

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

  const formFieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    focus: { scale: 1.01, boxShadow: "0px 0px 15px rgba(139, 92, 246, 0.6)" },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 10 },
    },
    hover: {
      scale: 1.2,
      filter: "drop-shadow(0px 0px 8px rgba(139, 92, 246, 0.7))",
    },
  };

  const submitButtonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
    hover: { scale: 1.05, boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.8)" },
    tap: { scale: 0.95 },
  };

  const getProgressBarColor = () => {
    const percentage = (messageWordCount / maxWordLimit) * 100;
    if (percentage > 90) return "bg-red-500";
    if (percentage > 70) return "bg-orange-500";
    return "bg-blue-500";
  };

  return (
    <motion.section
      id="contact"
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
          Contact Me
        </motion.h2>
        <motion.p
          className="text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-lg sm:text-xl" // SESUAIKAN WARNA TEKS
          variants={sectionVariants}
        >
          Have a project in mind or just want to say hello? Feel free to reach
          out. I'm always open to new opportunities and collaborations!
        </motion.p>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center lg:items-start">
          <motion.div
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
            variants={sectionVariants}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {" "}
              {/* SESUAIKAN WARNA TEKS */}
              Connect with me:
            </h3>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              <motion.a
                href="https://wa.me/6285602683420"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-gray-500 hover:text-green-400 dark:text-gray-300 transition-colors duration-300 group" // SESUAIKAN WARNA TEKS
                variants={socialIconVariants}
                whileHover="hover"
              >
                <FaWhatsapp
                  size={40}
                  className="mb-2 group-hover:scale-110 transition-transform"
                />
                <span className="text-sm">WhatsApp</span>
              </motion.a>
              <motion.a
                href="https://www.instagram.com/fendyrard/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-gray-500 hover:text-pink-400 dark:text-gray-300 transition-colors duration-300 group" // SESUAIKAN WARNA TEKS
                variants={socialIconVariants}
                whileHover="hover"
              >
                <FaInstagram
                  size={40}
                  className="mb-2 group-hover:scale-110 transition-transform"
                />
                <span className="text-sm">Instagram</span>
              </motion.a>
              <motion.a
                href="https://github.com/Fendyra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-gray-500 hover:text-blue-400 dark:text-gray-300 transition-colors duration-300 group" // SESUAIKAN WARNA TEKS
                variants={socialIconVariants}
                whileHover="hover"
              >
                <FaGithub
                  size={40}
                  className="mb-2 group-hover:scale-110 transition-transform"
                />
                <span className="text-sm">GitHub</span>
              </motion.a>
              <motion.a
                href="mailto:fendyrarestu2004@gmail.com"
                className="flex flex-col items-center text-gray-500 hover:text-red-400 dark:text-gray-300 transition-colors duration-300 group" // SESUAIKAN WARNA TEKS
                variants={socialIconVariants}
                whileHover="hover"
              >
                <FaEnvelope
                  size={40}
                  className="mb-2 group-hover:scale-110 transition-transform"
                />
                <span className="text-sm">Email Me</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className={`w-full lg:w-1/2 rounded-xl p-8 shadow-2xl border ${
              theme === "dark"
                ? "bg-gray-800/50 border-purple-700/50"
                : "bg-gray-50/50 border-purple-300/50"
            } backdrop-blur-lg`} // SESUAIKAN BG & BORDER
            variants={sectionVariants}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              {" "}
              {/* SESUAIKAN WARNA TEKS */}
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                className="relative"
                variants={formFieldVariants}
                initial="hidden"
                animate="visible"
                whileFocus="focus"
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
              >
                <input
                  className={`w-full p-3 rounded-lg text-gray-900 dark:text-white border-2 transition-all duration-300 outline-none
                                  ${
                                    theme === "dark"
                                      ? "bg-gray-700/70"
                                      : "bg-gray-200/70"
                                  }
                                  ${
                                    focusedField === "name"
                                      ? "border-purple-500"
                                      : "border-transparent"
                                  }`} // SESUAIKAN BG & TEKS
                  type="text"
                  name="name"
                  placeholder=" "
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <label
                  htmlFor="name"
                  className={`absolute left-3 transition-all duration-300 pointer-events-none
                                  ${
                                    formData.name
                                      ? "top-0 text-xs text-purple-700 dark:text-purple-400 -translate-y-1/2 bg-gray-50 dark:bg-gray-800 px-1" // SESUAIKAN WARNA LABEL & BG
                                      : "top-1/2 text-base text-gray-500 dark:text-gray-400 -translate-y-1/2" // SESUAIKAN WARNA LABEL
                                  }`}
                >
                  Your Name
                </label>
              </motion.div>

              <motion.div
                className="relative"
                variants={formFieldVariants}
                initial="hidden"
                animate="visible"
                whileFocus="focus"
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
              >
                <input
                  className={`w-full p-3 rounded-lg text-gray-900 dark:text-white border-2 transition-all duration-300 outline-none
                                  ${
                                    theme === "dark"
                                      ? "bg-gray-700/70"
                                      : "bg-gray-200/70"
                                  }
                                  ${
                                    focusedField === "email"
                                      ? "border-purple-500"
                                      : "border-transparent"
                                  }`} // SESUAIKAN BG & TEKS
                  type="email"
                  name="email"
                  placeholder=" "
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <label
                  htmlFor="email"
                  className={`absolute left-3 transition-all duration-300 pointer-events-none
                                  ${
                                    formData.email
                                      ? "top-0 text-xs text-purple-700 dark:text-purple-400 -translate-y-1/2 bg-gray-50 dark:bg-gray-800 px-1" // SESUAIKAN WARNA LABEL & BG
                                      : "top-1/2 text-base text-gray-500 dark:text-gray-400 -translate-y-1/2" // SESUAIKAN WARNA LABEL
                                  }`}
                >
                  Your Email
                </label>
              </motion.div>

              <motion.div
                className="relative"
                variants={formFieldVariants}
                initial="hidden"
                animate="visible"
                whileFocus="focus"
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
              >
                <textarea
                  className={`w-full p-3 rounded-lg text-gray-900 dark:text-white border-2 transition-all duration-300 outline-none resize-y min-h-[120px]
                                  ${
                                    theme === "dark"
                                      ? "bg-gray-700/70"
                                      : "bg-gray-200/70"
                                  }
                                  ${
                                    focusedField === "message"
                                      ? "border-purple-500"
                                      : "border-transparent"
                                  }`} // SESUAIKAN BG & TEKS
                  rows="4"
                  name="message"
                  placeholder=" "
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
                <label
                  htmlFor="message"
                  className={`absolute left-3 transition-all duration-300 pointer-events-none
                                  ${
                                    formData.message
                                      ? "top-0 text-xs text-purple-700 dark:text-purple-400 -translate-y-1/2 bg-gray-50 dark:bg-gray-800 px-1" // SESUAIKAN WARNA LABEL & BG
                                      : "top-3 text-base text-gray-500 dark:text-gray-400" // SESUAIKAN WARNA LABEL
                                  }`}
                >
                  Your Message
                </label>
                <div className="absolute bottom-2 right-3 text-sm text-gray-700 dark:text-gray-400">
                  {" "}
                  {/* SESUAIKAN WARNA TEKS */}
                  <span
                    className={`${
                      messageWordCount > maxWordLimit
                        ? "text-red-500"
                        : getProgressBarColor().replace("bg-", "text-")
                    }`}
                  >
                    {messageWordCount}
                  </span>{" "}
                  / {maxWordLimit} words
                </div>
                <div className="w-full h-1 bg-gray-300 dark:bg-gray-700 rounded-full mt-2">
                  {" "}
                  {/* SESUAIKAN BG */}
                  <motion.div
                    className={`h-full rounded-full ${getProgressBarColor()}`}
                    initial={{ width: 0 }}
                    animate={{
                      width: `${(messageWordCount / maxWordLimit) * 100}%`,
                    }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                </div>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full flex justify-center items-center px-6 py-3 rounded-full text-white font-bold text-lg
                                 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg hover:shadow-xl transition-all duration-300"
                variants={submitButtonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
              >
                <FaPaperPlane className="mr-3 text-xl group-hover:animate-pulse-once" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showStatusModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowStatusModal(false)}
          >
            <motion.div
              className={`relative rounded-xl p-8 shadow-2xl max-w-md w-full text-center
                               border ${
                                 statusMessage.type === "success"
                                   ? "bg-green-700 border-green-500"
                                   : "bg-red-700 border-red-500"
                               }`}
              initial={{ scale: 0.8, y: -50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: -50 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowStatusModal(false)}
                className="absolute top-3 right-3 text-white hover:text-gray-200 transition-colors"
                aria-label="Close message"
              >
                <FaTimes size={24} />
              </button>
              <h3 className="text-2xl font-bold text-white mb-4">
                {statusMessage.type === "success" ? "Success!" : "Error!"}
              </h3>
              <p className="text-white text-lg mb-6">{statusMessage.text}</p>
              <button
                onClick={() => setShowStatusModal(false)}
                className="px-6 py-2 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-200 transition-colors"
              >
                OK
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

export default Contact;
