import React from 'react'

import { MdOutlineLocationOn } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";
import { BiNotepad } from "react-icons/bi";

function ContactInfo() {
  return (
    <>
      <div className="mb-9">
        <div className="  md:flex md:items-center justify-center md:h-full md:px-[3%] lg:px-[5%]">
          <div className=" md:flex  lg:flex">
            <div className="flex items-center p-7">
              <div className="h-[50px] w-50px] p-2 rounded-full bg-black flex items-center justify-center mr-2 md:h-[80px] md:w-[80px] md:p-7 ">
                <MdOutlineLocationOn size={30} className=" text-white " />
              </div>
              <div>
                <h3 className="font-bold">Locate Us</h3>
                <p>SCC Junction <br />Behind Ash Form Depot</p>
              </div>
            </div>

            <div className="flex items-center p-7">
              <div className="h-[50px] w-50px] p-2 rounded-full bg-black flex items-center justify-center mr-2 md:h-[80px] md:w-[80px] md:p-7 ">
                <IoIosTimer size={30} className=" text-white " />
              </div>
              <div>
                <h3 className="font-bold"> Sunday Family Service Hours</h3>
                <p> 9:00AM - 11:30PM</p>
              </div>
            </div>

            <div className="flex items-center p-7">
              <div className="h-[50px] w-[50px] p-2 rounded-full bg-black flex items-center justify-center mr-2 md:h-[80px] md:w-[80px] md:p-2 ">
                <BiNotepad size={30} className=" text-white " />
              </div>
              <div>
                <h3 className="font-bold">Reservation</h3>
                <p>024 104 4819 / 024 704 1707</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


  


export default ContactInfo