"use client"

import {  useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useDispatch } from "react-redux"


const useFetch = (user) => {


const fetchFun =async()=>{
  return await axios.get(`https://api.github.com/users/${user}`)
  }

const {data,isLoading,isFetching} =  useQuery({queryKey:['user-data'],queryFn:fetchFun})

const dispatch = useDispatch();


  return (
    {
      data:data?.data,
      isLoading:isLoading,
      isFetching:isFetching
    }
  )
}
export default useFetch