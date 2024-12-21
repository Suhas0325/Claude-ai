import React from 'react'
import Graphs from '../assets/Graphs.png'
import DownAvatar from '../assets/DownAvatar.png'
function Goal() {
  return (
    <>
    <div className='flex flex-row items-center justify-evenly bg-black'>
        <div className='flex flex-col text-left '>
        <p className='text text-orange-700'>pumpfun_vision: pumpfun_solana</p>
        <p className='text text-orange-700'>CA :</p>
        <p className='text text-orange-700'>U6XvAGkTdZUqGzMDhXabibKhgbve2gFNs5AgLCnpump</p>
        <p className='text text-orange-700'>token_name : $CLAUDIA</p>
        <p className='text text-orange-700'>launch_date : 11/12/2024</p>
        <p className='text text-orange-700'>block : 12780</p>
        <img src={Graphs} className='w-[350px] mt-2'/>

        </div>
        
        <img  src={DownAvatar} className='mt-32'/>
        <video
          src="/videos/Hole.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-1/4 h-1/4 mt-10"
        ></video>
    </div>
    
    </>
  )
}

export default Goal