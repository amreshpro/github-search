"use client";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import { GiCrossedSabres } from "react-icons/gi";

import { useState } from "react";
import { changeMode } from "@/redux/feature/themeModeSlice";
import { NAV_LINKS } from "@/constant";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const darkModeHandler = () => {
    dispatch(changeMode());
  };

  const isDarkMode = useSelector((state) => state.mode);

  return (
    // <nav
    //   className={`mb-8 ${
    //     isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
    //   } `}
    // >
      <button onClick={darkModeHandler} className="text-3xl text-center py-4 px-4">
        {isDarkMode ? (
          <BsFillSunFill />
        ) : (
          <BsMoonStarsFill className="" />
        )}
      </button>
    // </nav>
  );
};
