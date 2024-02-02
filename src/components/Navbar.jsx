import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { HiMenuAlt3 } from "react-icons/hi";

import { IoClose } from "react-icons/io5";


function Navbar() {

     const [Display, setDisplay] = useState(false)

     const displayMenu = () => {
         setDisplay (!Display);
   }

  return (
            <div className =' bg-blue-300 sticky top-0'>
                <div className=' h-[90px] w-full  px-[5%] '>
                    <header className='text-black flex justify-between items-center h-full'>
                        <div className='flex items-center gap-2'>
                        <img className=' md:h-28 h-20' src="https://res.cloudinary.com/dnkk72bpt/image/upload/v1706822158/R_1_gqv1ef.png" alt="" />
                        </div>
                        
                        <div className=''>
                            <ul className=' hidden lg:flex gap-10 text-lg md:flex uppercase font-bold  '>
                                <li className='hover:border-b-2 hover:border-blue-700'>
                                    <Link to={"/"}>Home</Link>
                                </li>

                                <li className='hover:border-b-2 hover:border-blue-700'>
                                    <Link to={"/messages"}>Messages</Link>
                                </li>

                                <li className='hover:border-b-2 hover:border-blue-700'>
                                    <Link to={"/weeK"}>Service</Link>
                                </li>

                                <li className='hover:border-b-2 hover:border-blue-700'>
                                    <Link to={"/contact"}>Contact</Link>
                                </li>

                            
                                <li className='hover:border-b-2 hover:border-blue-700'>
                                    <Link to={"/gallery"}>Gallery</Link>
                                </li>
                                <li className='hover:border-b-2 hover:border-blue-700'>
                                    <Link to={"/faq"}>FAQ</Link>
                                </li>
                            </ul>
                     </div>
                     <div className=' lg:hidden md:hidden ' onClick={displayMenu}>
                          {!Display ? <HiMenuAlt3 size={30} /> : <IoClose size={30} />}   
                     </div>
                    </header>
                </div>
                <div  className={Display ? ' px-[5%]  duration-300 ease-in-out text-center uppercase' : 'hidden'} onClick={displayMenu}>
                    <ul className=' md:hidden font-bold text-lg '>
                                <li className='border-b-2 pb-1 border-blue-800 mb-5'>
                                    <Link to={"/"}>Home</Link>
                                </li>

                                <li className='border-b-2 pb-1 border-blue-800 mb-5'>
                                    <Link to={"/messages"}>Messages</Link>
                                </li>

                                <li className='border-b-2 pb-1 border-blue-800 mb-5'>
                                    <Link to={"/weeK"}>Service</Link>
                                </li>

                                <li className='border-b-2 pb-1 border-blue-800 mb-5'>
                                    <Link to={"/contact"}>Contact</Link>
                                </li>

                            
                                <li className='border-b-2 pb-1 border-blue-800 mb-5'>
                                    <Link to={"/gallery"}>Gallery</Link>
                                </li>
                                <li className='border-b-2 pb-1 border-blue-800 mb-5'>
                                    <Link to={"/faq"}>FAQ</Link>
                                </li>
                        </ul> 
                </div>
            </div>
    
    
  )
}

export default Navbar