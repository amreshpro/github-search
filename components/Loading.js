"use client"
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const Loading = () => {
  return (
    <div className="w-[100vw] h-[100vh] absolute  flex justify-center items-center animate-spin">
      <AiOutlineLoading3Quarters className="text-4xl text-violet-500" />
    </div>
  );
};
