import React from 'react'

function Fouteen() {
  return (
    <div>
        <div className=' shadow-xl mx-[2%] px-2  justify-center items-center mt-3 bg-blue-300 rounded-3xl py-4 md:px-2'>
            <div className='flex flex-col-2  items-center justify-center gap-6 md:gap-0'>
                <div >
                     <img className=' rounded-2xl h-[175px] w-full' src="https://res.cloudinary.com/dnkk72bpt/image/upload/v1706822161/IMG-20240122-WA0000_aueahf.jpg" alt="" />
                </div>
                <div className=' text-center space-y-1 font-medium'>
                     <h1>14th Jan 2024</h1>

                     <div>
                         <p>Sacrifice by Prayer</p>
                     </div>
             
                     <div>
                        <p className=' text-red-700 font-bold'>Pastor Derrick Diaba Senyo</p>
                    </div>
                    <div>
                        <a href="https://drive.google.com/file/d/1vFav9-PRjrBQdXWarBpM-tAhNs0mP_JC/view?usp=sharing" download> 
                            <button className='uppercase font-mono font-bold  bg-white  text-red-900 mt-3 p-3 rounded-lg'>download or listen</button>
                        </a>
                    </div>

                </div>
            </div>
         </div>
    </div>
  )
}

export default Fouteen