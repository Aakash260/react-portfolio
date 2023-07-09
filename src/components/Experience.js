import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import nextjs from '../assets/nextjs.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
const Experience = () => {
 const techs=[
    {
id:1,
src:html,
title:'HTML',
style:'shadow-orange-500'
    },
    {
id:2,
src:css,
title:'CSS',
style:'shadow-blue-500'
    },
    {
id:3,
src:javascript,
title:'JAVASCRIPT',
style:'shadow-yellow-500'
    },
    {
id:4,
src:reactImage,
title:'REACTIMAGE',
style:'shadow-blue-800'
    },
    {
id:5,
src:nextjs,
title:'NEXTJS',
style:'shadow-gray-500'
    },
    {
id:6,
src:github,
title:'GITHUB',
style:'shadow-black'
    },
    {
id:1,
src:tailwind,
title:'TAILWIND',
style:'shadow-white'
    },
 ]
  return (
    <div name='Experience' className='w-full h-full bg-gradient-to-b from-gray-900 to-gray-700'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
        <div className='pb-8'>
            <p className='text-4xl font-bold text-white w-fit border-b-4 mt-[50vh] '>Experience</p>
            <p className='text-2xl text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, ex?</p>
            </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 '>
        {techs.map(({id,src,title,style})=>(

            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt="" srcset="" className='w-20 mx-auto' />
               <p className='mt-4'>{title}</p>
                </div>
        ))}
       
        </div>
        
            </div>
    </div>
  )
}

export default Experience