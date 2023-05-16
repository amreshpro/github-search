import { useContext } from "react";
import InfoCard from "../mini/InfoCard";
import { SlNotebook } from "react-icons/sl";
import { HiUserGroup } from "react-icons/hi";
import {FiUsers} from 'react-icons/fi'
import LoadingSpin from "../mini/LoadingSpin";
import SearchContext from "../../controller/context/SearchContext";





const InfoContainer = () => {
  const { gitUser, isLoading ,isFound} = useContext(SearchContext);

  if(isLoading){
    return <LoadingSpin/>
  }
if(isFound)
  return (
    <div className="mt-5 flex gap-3 flex-wrap">
      <InfoCard
        icon={<SlNotebook className="text-3xl text-primary-800 p-1" />}
        data={gitUser?.public_repos}
        title="Repos"
      />
      <InfoCard
        icon={<HiUserGroup className="text-3xl text-primary-800 p-1" />}
        data={gitUser?.followers}
        title="Followers"
      />

<InfoCard
        icon={<FiUsers className="text-3xl text-primary-800 p-1" />}
        data={gitUser?.following}
        title="Following"
      />
    </div>
  );
};
export default InfoContainer;
