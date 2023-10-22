"use client"
import { useSelector } from "react-redux";
import { Loading } from "./Loading";
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "@/utils/api";
import UserCard from "./UserCard";



const Following = () => {

    const [userFetchedData, setUserFetchedData] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
  
  
  
    const isDarkMode = useSelector((state) => state.mode);
    // search value
    const searchValue = useSelector((state) => state.search);
  
    useEffect(() => {
      setIsLoading(true);
      async function fetchDataHandler() {
        const fetchData = fetchDataFromApi(`${searchValue}/following`);
        const response = await fetchData;

  
        if (response?.response?.status == 404) setIsError(true);
        else {
          setIsError(false);
          const newUser = await response;
          setUserFetchedData(newUser);
        }
        setIsLoading(false);
      }
  
      fetchDataHandler();
    }, [searchValue]);
  
  
    if (isError) {
      return <h1 className="text-center py-4 text-xl">No Following Found</h1>;

    }
    if (isLoading) {
      return <Loading />;
    }
if(!userFetchedData) return ''





  return (
    <div>


<h1 className={`${
          isDarkMode
            ? "bg-secondary text-textMain"
            : "bg-ternary text-secondary"
        } w-fit rounded-t-lg  px-4 py-0.5`}>Following</h1>
<div  className={`${
          isDarkMode
            ? "bg-secondary text-textMain"
            : "bg-ternary text-secondary"
        } h-80 rounded-b-lg rounded-r-lg  overflow-y-scroll `}>
    {
userFetchedData.map((following)=>{
    return (
        <UserCard key={following?.id}  {...following}/>
    )
})
    }
</div>

    </div>
  )
}
export default Following