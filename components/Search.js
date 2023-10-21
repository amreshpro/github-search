"use client";

import { updateSearch } from "@/redux/feature/searchSlice";
import { fetchDataFromApi } from "@/utils/api";

import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
  const [theValueForSearch, setTheValueForSearch] = useState();

  const isDarkMode = useSelector((state) => state.mode);


// dispatch
const dispatch = useDispatch();

  const onSearchHandler = (e) => {
    e.preventDefault();

    if (theValueForSearch.length > 0) {
      console.log(theValueForSearch);
    dispatch(updateSearch(theValueForSearch));
    }
  };


  const onKeyUpHandler = (e) => {
    e.preventDefault();
    if (e.key === "Enter" || e.which === 14) {
      if (theValueForSearch.length > 0) {
        console.log(theValueForSearch);
      dispatch(updateSearch(theValueForSearch));
      }
    }
  };

  return (
    <div className="container flex flex-col justify-center items-center">
      <div className="flex  max-w-max sm:w-full px-2 ">
        <input
          type="text"
          onInput={(e) => setTheValueForSearch(e.target.value)}
          className={` ${
            isDarkMode ? "bg-primary text-light" : "bg-snow"
          } sm:w-56  outline-none border-none text-lg py-2 px-4 rounded-l-full  `}
        />
        <button
          onClick={onSearchHandler}
          onKeyUp={onKeyUpHandler}
          className="text-xl flex-1 rounded-r-full  bg-gradient-to-r from-carrot to-navy h-full  py-3 px-4"
        >
          <BsSearch />
        </button>
      </div>
    </div>
  );
};
export default Search;
