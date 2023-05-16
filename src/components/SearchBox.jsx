import React, { useState, useContext } from "react";
import { BiSearch } from "react-icons/bi";

import SearchContext from "../controller/context/SearchContext";

const SearchBox = () => {
  const [inputText, setInputText] = useState("");

  const { SearchGithubUser } = useContext(SearchContext);
  //const {SearchGithubUser}  = ResultObject

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputText);
    SearchGithubUser(inputText);
    emptyTheInputBox();
  };

  const onKeyUpHandler = (e) => {
    if (e.key === "Enter" || e.which === 14) {
      SearchGithubUser(inputText);
      emptyTheInputBox();
    }
  };

  const emptyTheInputBox = () => {
    setInputText("");
  };

  return (
    <div className="flex justify-center flex-wrap  items-center mt-5 pt-5 xsm:gap-2">
      <div className="inputBoxContainer  w-max ml-1 text-2xl  ">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyUp={onKeyUpHandler}
          autoFocus={true}
          name="search"
          className="bg-primary-200 zsm:m-1 text-primary-900 placeholder-primary-600 h-full px-1 py-1 outline-none"
          placeholder="Search github user ..."
        />
      </div>
      <div className="  w-max  text-2xl    ">
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-primary-500 h-full text-primary-900  py-2 px-2 sm:rounded-full "
        >
          {<BiSearch className="animate-bounce" />}{" "}
        </button>
      </div>
    </div>
  );
};
export default SearchBox;
