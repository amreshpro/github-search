"use client"

import useFetch from "@/utils/useFetch"
import { useEffect, useState } from "react"
import { BsSearch } from "react-icons/bs"
import { useSelector } from "react-redux"


const Search = () => {

const [searchValue, setSearchValue] = useState('amreshpro')
    
const isDarkMode = useSelector((state)=>state.mode)

const test = useFetch(searchValue)
console.log(test)

useEffect(()=>{

},[searchValue])

const onSearchHandler=(e)=>{
e.preventDefault()

if(searchValue.length>0){
console.log(searchValue)
}

}



  return (
  <div className="container flex flex-col justify-center items-center">
      <div className="flex  max-w-max sm:w-full px-2 ">

<input type="text" onChange={(e)=>setSearchValue(e.target.value)}  className={` ${isDarkMode  ? 'bg-primary text-light' : 'bg-snow'} sm:w-56  outline-none border-none text-lg py-2 px-4 rounded-l-full  `}/>
<button onClick={onSearchHandler} onKeyUp={onSearchHandler}  className="text-xl flex-1 rounded-r-full  bg-gradient-to-r from-blue to-pink h-full  py-3 px-4"><BsSearch/></button>

    </div>
  </div>
  )
}
export default Search