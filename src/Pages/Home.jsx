import React from 'react'
import Navbar from '../Components/Navbar'
import Topics from '../Components/Topics'
import { Link } from 'react-router-dom'
import Content from '../Components/Content'
import Goal from '../Components/Goal'
function Home() {
  return (
    <>
    <div className=''>
    <Link to='/home' >
      
      <Navbar/>
      <Topics/>
      <Content/>
      <Goal/>
    </Link>

    </div>
    </>
   
  )
}

export default Home