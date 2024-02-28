import React from 'react'
import { ArrowLeft } from 'lucide-react'
import CategoryList from './_components/CategoryList'
import Link from 'next/link'

const layout = ({children}) => {
  return (
    <div className=' grid grid-cols-4'>
        <div className=' hidden md:block'>
            {/* category items  */}
            <CategoryList  />
        </div>
        <div className=' col-span-4 md:col-span-3 mt-5'>
        <Link href={"/"}>
        <ArrowLeft className=' ml-6' />
        </Link>
        {children}
        </div>
       </div>
  )
}

export default layout