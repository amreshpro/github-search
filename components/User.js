"use client";

import { Loading } from "./Loading";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { data } from "./rough";
import { fetchDataFromApi } from "@/utils/api";
import { useEffect, useState } from "react";
import { updateUser } from "@/redux/feature/userSlice";




const User = () => {
  const [userFetchedData, setUserFetchedData] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

const dispatch=useDispatch();


  const isDarkMode = useSelector((state) => state.mode);
  // search value
  const searchValue = useSelector((state) => state.search);



  useEffect(() => {
    setIsLoading(true);
    async function fetchDataHandler() {
      const fetchData = fetchDataFromApi(searchValue);
      const response = await fetchData;
      console.log(response);

      if (response?.response?.status == 404) setIsError(true);
      else {
        setIsError(false)
        const newUser = await response;
        console.log(newUser);
        dispatch(updateUser(newUser))
        setUserFetchedData(newUser);
      }
      setIsLoading(false);
    }

    fetchDataHandler();
  },[dispatch, searchValue]);

console.log(userFetchedData)
  if (isError) {
    return <h1 className="text-center py-4 text-xl">No User Found</h1>;
  }
  if (isLoading) {
    return <Loading />;
  }


  console.log(userFetchedData)
  const { login, avatar_url, name, bio, html_url } = userFetchedData;


  return (
    <div
      className={`container flex flex-col justify-center items-center py-4 px-1 `}
    >
      <div
        className={`${
          isDarkMode
            ? "bg-secondary text-textMain"
            : "bg-ternary text-secondary"
        }   flex flex-col justify-center items-center px-4 py-4 rounded-lg  bg-secondary  max-w-[550px]`}
      >
        {/* // eslint-disable-next-line react/jsx-no-comment-textnodes// eslint-disable-next-line @next/next/no-img-element, @next/next/no-img-element, @next/next/no-img-element, @next/next/no-img-element */}
        <img
          src={avatar_url}
          alt="profile-photo"
          className="w-60 rounded-full"
        />
        <div className="content py-2 flex flex-col justify-center  items-center gap-1">
          <h1 className="text-2xl mt-2 px-2">{name??''}</h1>
        <p className=" text-justify">{bio ?? ''}</p>

          <h1 className="text-lg">@{login??''}</h1>
          <Link
            href={html_url ?? ""}
            className="bg-gradient-to-r from-carrot to-navy px-5 py-2 rounded-l-full rounded-r-full"
          >
            Follow
          </Link>
        </div>
      </div>
    </div>
  );
};
// };
export default User;
