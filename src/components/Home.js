import React from 'react'
import HeroImage from '../assets/heroImage.png'
import { AiOutlineArrowRight } from 'react-icons/ai'
const Home = () => {
    return (
        <div name='Home' className='w-full h-screen bg-gradient-to-b from-gray-900 to-gray-700'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='text-white flex flex-col justify-center h-full'>
                    <h2 className='font-bold text-4xl py-4 md:text-7xl'>Lorem ipsum dolor sit amet consectetur </h2>
                    <p className='max-w-md'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea ut inventore aspernatur corporis modi ad repellendus dolorum voluptatem quaerat? Velit.</p>
                    <div>
                        <button className='group bg-gradient-to-r from-blue-700 to-blue-300 p-4 m-2 rounded-xl flex justify-center items-center'>Portfolio <span className='ml-2 group-hover:rotate-90 duration-200'><AiOutlineArrowRight size={30}/></span></button>
                    </div>
                </div>
                <div> <img src='/cafecoffe.jpg' alt="myimg" srcset="" className='rounded-2xl mx-auto w-2/3 md:w-full'/></div>
            </div>
        </div>
    )
}

export default Home