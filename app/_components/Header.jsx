import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    const nav = [
        {
            id:1,
            name: "Home",
            path: '/'
        },
        {
            id:2,
            name: "About",
            path: '/about'
        },
        {
            id:3,
            name: "Contact",
            path: '/'
        },
        {
            id:4,
            name: "career",
            path: '/'
        },
    ]
  return (
    <div className=' flex flex-row items-center gap-10 justify-between p-4 shadow-sm'>
        <Image alt='logo' src='/logo.svg' width={180} height={80} />
        <ul className=' md:flex flex flex-row gap-8 cursor-pointer hidden'>
            {nav.map((item,index)=>(
                <Link href={item.path} >
                <li key={index} className=' hover:text-primary hover:scale-105 transition-all ease-in-out'>
                    {item.name}
                </li>
                </Link>
            ))}
        </ul>
        <Button>Get Started</Button>
    </div>
  )
}

export default Header