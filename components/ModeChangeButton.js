
"use client"

import { changeMode } from "@/redux/feature/themeModeSlice";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

export const ModeChangeButton = () => {

const isDarkMode = useSelector((state)=>state.mode)

  const dispatch = useDispatch();
  const darkModeHandler = () => {
    dispatch(changeMode());
  };

  return (
    <div className="fixed bottom-3 right-3  p-1 ">
      <button
        onClick={darkModeHandler}
        className=" animate-bounce  p-1 "
      >
        {isDarkMode ? <BsFillSunFill  className="text-gold p-1 text-5xl sm:text-4xl border-2 rounded-full"/> : <BsMoonStarsFill className=" text-5xl sm:text-4xl text-black border-2 p-1 rounded-full" />}
      </button>
    </div>
  );
}