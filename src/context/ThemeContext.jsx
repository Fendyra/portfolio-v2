// import React, { createContext, useState, useEffect } from 'react';
import { createContext, useState, useEffect } from "react"; // Impor sisanya

// Membuat context untuk tema
export const ThemeContext = createContext();

// Membuat provider untuk tema yang akan menyebarkan state tema ke seluruh aplikasi
export const ThemeProvider = ({ children }) => {
  // eslint-disable-line react/prop-types
  const [theme, setTheme] = useState("system");

  useEffect(() => {
    // Menerapkan perubahan tema ke elemen HTML utama
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      // document.documentElement.style.backgroundColor = "#ffffff"; // HAPUS BARIS INI
    } else if (theme === "dark") {
      document.documentElement.classList.add("dark");
      // document.documentElement.style.backgroundColor = "#000000"; // HAPUS BARIS INI
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
