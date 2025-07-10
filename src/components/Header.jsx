import { useState, useEffect, useMemo } from "react"; // Tambahkan useMemo di sini
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { CgScreen } from "react-icons/cg";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import {
  BiUser,
  BiCode,
  BiPaint,
  BiCertification,
  BiFolder,
  BiMessageSquare,
  BiHomeAlt2,
} from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [theme, setTheme] = useState("system");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // Gunakan useMemo untuk memoize navLinks
  const navLinks = useMemo(
    () => [
      { id: "home", icon: BiHomeAlt2, label: "Home" },
      { id: "about", icon: BiUser, label: "About" },
      { id: "skills", icon: BiCode, label: "Skills" },
      { id: "services", icon: BiPaint, label: "Services" },
      { id: "certificate", icon: BiCertification, label: "Certificate" },
      { id: "project", icon: BiFolder, label: "Project" },
      { id: "contact", icon: BiMessageSquare, label: "Contact" },
    ],
    []
  ); // Array dependensi kosong agar navLinks hanya dibuat sekali

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "home";
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const { id } = navLinks[i];
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            currentSection = id;
            break;
          }
        }
      }
      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]); // Sekarang navLinks akan stabil dan tidak menyebabkan re-render yang tidak perlu

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme((prev) =>
      prev === "light" ? "dark" : prev === "dark" ? "system" : "light"
    );
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleLinkClick = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setActiveLink(sectionId);
    setIsMobileMenuOpen(false);
  };

  const linkClasses = (linkId) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
      activeLink === linkId
        ? "text-neon-purple bg-neon-purple/10"
        : "text-gray-300 hover:text-white hover:bg-gray-700/50"
    }`;

  const headerBgClass = theme === "light" ? "bg-white/30" : "bg-gray-900/30";

  return (
    <motion.header
      className={`fixed w-full z-50 backdrop-blur-md ${headerBgClass} border-b border-gray-800/50 shadow-[0_4px_6px_rgba(0,0,0,0.1)]`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3">
        <motion.div
          className="text-2xl font-bold text-white bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple cursor-pointer"
          onClick={() => handleLinkClick("home")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Fendyfolio
        </motion.div>

        <div className="md:hidden">
          <motion.button
            onClick={toggleMobileMenu}
            className="p-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-700/50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? (
              <RiCloseLine size={24} />
            ) : (
              <RiMenu4Line size={24} />
            )}
          </motion.button>
        </div>

        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map(({ id, icon: Icon, label }) => (
            <motion.a
              key={id}
              onClick={() => handleLinkClick(id)}
              className={linkClasses(id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={20} />
              <span>{label}</span>
            </motion.a>
          ))}
          <motion.button
            onClick={handleThemeSwitch}
            className="p-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-700/50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === "light" ? (
              <HiOutlineSun size={20} className="text-yellow-300" />
            ) : theme === "dark" ? (
              <HiOutlineMoon size={20} className="text-blue-300" />
            ) : (
              <CgScreen size={20} className="text-green-300" />
            )}
          </motion.button>
        </nav>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-x-0 top-16 bg-gray-900/90 backdrop-blur-md p-4 rounded-lg shadow-lg md:hidden"
            >
              <div className="flex flex-col space-y-2">
                {navLinks.map(({ id, icon: Icon, label }) => (
                  <motion.a
                    key={id}
                    onClick={() => handleLinkClick(id)}
                    className={linkClasses(id)}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={24} />
                    <span>{label}</span>
                  </motion.a>
                ))}
                <motion.button
                  onClick={handleThemeSwitch}
                  className="flex items-center gap-2 p-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-700/50"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {theme === "light" ? (
                    <>
                      <HiOutlineSun size={24} className="text-yellow-300" />
                      <span>Light</span>
                    </>
                  ) : theme === "dark" ? (
                    <>
                      <HiOutlineMoon size={24} className="text-blue-300" />
                      <span>Dark</span>
                    </>
                  ) : (
                    <>
                      <CgScreen size={24} className="text-green-300" />
                      <span>System</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

export default Header;
