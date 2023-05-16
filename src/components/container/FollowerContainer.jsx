import {useContext} from 'react'
import FollowerCard from "../mini/FollowerCard";
import SearchContext from '../../controller/context/SearchContext';







const FollowerContainer = () => {

  const  contextObject = useContext(SearchContext)
 const isFound = contextObject.isFound
 const gitFollower = contextObject.gitFollower

if(isFound){


  return (
 
<div className="w-max m-2 flex flex-col justify-center">
    <h1 className="text-primary-950 bg-primary-100 w-max px-3 py-1 xsm:pl-8">Follower</h1>
    <div className=" overflow-scroll  bg-primary-100 h-96  justify-center items-start">
<div className="flex flex-col gap-2 ">

{


gitFollower?.map((item)=>{

return( <FollowerCard {...item} key={item.id}  />)



})

}
</div>
    </div>

</div>

  );
}
};
export default FollowerContainer;
