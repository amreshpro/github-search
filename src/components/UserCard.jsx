import { AiOutlineLink } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { useContext } from "react";
// default data

import SearchContext from "../controller/context/SearchContext";
import LoadingSpin from "./mini/LoadingSpin";

const UserCard = () => {
  const contextObject = useContext(SearchContext);
  const {isFound,isLoading} = contextObject
  let gitUser;
  if(isFound){
gitUser = contextObject.gitUser

  }
  if (isLoading) {
    return (
      <>
        <LoadingSpin />
      </>
    );
  }

  if (!isFound) {
    return (
      <h1 className="text-primary-600 text-center p-1 m-1 font-poppins">
        This username is not found
      </h1>
    );
  }
else {
    
      const {
        name,
        location,
        bio,
        twitter_username,
        avatar_url,
        blog,
        html_url,
      } = gitUser;

      return (
        <div className="mt-5 xsm:mx-1 xsm:mr-2 flex justify-center items-center w-full p-1 ">
          <div className="p-5 rounded-lg m-1 shadow-lg   flex flex-wrap flex-col justify-center   bg-gradient-to-l  from-primary-200 via-primary-300 to-primary-600 ">
            <div className="logo">
              <img
                src={avatar_url}
                alt="profile-photo"
                className="w-32 rounded-full"
              />
            </div>
            <div className="top-text flex gap-2 flex-wrap">
              <h1 className="font-lilita p-1  text-xl text-primary-800">
                {name}
              </h1>
              <a
                href={html_url}
                className="bg-primary-600 px-2 py-1 text-lg text-primary-200 font-poppins rounded-lg"
              >
                Follow
              </a>
            </div>
            <span>
              <a href="" className="font-poppins text-primary-950 font-bold">
                {twitter_username}
              </a>
            </span>
            <div className="">
              <p className="font-poppins pt-1 text-sm">{bio}</p>
            </div>
            <div className="flex flex-col pt-2">
              <h3 className="flex gap-1 font-poppins">
                {" "}
                <ImLocation2 className="mt-1 text-primary-950 text-xl " />{" "}
                {location}
              </h3>
              <a
                href=""
                className="flex text-primary-950 font-bold font-poppins py-1 gap-1"
              >
                {" "}
                <AiOutlineLink className="mt-1 text-primary-950 text-xl" />{" "}
                {blog}
              </a>
            </div>
          </div>
        </div>
      );
    }
  }
;
export default UserCard;
