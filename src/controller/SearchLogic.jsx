import React, { useState,useEffect } from "react";
import SearchContext from "./context/SearchContext";
import follower from "./defaults/follower";
import user from "./defaults/user";
import following from "./defaults/following";




const baseUrl = "https://api.github.com/users";

const SearchLogic = ({ children }) => {

  const [gitUser, setGitUser] = useState(user);
  const [gitFollower, setGitFollower] = useState(follower);
  const [gitFollowing, setGitFollowing] = useState(following);

  const [isLoading, setIsLoading] = useState(false)
  const [isFound, setIsFound] = useState(true)

  const SearchGithubUser = async (userName) => {
    setIsLoading(true)
    // fetch user
    const gitUserFetchedData = await fetch(`${baseUrl}/${userName}`)
      .then((res) => {
   
        if(res.status == 404){
          setIsFound(false)
          return null
        }
        setIsFound(true)
        return res.json();
      })
      .catch((err) => {
        setIsFound(false)
        console.log(err);
      });



    setGitUser(gitUserFetchedData);

    // fetched follower
    const gitFollowerFetchedData = await fetch(
      `${baseUrl}/${userName}/followers`
    )
      .then((res) => {
        if(res.status == 404){
          setIsFound(false)
          return null
        }
        setIsFound(true)
        return res.json();
      })
      .catch((err) => {
        setIsFound(false)
        console.log(err);
      });

      
    setGitFollower(gitFollowerFetchedData);



    // fetched following
    const gitFollowingFetchedData = await fetch(
      `${baseUrl}/${userName}/following`
    )
      .then((res) => {
        if(res.status == 404){
          setIsFound(false)
          return null
        }
        setIsFound(true)
        return res.json();
      })
      .catch((err) => {
        setIsFound(false)
        console.log(err);
      });

      
    setGitFollowing(gitFollowingFetchedData);
    setIsLoading(false)
  };



useEffect(()=>{
  
  SearchGithubUser('amreshpro')

},[])

  return (
    <SearchContext.Provider value={{ SearchGithubUser, gitUser, gitFollower,gitFollowing, isLoading,isFound }}>
      {children}
    </SearchContext.Provider>
  );
};
export default SearchLogic;
