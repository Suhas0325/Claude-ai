import React , {useState , useEffect} from 'react'

function Navbar() {

    const [show, setShow] = useState(false);

    useEffect(() => {
      const timeout = setTimeout(() => setShow(true), 100);
      return () => clearTimeout(timeout);
    }, []);
  return (
   <>
   <div className='flex flex-row items-center justify-evenly'>
      <div className='py-10'>
        <img src='https://cdn.prod.website-files.com/67518561e2c1605e3c9f5414/67540ccde5c867c416db6b91_CLAUDIA.png' 
         className='w-[310px] mr-10'
        />
      </div>

      <div className='flex flex-row gap-5 '>
        <img src='https://cdn.prod.website-files.com/67518561e2c1605e3c9f5414/6751bd5cb9831c7b84dd8e63_X.png'/>
        <img src='https://cdn.prod.website-files.com/67518561e2c1605e3c9f5414/6751bd5c9cf0c42ad1d0767d_tg.png'/>
        <img src='https://cdn.prod.website-files.com/67518561e2c1605e3c9f5414/6751bd5ce2d5df7c294b85e9_dex.png'/>
      </div>

      <div className='flex flex-row items-center gap-20'>
       <div className='flex flex-col text-left'>
       {show && (
            <>
              <p className="text-orange-700">{animateWords('current_model: Claudia_v1.4')}</p>
              <p className="text-orange-700">{animateWords('applied_voucher: IT-XCQY-V101')}</p>
              <p className="text-orange-700">{animateWords('answer_tx_bns: 97.8%')}</p>
              <p className="text-orange-700">{animateWords('status: active')}</p>
            </>
          )}
        </div>
        <img src='https://cdn.prod.website-files.com/67518561e2c1605e3c9f5414/6751a315405530373511e051_head.png' className='w-12 h-12'/>
      </div>
      </div>
   </>
  )
}

const animateWords = (text) =>
        text.split("").map((char, index) => (
          <span
            key={index}
            className="inline-block opacity-0 animate-fadeIn"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ));
  

export default Navbar