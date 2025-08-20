import React, { useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

  const Searchbar = () => {
  const[query,setquery] = useState("");
  const[gifs,setgifs] = useState([]);
  const[Loading,setLoading] = useState(false);


  const handleres = async () => {
         const apikey = 'your keys'
         const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apikey}&limit=12`;
          
        try{
          if(!query.trim()){
            toast.error("Please Enter a Gifs")
          }
          setLoading(true)
          const res = await fetch(url);
          const data = await res.json();
          setgifs(data.data)
          setquery("");
          setLoading(false);
         
        }
        catch(error)
        {
            console.error('Error Fetching gifs',error)
        }    
      
  }
  useEffect(() => {
   
  },[gifs])
  
  if(Loading) return <p className='text-center'>Gifs Loding.....</p>


  return (
      
    <div className='space-y-4'>
      <Input placeholder='Enter Your Gifs.....' maxLength={50}
      value={query} onChange={(e) => setquery(e.target.value)}/>
      <p className='font-Bungee'>{query.length}/50</p>
      <Button className='w-full bg-orange-500 text-white hover:bg-white hover:text-black font-poppins' onClick={handleres}>
        Search Gif
      </Button>
      <Toaster/>
      { gifs.length === 0 ? (
        <p className='text-center text-slate-500 font-Bungee'>No Gifs Found.....</p>
      ) : ( 
       <div className='grid grid-cols-3 gap-4'>
        
        {gifs.map((gif) => (
          <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
        ))}
      </div>
      )

    }
    </div>
  )
}

export default Searchbar
