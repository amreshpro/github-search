
import FollowerContainer from "./container/FollowerContainer";
import SearchBox from "./SearchBox";
import UserCard from "./UserCard";

import LoadingSpin from "./mini/LoadingSpin";
import InfoContainer from "./container/InfoContainer";
import { useContext } from "react";
import SearchContext from "../controller/context/SearchContext";
import Title from "./mini/Title";
import FollowingContainer from "./container/FollowingContainer";





const Dashboard = () => {
const {isLoading} = useContext(SearchContext)

if(isLoading){
  return<> <LoadingSpin/> </>
}
if(!isLoading)
  return (
    <div className="flex flex-col gap-5 mb-8">
     <div className="top">
  <Title/>
      <SearchBox />
      </div>

    <div className="data flex flex-col justify-center items-center">
      <UserCard />
    <InfoContainer/> 
      </div>

  <div className="follow-container flex flex-wrap justify-center gap-3">
  <FollowerContainer />
      <FollowingContainer/>
  </div>
 
    </div>
  );
};
export default Dashboard;
