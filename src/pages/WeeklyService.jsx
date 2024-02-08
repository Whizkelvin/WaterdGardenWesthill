import React from 'react'
import Epaphras from '../components/Epaphras'
import WisdomService from '../components/WisdomService'

function WeeklyService() {
  return (
    <div className=' space-y-16 md:grid md:grid-cols-2 gap-5 mt-3'>
      <div className=' justify-center text-lg mb-4'>
        <WisdomService />
      </div>

      <div className=' justify-center text-lg mt-6'>
        <Epaphras />
      </div>
      
    </div> 
     
    
  )
}

export default WeeklyService