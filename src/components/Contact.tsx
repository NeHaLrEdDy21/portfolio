"use client"
import React from 'react'

const Contact = () => {
  return (
    <div className='bg-gradient-to-b from-[#381a5f] via-30% to-black py-32'>
        <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4'>
                Contact<span className='text-orange-500'>Me</span>
        </h1>

         <div className='text-white max-w-[1200px] mx-auto p-8 text-center'>
    
                <div
                    className='flex flex-row justify-between items-center bg-white/10 p-4 rounded-xl'>
                    <h1>Website</h1>
                    <a href="https://vjdataquesters.vercel.app/">  Click here</a>

                </div>


        </div>
         <div className='text-white max-w-[700px] mx-auto p-8 text-center'>
    
                <div
                    className='flex flex-row justify-between items-center bg-white/10 p-4 rounded-xl'>
                    <h1>LinkedIn</h1>
                    <a href="https://www.linkedin.com/company/vj-data-questers/">  Click here</a>

                </div>


        </div>
         <div className='text-white max-w-[700px] mx-auto p-8 text-center'>
    
                <div
                    className='flex flex-row justify-between items-center bg-white/10 p-4 rounded-xl'>
                    <h1>Resume</h1>
                    <a href="https://drive.google.com/file/d/1vV2OSPp7YxQmujjkCnneABok7LOpIsRz/edit">  Click here</a>

                </div>


        </div>
    </div>
    
  )
}

export default Contact
