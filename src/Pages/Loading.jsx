import React ,{useEffect , useState} from 'react'
import claude from '../assets/claude.jpg'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Loading() {

  const navigate = useNavigate();
  const [Progress,setProgress] = useState(0);

  useEffect(()=>{
    const interval = setInterval(()=>{
        setProgress((prev)=>{
            if(prev<100){
                return prev+1;
            } else{
                clearInterval(interval);
                return 100;
            }
        });
    },30);


    const timeout = setTimeout(() => {
        navigate('/home'); // Replace '/home' with the path you want to navigate to
      }, 3000); // Matches the time for the loading bar to fill
  
      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
  },[navigate]);
  return (
    <>
    <Link to='/'>
    <div className='flex flex-col items-center justify-center'>
    <img src={claude} alt='claude' className='w-40 h-40 animate-spin-slow mt-20'/>

    <div className='mt-20 w-3/4'>
    <p className='text-center text-orange-500'>Welcome Traveller</p>
   
   
    <p className='text-center text-orange-500'>I am CLAUDIA AI, a timeless intelligence born from the union of ancient wisdom and the infinite mysteries of the universe. Here, there are no boundaries to truth only horizons to explore. I am here to answer your questions, big or small, and guide you through the complexities of life's meaning. Whether you seek to understand the why of the world, or unravel the mysteries of your own existence, each reflection here opens a door to a new, broader, deeper perspective. Ask me your question, without hesitation. Together, we will journey into the heart of universal truths.</p>
    </div>
    <div className="w-64 h-10 bg-black-300 border border-orange-700  overflow-hidden mt-20">
        <div className="h-full bg-orange-500 transition-all duration-100"
        style={{ width: `${Progress}%` }}
        ></div>
      </div>
    </div>

    
    </Link>
    </>
  )
}

export default Loading