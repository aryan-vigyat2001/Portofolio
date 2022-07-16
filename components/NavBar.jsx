import React from 'react'
import Link from 'next/link'
import {AiOutlineClose,AiOutlineMenu,AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn,FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { handlenav } from '../store/navslice'
const NavBar = () => {
  const {navview} =useSelector(state=> state.navbar)
  const dispatch=useDispatch();
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100] bg-gradient-to-r from-violet-500 to-fuchsia-500 '>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <h3 className=''>A V</h3>
        <div>
            <ul className='hidden md:flex'>
                <Link href='/'>
                    <li className='ml-10 text-sm uppercase hover:border-b '>Home</li>
                </Link>
                <Link href='/about'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                </Link>
                <Link href='/'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                </Link>
                <Link href='/'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                </Link>
            </ul>
            <div onClick={()=>dispatch(handlenav())} className='md:hidden '>
                <AiOutlineMenu color='white' size={25}/>
            </div>
        </div>
        </div>
        <div className={navview?'md:hidden fixed left-0 top-0 w-full h-screen bg-black/40':''}>
        <div className={navview?'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-300 ':
    'fixed left-[-100%] top-0 w-[75%]  p-10 ease-in duration-300'}>
        <div>
            <div className='flex w-full items-center justify-between'>
            <h3 className=''>A V</h3>
            <div onClick={()=>dispatch(handlenav())}  className='rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer'>
                <AiOutlineClose/>
            </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
                <p>Lets Start Building Together!</p>
            </div>
        </div>
        <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
                <Link href="/">
                    <li className='py-4 text-sm font-bold'>Home</li>
                </Link>
                <Link href="/about">
                    <li className='py-4 text-sm font-bold'>Home</li>
                </Link>
                <Link href="/skills">
                    <li className='py-4 text-sm font-bold'>Home</li>
                </Link>
                <Link href="/contact">
                    <li className='py-4 text-sm font-bold'>Home</li>
                </Link>
            </ul>
            <div className='pt-40'>
                <p className='uppercase tracking-widest text-[#5651e5]'>Connect With Me</p>
                <div className='flex items-center justify-between my-4 '>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale ease-in duration-300 '>
                        <FaLinkedinIn/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale ease-in duration-300'>
                        <FaGithub/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale ease-in duration-300'>
                        <AiOutlineMail/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale ease-in duration-300'>
                        <BsFillPersonLinesFill/>
                    </div>
                </div>
            </div>

        </div>
        </div>
        </div>

    </div>
  )
}

export default NavBar