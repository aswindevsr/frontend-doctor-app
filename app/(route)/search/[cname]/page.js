"use client"
import DoctorList from '@/app/_components/DoctorList';
import GlobalApi from '@/app/_utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const Search = ({params}) => {

  const [docList,setDocList]= useState([])
  
  useEffect(()=>{
    console.log(params);
    getDoctors()
  },[])
  const getDoctors=()=>{
     GlobalApi.getDoctoraByCategory(params.cname).then(resp=>{
      console.log(resp);
      setDocList(resp.data.data)
     })
  }
  return (
    <div>
      <DoctorList docList={docList} heading={params.cname}/>
    </div>
  )
}

export default Search