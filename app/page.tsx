'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import Employee from './components/employee';


const Home = () => {
  const route = useRouter();
  return (
    <>
      <div className="text-center p-6">
        <h1>Home</h1>
        <Link href={"/navbar"} className='p-4'>Navbar</Link>
        <Link href={"/about"} className='p-4'>About</Link>
        <Link href={"/contact"} className='p-4'>Contact</Link>
        <Link href={"/footer"} className='p-4'>Footer</Link>
      </div>
      <br />
      <hr className='w-full' />
      <br />
      <div className='text-center'>
        <button onClick={() => route.push("/navbar")} className="p-1">Navbar</button>
        <button onClick={() => route.push("/about")} className="p-1">About</button>
        <button onClick={() => route.push("/contact")} className="p-1">Contact</button>
        <button onClick={() => route.push("/footer")} className="p-1">Footer</button>
      </div>
      <br />
      <br />

      <Employee name="Sahil" id="01" shift="Morning" join="16/August/2022" />
      <br />
      <Employee name="Sheza" id="02" shift="Evening" join="04/September/2022" />

    </>
  )
}

export default Home;
