"use client";
import useFetch from "@/utils/useFetch";
import { Loading } from "./Loading";
import Link from "next/link";
import { useSelector } from "react-redux";
import { data } from "./rough";

const User = () => {
  const isDarkMode = useSelector((state) => state.mode);

  //   const { data, isLoading, isFetching } = useFetch("john-smilga");
  //   console.log(data);

  if (
    // isLoading || isFetching ||

    false
  )
    return <Loading />;
  else {
    const { login, avatar_url, name, bio, html_url } = data;

    return (
      <div
        className={`container   flex flex-col justify-center items-center py-4 px-1 `}
      >
        <div
          className={`${
            isDarkMode
              ? "bg-secondary text-textMain"
              : "bg-ternary text-secondary"
          }   flex flex-col justify-center items-center px-4 py-4 rounded-lg  bg-secondary`}
          >
          {/* // eslint-disable-next-line react/jsx-no-comment-textnodes// eslint-disable-next-line @next/next/no-img-element, @next/next/no-img-element, @next/next/no-img-element, @next/next/no-img-element */}
          <img
            src={avatar_url}
            alt="profile-photo"
            className="w-60 rounded-full"
          />
          <div className="content py-2 flex flex-col justify-center  items-center gap-1">
            <h1 className="text-2xl mt-2 px-2">{name}</h1>
            <h1 className="text-lg">@{login}</h1>
            <Link
              href={html_url}
              className="bg-gradient-to-r from-blue to-pink px-5 py-2 rounded-l-full rounded-r-full"
            >
              Follow
            </Link>
          </div>
        </div>
      </div>
    );
  }
};
export default User;
