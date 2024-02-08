import React from 'react'
import { IoIosTimer } from "react-icons/io";
import WisdomServicePic from './WisdomServicePic';

function WisdomService() {
  return (

    <div className=' shadow-xl mx-[2%] px-2  justify-center items-center mt-3  rounded-3xl py-4 md:px-2'>
    <div className='flex flex-col-2  items-center justify-center gap-6 md:gap-8'>
         <div>
            <WisdomServicePic />
        </div>
        <div className=' text-center md:space-y-5 space-y-2 font-bold text-xl'>
             <h1>Wisdom Service</h1>

             <div>
                 <p>Tuesdays <br />Online</p>
             </div>
     
             <div className='flex gap-1'>
             <IoIosTimer size={30} className=" text-black " />
                <p className=' text-red-700 font-bold'>6:30 pm  to 8:00pm</p>
            </div>
            <div>
                <a href="https://meet.google.com/wmc-dpfa-wqj"><button className='bg-blue-300 p-3 rounded-lg'>JOIN MEETING</button></a>
             </div>
        </div>
    </div>
 </div>


    // <div className=' shadow-xl mx-[2%] px-2  justify-center items-center mt-3  rounded-3xl py-4 md:px-2'>
    //    <div className=' text-center space-y-1 font-bold text-xl '>
    //          <h1></h1>

    //          <div>
    //              <p> </p>
    //          </div>
     
    //          <div className='flex gap-1 '>
    //             
    //             <p className=' text-red-700 font-bold'></p>
    //         </div>
    //        
    //     </div>
    // </div> 
   
  )
}

export default WisdomService