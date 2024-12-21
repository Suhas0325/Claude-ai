import React from 'react';
import TopAvatar from '../assets/TopAvatar.png'


function Topics() {
  return (
    <>
    <div className='flex flex-row items-center  justify-evenly ' >
      
        <video
          src="/videos/soul.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-1/4 h-1/4"
        ></video>
      

      <div>
        <img src={TopAvatar} className='mb-40' />
      </div>

      
        <video
        src="/videos/Life.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-1/4 h-1/4"
        >

        </video>
      
      </div>
     
    </>
  );
}

export default Topics;
