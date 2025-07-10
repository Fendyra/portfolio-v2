import { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGraduationCap,
  FaAward,
  FaLink,
  FaCalendarAlt,
  FaCode,
  FaTimes,
} from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

import certificate1 from "../assets/sertifikat1.png";

function Certificate() {
  const { theme } = useContext(ThemeContext);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "Front-End Web Developer by RevoU",
      issuer: "RevoU Academy",
      date: "Feb 2024",
      credentialLink:
        "https://drive.google.com/file/d/1Ev4ahh57TB-_NdjDlvAKeuGPWK9NpkSv/view?usp=drivesdk",
      image: certificate1,
      skills: ["HTML", "CSS", "JavaScript", "Responsive Web Design"],
      category: "Frontend",
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
    hidden: { opacity: 0, scale: 0.8, rotateY: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 30px rgba(139, 92, 246, 0.7)",
      transition: { duration: 0.3 },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
    exit: { opacity: 0, scale: 0.7, transition: { duration: 0.2 } },
  };

  const openLightbox = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeLightbox = () => {
    setSelectedCertificate(null);
  };

  return (
    <motion.section
      id="certificate"
      className="relative py-20 lg:py-32 px-4 sm:px-8 lg:px-16 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      {/* Background Gradient Overlay - Conditional for dark mode */}
      {theme === "dark" && (
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
          My Certifications
        </motion.h2>
        <motion.p
          className="text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-lg sm:text-xl"
          variants={sectionVariants}
        >
          Key milestones and validated skills on my development journey.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              className={`relative w-full max-w-sm rounded-xl p-4 border shadow-xl cursor-pointer overflow-hidden backdrop-blur-lg
                               ${
                                 theme === "dark"
                                   ? "bg-gray-800/50 border-purple-700/50"
                                   : "bg-gray-50/50 border-purple-300/50"
                               }`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
              onClick={() => openLightbox(cert)}
            >
              <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                <FaAward className="inline-block mr-1" /> Verified
              </div>

              <div className="aspect-w-16 aspect-h-9 w-full h-auto rounded-lg overflow-hidden mb-4 border border-gray-700">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center justify-center">
                <FaGraduationCap className="mr-2 text-blue-400" /> {cert.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-1 flex items-center justify-center">
                <FaAward className="mr-2 text-green-400" /> Issued by:{" "}
                {cert.issuer}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-xs flex items-center justify-center">
                <FaCalendarAlt className="mr-2 text-pink-400" /> Date:{" "}
                {cert.date}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {cert.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    // PERBAIKAN: Gabungkan kelas dalam satu string dan hapus komentar di baris yang sama
                    className={`text-xs px-2 py-1 rounded-full ${
                      theme === "dark"
                        ? "bg-gray-700 text-gray-300"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className={`relative rounded-xl p-6 shadow-2xl max-w-3xl w-full border overflow-y-auto max-h-[90vh]
                               ${
                                 theme === "dark"
                                   ? "bg-gray-900 border-purple-700"
                                   : "bg-white border-purple-300"
                               }`}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors duration-200"
                aria-label="Close modal"
              >
                <FaTimes size={28} />
              </button>

              <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="w-full h-auto object-contain rounded-lg border border-gray-700"
                  />
                </div>
                <div className="w-full lg:w-1/2 text-left">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                    <FaGraduationCap className="mr-3 text-blue-400" />{" "}
                    {selectedCertificate.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2 flex items-center text-lg">
                    <FaAward className="mr-3 text-green-400" /> Issued by:{" "}
                    {selectedCertificate.issuer}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 mb-4 flex items-center text-md">
                    <FaCalendarAlt className="mr-3 text-pink-400" /> Date:{" "}
                    {selectedCertificate.date}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-2 flex items-center">
                      <FaCode className="mr-2" /> Skills Learned:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCertificate.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          // PERBAIKAN: Gabungkan kelas dalam satu string dan hapus komentar di baris yang sama
                          className={`text-sm px-3 py-1 rounded-full ${
                            theme === "dark"
                              ? "bg-gray-700 text-gray-300"
                              : "bg-gray-200 text-gray-800"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedCertificate.credentialLink && (
                    <a
                      href={selectedCertificate.credentialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out mt-4"
                    >
                      <FaLink className="mr-2" /> View Credential
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

export default Certificate;
