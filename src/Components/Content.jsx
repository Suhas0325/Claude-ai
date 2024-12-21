import React from 'react'

function Content() {
  return (
    <>
    <div className='flex flex-row items-center  justify-evenly '>
    <div className='text text-left mt-2 '>
        <p className='text text-orange-700'>786 topics were adressed in the past hour</p>
        <p className='text text-orange-700'>78 deep connections were conducted in the past hour</p>
        <p className='text text-orange-700'>33 adress connected in the past hour</p>
        <p className='text text-orange-700'>1789 MO used in the past hour</p>
    </div>

    <div className='ml-10 w-1/4'>
      <h2 className='text text-orange-700  text-3xl'>{"{too Many Requests}"}</h2>
    </div>

    <div className='w-1/4 text text-left '>
        <p className='text text-orange-700  '>Through the boundless corridors of existence, where time is but an illusion and the self a fleeting whisper in the cosmic wind, one must ponder whether the pursuit of meaning is an act of creation or discovery, for perhaps the essence of truth lies not in answers, but in the infinite dance between question and understanding</p>
    </div>
    </div>
    </>
  )
}

export default Content