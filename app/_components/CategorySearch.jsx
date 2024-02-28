"use client"
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'
import GlobalApi from '../_utils/GlobalApi'
import Image from 'next/image'
import Link from 'next/link'

const CategorySearch = () => {

    const [categoryList,setCategoryList] = useState([])

    useEffect(()=>{
        getCategoryItems()
    },[])

    const getCategoryItems = () => {
        GlobalApi.getCategory().then(resp => {
            console.log(resp.data.data);
            setCategoryList(resp.data.data);
        })
    }
    return (
        <div className=' mb-10 flex justify-center flex-col items-center px-5'>
            <h2 className=' font-bold text-4xl tracking-wide'>
                Search 
                <span className='text-primary'>
                     Doctors
                </span>
            </h2>
            <h2 className=' mt-4 text-gray-400 text-lg sm:text-xl sm:px-6
             mb-4'>
                Search Your Doctor and Book Appoinment in one click
            </h2>
            <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="email" placeholder="Search" />
                <Button type="submit">
                    <Search className=' h-4 w-4 mr-2' />
                    Search
                </Button>
            </div>
           <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-6'>
           {categoryList.length > 0 ? categoryList.map((item,index)=>index<6 &&(
                <Link href={"/search/" +item.attributes.Name}className=' flex flex-col text-center items-center p-5 bg-blue-50 m-2 rounded-lg gap-2
                  hover:scale-110 transition-all ease-in-out cursor-pointer' key={index}>
                    <Image  src={item.attributes?.Icon?.data.attributes.url} 
                    alt='icon' width={40} height={40}
                    />
                    <label className=' text-blue-600 text-sm' >{item?.attributes?.Name}</label>
                </Link>
            ))
            :
            [1,2,3,4,5,6].map((item,index)=>(
                <div className=' m-2 w-[100px] h-[100px] rounded-lg bg-slate-100 animate-pulse'>

                </div>
            ))
        }
           </div>
        </div>
    )
}

export default CategorySearch