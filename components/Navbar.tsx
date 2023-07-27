'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useAnimate, stagger } from "framer-motion";
import logo from '../Assets/Images/logo.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <div className='fixed h-[100px] w-full md:h-full md:w-[100px] md:border-r-2 md:border-b-0 border-b-2 border-[#8D8D8D] z-[1000]'>
        <div className='flex md:flex-col flex-row md:py-10 px-4 justify-between items-center h-full '>
            
            <Image src={logo} alt='' className='md:w-[147px] w-[90px] h-[39px] md:h-[59px] md:rotate-[270deg] cursor-pointer'/>
            
            <div className='z-[100]' onClick={() => setIsOpen(!isOpen)}>
            {
            !isOpen ?
            <svg  viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer md:h-[50px] md:w-[50px] h-[30px] w-[30px]'>
            <circle cx="25" cy="25" r="24" stroke="white" stroke-width="2"/>
            <line className='animate-[fade-in_.5s_ease-in-out]' x1="9" y1="16" x2="42" y2="16" stroke="white" stroke-width="2"/>
            <line className='animate-[fade-in_.5s_ease-in-out]' x1="9" y1="32" x2="31" y2="32" stroke="white" stroke-width="2"/>
          </svg>
          :
          <svg  viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer md:h-[50px] md:w-[50px] h-[30px] w-[30px]'>
            <circle cx="25" cy="25" r="24" stroke="white" stroke-width="2"/>
            <line className='animate-[fade-in_.5s_ease-in-out]' x1="13.2929" y1="37.6274" x2="36.6274" y2="14.2929" stroke="white" stroke-width="2"/>
            <line className='animate-[fade-in_.5s_ease-in-out]' x1="36.6274" y1="37.0416" x2="13.2928" y2="13.7071" stroke="white" stroke-width="2"/>
          </svg>
          }
          </div>
          {
            isOpen &&
            <div className='w-screen fixed top-0 left-0 md:left-[100px] body-wrapper  h-screen'>
            <nav className=" h-full fixed  top-0 rounded-lg drop-shadow-lg flex justify-center  items-center w-full md:w-[300px] bg-[#4a4a4a]/80 animate-[side-in-left_.5s_ease-in-out]">
          <ul className='flex flex-col gap-10 ml-[280px] text-white text-3xl justify-center items-start translate-x-[-100%] will-change-transform animate-[fade-in-down_.5s_ease-in-out]'>
            <li className='cursor-pointer drop-shadow-lg underline-effect'>Home</li>
            <li className='cursor-pointer drop-shadow-lg underline-effect'>DAPP</li>
            <li className='cursor-pointer drop-shadow-lg underline-effect'>LitePaper</li>
            <li className='cursor-pointer drop-shadow-lg underline-effect'>Team</li>
          </ul>
        </nav>
            </div>
          }
          
            <div className='flex md:flex-col space-x-3 md:space-x-0  md:space-y-3 cursor-pointer justify-center items-center'>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer  h-[25px] w-[25px] md:h-[32px] md:w-[32px]'>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 5C0 2.23858 2.23858 0 5 0H27C29.7614 0 32 2.23858 32 5V27C32 29.7614 29.7614 32 27 32H5C2.23858 32 0 29.7614 0 27V5ZM22.1 11.5C22.8 11.4 23.4 11.3 24 11C23.6 11.7 23 12.3 22.3 12.7C22.5 17.4 19.1 22.5 13 22.5C11.2 22.5 9.5 21.9 8 21C9.7 21.2 11.5 20.7 12.7 19.8C11.2 19.8 10 18.8 9.6 17.5C10.1 17.6 10.6 17.5 11.1 17.4C9.6 17 8.5 15.6 8.5 14.1C9 14.3 9.5 14.5 10 14.5C8.6 13.5 8.1 11.6 9 10.1C10.7 12.1 13.1 13.4 15.8 13.5C15.3 11.5 16.9 9.5 19 9.5C19.9 9.5 20.8 9.9 21.4 10.5C22.2 10.3 22.9 10.1 23.5 9.7C23.3 10.5 22.8 11.1 22.1 11.5Z" fill="#1DDA0D"/>
            </svg>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer  h-[25px] w-[25px] md:h-[32px] md:w-[32px]'>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.744 18.8C17.984 19.104 18.272 19.448 18.272 19.448C20.04 19.392 20.72 18.232 20.72 18.232C20.72 15.656 19.568 13.568 19.568 13.568C18.416 12.704 17.32 12.728 17.32 12.728L17.208 12.856C18.568 13.272 19.2 13.872 19.2 13.872C18.368 13.416 17.552 13.192 16.792 13.104C16.216 13.04 15.664 13.056 15.176 13.12C15.1341 13.12 15.0983 13.1261 15.0579 13.133L15.04 13.136C14.76 13.16 14.08 13.264 13.224 13.64C12.928 13.776 12.752 13.872 12.752 13.872C12.752 13.872 13.416 13.24 14.856 12.824L14.776 12.728C14.776 12.728 13.68 12.704 12.528 13.568C12.528 13.568 11.376 15.656 11.376 18.232C11.376 18.232 12.048 19.392 13.816 19.448C13.816 19.448 14.112 19.088 14.352 18.784C13.336 18.48 12.952 17.84 12.952 17.84C12.952 17.84 13.032 17.896 13.176 17.976C13.184 17.984 13.192 17.992 13.208 18C13.22 18.008 13.232 18.014 13.244 18.02C13.256 18.026 13.268 18.032 13.28 18.04C13.48 18.152 13.68 18.24 13.864 18.312C14.192 18.44 14.584 18.568 15.04 18.656C15.64 18.768 16.344 18.808 17.112 18.664C17.488 18.6 17.872 18.488 18.272 18.32C18.552 18.216 18.864 18.064 19.192 17.848C19.192 17.848 18.792 18.504 17.744 18.8ZM13.736 16.6C13.736 16.112 14.096 15.712 14.552 15.712C15.008 15.712 15.376 16.112 15.368 16.6C15.368 17.088 15.008 17.488 14.552 17.488C14.104 17.488 13.736 17.088 13.736 16.6ZM16.656 16.6C16.656 16.112 17.016 15.712 17.472 15.712C17.928 15.712 18.288 16.112 18.288 16.6C18.288 17.088 17.928 17.488 17.472 17.488C17.024 17.488 16.656 17.088 16.656 16.6Z" fill="#1DDA0D"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M27 0C29.7614 0 32 2.23858 32 5V27C32 29.7614 29.7614 32 27 32H5C2.23858 32 0 29.7614 0 27V5C0 2.23858 2.23858 0 5 0H27ZM10.64 9H21.36C22.264 9 23 9.736 23 10.648V25L21.28 23.48L20.312 22.584L19.288 21.632L19.712 23.112H10.64C9.736 23.112 9 22.376 9 21.464V10.648C9 9.736 9.736 9 10.64 9Z" fill="#1DDA0D"/>
            </svg>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer h-[25px] w-[25px] md:h-[32px] md:w-[32px]'>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0H27C29.7614 0 32 2.23858 32 5V27C32 29.7614 29.7614 32 27 32H5C2.23859 32 0 29.7614 0 27V5C0 2.23858 2.23859 0 5 0ZM9.70001 11.7C9.79999 11.8 9.89999 12 9.89999 12.2V19.2C10 19.5 9.89999 19.7 9.70001 19.9L8 21.9V22.2H12.7V21.9L11 19.9C10.9 19.7 10.8 19.5 10.8 19.2V13.1L15 22.2H15.4L19 13.1V20.4C19 20.6 19 20.7 18.9 20.8L17.6 22.1V22.4H23.9V22.1L22.7 20.9C22.6 20.8 22.6 20.6 22.6 20.5V11.5C22.5 11.3 22.6 11.2 22.7 11.1L24 9.89999V9.6H19.6L16.4 17.5L12.8 9.6H8.20001V9.89999L9.70001 11.7Z" fill="#1DDA0D"/>
            </svg>
            </div>
        </div>
    </div>
  )
}

export default Navbar