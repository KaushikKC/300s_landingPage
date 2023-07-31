import Navbar from '@/components/Navbar'
import React from 'react'
import bg from '../../Assets/Images/1.svg'
import Image from 'next/image'

function page() {
  return (
    <div>
        <Navbar />
        <div className='relative'>
            <div className=' flex flex-col justify-center items-center h-screen text-center text-white'>
                <h1 className='text-[70px] md:text-[76px] lg:text-[96px]'>Comming Soon</h1>
                <p className='text-[15px] md:text-[18px] lg:text-[24px]'>Join the social community to keep yourself updated. </p>
                <button className='mt-[80px] bg-[#D90D8B] rounded-xl md:px-[26px] px-[20px] py-[4px] md:py-[6px] shadow-[0px_20px_90px_-12px] shadow-[#ffffffcc] text-[20px] md:text-[24px]'>Join Now</button>
            </div>
            <Image className='hidden lg:inline absolute right-[40px] top-[140px]' src={bg} alt='bg' />
        </div>
    </div>
  )
}

export default page