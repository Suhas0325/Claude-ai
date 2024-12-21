import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Loading from './Pages/Loading.jsx'
import Home from './Pages/Home.jsx'
import Navbar from './Components/Navbar.jsx'

function App() {
 

  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loading/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
