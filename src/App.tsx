import Searchbar from '@/components/Searchbar';
import Welcome from './components/Welcome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <p className='px-4 py-4 flex items-center'><span className='text-orange-500 font-bold text-4xl font-Bungee'>GIPHY </span><span className='text-3xl font-thin font-Bungee'>Search</span></p>
      <div className=' w-5/6 mx-auto md:w-5/9  mt-16'>
    
      <BrowserRouter>
         <Routes>
           <Route path='/' element={<Welcome/>}/>
           <Route path='/App' element={<Searchbar/>}/>
         </Routes>
      </BrowserRouter>
    </div> 
    </div>
   
  )
}

export default App
