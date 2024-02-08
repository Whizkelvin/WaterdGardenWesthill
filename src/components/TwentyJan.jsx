import React from 'react'
import PastorPic from './PastorPic'

function TwentyJan() {
  return (
    <div>
      <div className=' shadow-xl mx-[2%] px-2  justify-center items-center mt-3 bg-blue-400 rounded-3xl py-4 md:px-2'>
            <div className='flex flex-col-2  items-center justify-center gap-6 md:gap-0'>
                <div>
                    <PastorPic />
                </div>
                <div className=' text-center space-y-1 font-medium'>
                     <h1>21th Jan 2024</h1>

                     <div>
                         <p>School of the Spirit</p>
                     </div>
             
                     <div>
                        <p className=' text-red-700 font-bold'>Pastor Derrick Diaba Senyo</p>
                    </div>
                    <div>
                        <a href="https://drive.google.com/file/d/1HDoj-Io16IJ111rYeOwP1m0CmsdoqkmO/view?usp=drivesdk" download> 
                            <button className='uppercase font-mono font-bold  bg-white  text-red-900 mt-3 p-3 rounded-lg'>download or listen</button>
                        </a>
                    </div>

                </div>
            </div>
         </div>
    </div>
  )
}

export default TwentyJan