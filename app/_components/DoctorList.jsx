
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
// import GlobalApi from '../_utils/GlobalApi'

const DoctorList = ({docList,heading="Popular Doctors"}) => {
    
  return (
    <div className=' mb-10  px-8'>
        <h1 className=' text-xl font-bold'>{heading}</h1>
        <div className=' mt-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-7'>
        {docList.length > 0 ? docList.map((item,index)=>(
            <div key={index} className=' border-[1px] rounded-lg p-4
             cursor-pointer hover:border-primary hover:shadow-sm transition-all ease-in-out'>
                <Image src={item.attributes?.image?.data?.attributes?.url} 
                alt='doctor'
                height={200} width={500}
                className=' h[200px] w-full object-cover rounded-md'
                />
                <div className=' mt-3 items-baseline flex flex-col gap-1'>
            <h2 className=' text-primary text-[15px] bg-blue-100 rounded-full px-2'>
                {item.attributes?.categories.data[0].attributes?.Name}
            </h2>
            <h2 className=' font-bold'>{item.attributes?.Name}</h2>
            <h2 className=' text-primary text-sm'>{item.attributes?.Year_of_Experience}</h2>
            <h2 className=' text-gray-500 text-sm'>{item.attributes?.Address}</h2>
            <h2 className=' p-2 px-3 border-[1px] border-primary text-primary rounded-full w-full text-center 
            text-[11px] mt-2 cursor-pointer hover:bg-primary hover:text-white'>
                Book Now</h2>
        </div>
            </div>
        ))
        :
        [1,2,3,4,5,6].map((item,index)=>(
            <div className=' h-[220px] bg-slate-100 w-full rounded-lg animate-pulse'>

            </div>
        ))
    }
        </div>
    </div>
  )
}

export default DoctorList