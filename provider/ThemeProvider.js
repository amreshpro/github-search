"use client";

import { useSelector } from "react-redux";

const ThemeProvider = ({ children }) => {
  const isDarkMode = useSelector((state) => state.mode);

  return (
    <main
      className={`${
        isDarkMode ? "bg-dark text-light " : "bg-light text-dark "
      } `}
    >
      {children}
    </main>
  );
};
export default ThemeProvider;
