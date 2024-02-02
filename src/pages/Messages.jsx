import React from 'react'
import MessageInfo from '../components/MessageInfo'
import SevenJan from '../components/SevenJan'
import Fouteen from '../components/Fouteen'
import TwentyJan from '../components/TwentyJan'
import TweEigJan from '../components/TweEigJan'



function Messages() {
  return (
    <div className=' mt-3 '>
     
        <div>
            <MessageInfo />
        </div>

        

        <div className=' md:grid md:grid-cols-4 space-y-7 md:space-y-0'>

          <div>
            <SevenJan/>
          </div> 

          <div>
            <Fouteen/>
          </div>

          <div>
            <TwentyJan/>
          </div>

          <div>
            <TweEigJan />
          </div>

        </div>
    </div>
  )
}

export default Messages