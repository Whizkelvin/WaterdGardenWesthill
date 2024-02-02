import React from 'react'
import Intro from '../components/Intro';





function HomePage() {
  return (
    <>
      <div>
        <div className="w-full relative">
          <div className="w-full ">
            <img
              src="https://res.cloudinary.com/dnkk72bpt/image/upload/v1706910775/IMG-20231125-WA0019_ql7rgp.jpg"
              alt="Church Homepage"
              className="w-full h-screen object-cover"
            />
          </div>
          <div className="absolute p-6 w-full text-white top-[10%] md:left-[0%]  bg-black bg-opacity-50 text-3xl  md:text-6xl  ">
            <Intro />
          </div>
          <div>
         
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </>
  )
} 

export default HomePage;

 
