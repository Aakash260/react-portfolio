import React from 'react'
import { CiFaceSmile} from 'react-icons/ci'
const Contact = () => {
  return (
    <div name='Contact' className=' w-full h-screen bg-gradient-to-b from-gray-900 to-gray-700'>
    <div>
    <div>
    <p className='text-4xl font-bold inline border-b-4 border-gray-500 text-white'>Contact</p>
    <p className='py-6 text-white text-2xl flex items-center'>I'm just one message away <CiFaceSmile className='ml-4'/></p>
    </div>
    <div className='flex justify-center items-center'>
    <form action="https://getform.io/f/27664d4b-8143-42d9-abd7-ec455851c1f5" method='POST' className='flex flex-col w-full md:w-1/2'>
    <input type="text" name='name' placeholder='Enter Your Name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
    <input type="text" name='email' placeholder='Enter Your Email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
    <textarea name="message" rows="10" placeholder="Enter your message" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-200'>Let's Talk</button>
    </form>
    </div>
    </div>
    </div>
  )
}

export default Contact