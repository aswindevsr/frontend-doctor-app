"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button.jsx"
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import DoctorList from "./_components/DoctorList";
import { useEffect, useState } from "react";
import GlobalApi from "./_utils/GlobalApi";


export default function Home() {
  const [docList,setDocList] = useState([])

    useEffect(()=>{
        getDocList()
    },[])

    const getDocList = () => {
        GlobalApi.getDoctorList().then(resp => {
            console.log( "doclist",resp.data.data);
            setDocList(resp.data.data);
        })
    }
  return (
    <div>
      {/* hero section  */}
      <Hero/>
      {/* Category search  */}
      <CategorySearch/>
      {/* Popular doctor list  */}
      <DoctorList docList={docList}/>
    </div>
  );
}
