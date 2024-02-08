import React from 'react'
import { IoIosTimer } from "react-icons/io";
import EpaphrasPic from './EpaphrasPic';

function Epaphras() {
  return (
 <div className=' shadow-xl mx-[2%] px-2  justify-center items-center -mt-8  rounded-3xl py-4 md:px-2'>
    <div className='flex flex-col-2  items-center justify-center gap-6 md:gap-3'>
         <div>
            <EpaphrasPic />
        </div>
        <div className=' text-center space-y-5 font-bold text-xl'>
             <h1>EPAPHRAS NIGHT</h1>

             <div>
                 <p>Fridays</p>
             </div>
     
             <div className='flex gap-1'>
             <IoIosTimer size={30} className=" text-black " />
                <p className=' text-red-700 font-bold'>7:00 pm  to 9:00pm</p>
            </div>
        </div>
    </div>
 </div>
  )
}

export default Epaphras