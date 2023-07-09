import React from 'react'
import {FaTimes,FaBars} from 'react-icons/fa'
import { useState } from 'react'
import {Link} from 'react-scroll'
const Navbar = () => {
const [first, setfirst] = useState(false)
    const navarr=[{
id:1,
value:'Home'
    },
{
id:2,
value:'About'
},
{
id:3,
value:'Portfolio'
},
{
id:4,
value:'Experience'
},
{
id:5,
value:'Contact'
},
]
  return (
    
    <div  className='h-20 justify-between items-center bg-black w-full flex fixed'>
   <div className='text-white font-signature text-6xl ml-2'>Aakash</div>  
   <ul className='hidden md:flex'>
   {navarr.map(({id,value})=>(
     <li key={id} className='text-gray-600 font-bold text-2xl hover:scale-105 duration-200 px-4'><Link to={value} smooth duration={500}>{value}</Link></li>
  ))}
   </ul> 
  
    <div onClick={()=>{setfirst(!first)}} className=' text-gray-500 pr-2 z-10 md:hidden'>
   {!first ? <FaBars  size={30}/> :<FaTimes size={30}/>}
    </div>
    {first &&
    
      <ul className='text-gray-600 top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-700 flex flex-col items-center justify-center absolute'>
      {navarr.map(({id,value})=>(
         <li key={id} className='font-bold text-3xl hover:scale-110 py-2 '><Link to={value} smooth duration={500} onClick={()=>{setfirst(!first)}}>{value}</Link></li>
    
      ))}
      </ul>
    }
   </div>
     
  )
}

export default Navbar