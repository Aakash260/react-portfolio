import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'
const Portfolio = () => {
    const portfolios =[
        {
id:1,
src:arrayDestruct
    },
        {
id:2,
src:installNode
    },
        {
id:3,
src:navbar
    },
        {
id:4,
src:reactParallax
    },
        {
id:5,
src:reactSmooth
    },
        {
id:6,
src:reactWeather
    },
]
    return (
        <div name='Portfolio' className=' w-full h-full bg-gradient-to-b from-gray-900 to-gray-700'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
                <div className='pb-8'>
                    <p className='text-4xl font-bold text-white w-fit border-b-4 mt-[50vh] '>Portfolio</p>
                    <p className='text-2xl text-white'>Check out some of my work</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 '>
                {portfolios.map(({id,src})=>(

                    <div key={id} className=' shadow-md shadow-gray-500 rounded-lg '>
                            <img src={src} alt="" srcset="" className='rounded-md duration-200 hover:scale-105' />
                            <div className=' flex items-center justify-center'>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-2xl font-bold'>Demo</button>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-2xl font-bold'>Code</button>
                            </div>
                        </div>
                    ))}  
                    </div>
            </div>
        </div>
    )
}

export default Portfolio