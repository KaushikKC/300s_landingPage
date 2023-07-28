import React from 'react'
import capa from '../Assets/Images/Capa.svg'
import Image from 'next/image'
import clock from '../Assets/Images/Infinite-Sand-Clock.svg'

function Hero() {
  return (
    <div className='h-screen relative text-white flex flex-col lg:flex-row justify-between'>
      <div className='absolute top-[440px] md:top-[500px] left-[200px] md:left-[500px] lg:left-[680px]'>
      <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg" className='h-[30px] w-[30px] md:h-[53px] md:w-[53px]'>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.9375 9.9375H25.6719V23.1875H9.9375V9.9375ZM10.7656 10.7656H24.8438V22.3594H10.7656V10.7656Z" fill="url(#paint0_linear_31_551)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.28125 8.28125V28.1562H30.6406V8.28125H8.28125ZM29.8125 9.10938H9.10938V27.3281H29.8125V9.10938Z" fill="url(#paint1_linear_31_551)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.625 6.625H35.6094V33.125H6.625V6.625ZM7.45312 7.45312H34.7812V32.2969H7.45312V7.45312Z" fill="url(#paint2_linear_31_551)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.96875 4.96875V38.0938H39.75V4.96875H4.96875ZM38.9219 5.79688H5.79688V37.2656H38.9219V5.79688Z" fill="url(#paint3_linear_31_551)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.3125 3.3125H43.8906V43.0625H3.3125V3.3125ZM4.14062 4.14062H43.0625V42.2344H4.14062V4.14062Z" fill="url(#paint4_linear_31_551)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65625 1.65625V48.0312H48.0312V1.65625H1.65625ZM47.2031 2.48438H2.48438V47.2031H47.2031V2.48438Z" fill="url(#paint5_linear_31_551)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0V53H53V0H0ZM52.1719 0.828125H0.828125V52.1719H52.1719V0.828125Z" fill="url(#paint6_linear_31_551)"/>
        <defs>
          <linearGradient id="paint0_linear_31_551" x1="0.828126" y1="-3.91989e-07" x2="53.8281" y2="54.2422" gradientUnits="userSpaceOnUse">
            <stop stop-color="#1DDA0D"/>
            <stop offset="1" stop-color="#1DDA0D" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint1_linear_31_551" x1="0.828126" y1="-3.91989e-07" x2="53.8281" y2="54.2422" gradientUnits="userSpaceOnUse">
            <stop stop-color="#1DDA0D"/>
            <stop offset="1" stop-color="#1DDA0D" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint2_linear_31_551" x1="0.828126" y1="-3.91989e-07" x2="53.8281" y2="54.2422" gradientUnits="userSpaceOnUse">
            <stop stop-color="#1DDA0D"/>
            <stop offset="1" stop-color="#1DDA0D" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint3_linear_31_551" x1="0.828126" y1="-3.91989e-07" x2="53.8281" y2="54.2422" gradientUnits="userSpaceOnUse">
            <stop stop-color="#1DDA0D"/>
            <stop offset="1" stop-color="#1DDA0D" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint4_linear_31_551" x1="0.828126" y1="-3.91989e-07" x2="53.8281" y2="54.2422" gradientUnits="userSpaceOnUse">
            <stop stop-color="#1DDA0D"/>
            <stop offset="1" stop-color="#1DDA0D" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint5_linear_31_551" x1="0.828126" y1="-3.91989e-07" x2="53.8281" y2="54.2422" gradientUnits="userSpaceOnUse">
            <stop stop-color="#1DDA0D"/>
            <stop offset="1" stop-color="#1DDA0D" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="paint6_linear_31_551" x1="0.828126" y1="-3.91989e-07" x2="53.8281" y2="54.2422" gradientUnits="userSpaceOnUse">
            <stop stop-color="#1DDA0D"/>
            <stop offset="1" stop-color="#1DDA0D" stop-opacity="0"/>
          </linearGradient>
        </defs>
        
      </svg>
      </div>

      <div className='absolute hidden md:inline md:top-[40px] md:right-[80px] z-0'>
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60C46.5685 60 60 46.5685 60 30ZM26.25 30C26.25 43.1656 27.3101 54.3504 28.7847 58.3894C28.5062 58.1007 28.2053 57.7027 27.8877 57.1654C27.0562 55.7586 26.2749 53.6606 25.6062 50.9858C24.2724 45.6507 23.4375 38.2307 23.4375 30C23.4375 21.7693 24.2724 14.3493 25.6062 9.01417C26.2749 6.33942 27.0562 4.24136 27.8877 2.83458C28.2053 2.2973 28.5062 1.89931 28.7847 1.61057C27.3101 5.64961 26.25 16.8344 26.25 30ZM32.1123 57.1654C31.7947 57.7027 31.4938 58.1007 31.2153 58.3894C32.6899 54.3504 33.75 43.1656 33.75 30C33.75 16.8344 32.6899 5.64961 31.2153 1.61056C31.4938 1.8993 31.7947 2.2973 32.1123 2.83458C32.9438 4.24136 33.7251 6.33942 34.3938 9.01417C35.7276 14.3493 36.5625 21.7693 36.5625 30C36.5625 38.2307 35.7276 45.6507 34.3938 50.9858C33.7251 53.6606 32.9438 55.7586 32.1123 57.1654ZM27.2612 57.9369C26.9489 57.6785 26.6356 57.3737 26.3225 57.0205C25.0797 55.6188 23.9177 53.537 22.9229 50.884C20.9357 45.585 19.6875 38.2016 19.6875 30C19.6875 21.7984 20.9357 14.415 22.9229 9.11597C23.9177 6.46301 25.0797 4.38121 26.3225 2.97949C26.6356 2.62629 26.9489 2.3215 27.2612 2.06314C24.4736 6.43899 22.5 17.2976 22.5 30C22.5 42.7024 24.4736 53.561 27.2612 57.9369ZM32.7388 57.9369C33.0511 57.6785 33.3644 57.3737 33.6775 57.0205C34.9203 55.6188 36.0823 53.537 37.0771 50.884C39.0643 45.585 40.3125 38.2016 40.3125 30C40.3125 21.7984 39.0643 14.415 37.0771 9.11597C36.0823 6.46301 34.9203 4.38121 33.6775 2.97949C33.3644 2.62629 33.0511 2.3215 32.7388 2.06313C35.5264 6.43898 37.5 17.2976 37.5 30C37.5 42.7024 35.5264 53.561 32.7388 57.9369ZM20.2319 50.7939C21.7546 53.8393 23.5526 56.1043 25.485 57.4863C21.5197 52.8478 18.75 42.2864 18.75 30C18.75 17.7136 21.5197 7.15218 25.485 2.51374C23.5526 3.89573 21.7546 6.16067 20.2319 9.20606C17.5953 14.4793 15.9375 21.8297 15.9375 30C15.9375 38.1703 17.5953 45.5207 20.2319 50.7939ZM39.7681 50.7939C38.2454 53.8393 36.4474 56.1043 34.515 57.4863C38.4803 52.8478 41.25 42.2864 41.25 30C41.25 17.7136 38.4803 7.15218 34.515 2.51374C36.4474 3.89573 38.2454 6.16067 39.7681 9.20606C42.4047 14.4793 44.0625 21.8297 44.0625 30C44.0625 38.1703 42.4047 45.5207 39.7681 50.7939ZM23.5048 57.0493C21.2846 55.6196 19.2559 53.4669 17.5367 50.7163C14.2506 45.4586 12.1875 38.1367 12.1875 30C12.1875 21.8633 14.2506 14.5414 17.5367 9.28367C19.2559 6.53307 21.2845 4.38042 23.5048 2.95068C18.473 7.79251 15 18.0851 15 30C15 41.9149 18.473 52.2075 23.5048 57.0493ZM36.4952 57.0493C38.7154 55.6196 40.7441 53.4669 42.4633 50.7163C45.7494 45.4586 47.8125 38.1367 47.8125 30C47.8125 21.8633 45.7494 14.5414 42.4633 9.28367C40.7441 6.53307 38.7154 4.38041 36.4952 2.95068C41.527 7.79251 45 18.0851 45 30C45 41.9149 41.527 52.2075 36.4952 57.0493ZM14.8401 50.6507C16.717 53.1533 18.919 55.181 21.3432 56.6181C15.3451 51.6141 11.25 41.5722 11.25 30C11.25 18.4278 15.3451 8.38589 21.3432 3.38188C18.919 4.81897 16.717 6.8467 14.8401 9.3493C10.9014 14.6009 8.4375 21.899 8.4375 30C8.4375 38.101 10.9014 45.3991 14.8401 50.6507ZM45.1599 50.6507C43.283 53.1533 41.081 55.181 38.6568 56.6181C44.6549 51.6141 48.75 41.5722 48.75 30C48.75 18.4278 44.6549 8.38589 38.6568 3.38187C41.081 4.81897 43.283 6.8467 45.1599 9.3493C49.0986 14.6009 51.5625 21.899 51.5625 30C51.5625 38.101 49.0986 45.3991 45.1599 50.6507ZM18.9952 56.1729C10.5634 51.4893 4.6875 41.5871 4.6875 30C4.6875 18.4129 10.5634 8.51068 18.9952 3.82708C12.1349 8.96609 7.5 18.7613 7.5 30C7.5 41.2387 12.135 51.0339 18.9952 56.1729ZM41.0048 56.1729C49.4366 51.4893 55.3125 41.5871 55.3125 30C55.3125 18.4129 49.4366 8.51068 41.0048 3.82707C47.865 8.96608 52.5 18.7613 52.5 30C52.5 41.2387 47.865 51.0339 41.0048 56.1729ZM0.9375 30C0.9375 41.2015 7.27467 50.9229 16.5594 55.7745C8.88763 50.538 3.75 40.9547 3.75 30C3.75 19.0453 8.88762 9.46202 16.5594 4.2255C7.27467 9.07713 0.9375 18.7985 0.9375 30ZM59.0625 30C59.0625 41.2015 52.7253 50.9229 43.4406 55.7745C51.1124 50.538 56.25 40.9547 56.25 30C56.25 19.0453 51.1124 9.46203 43.4406 4.2255C52.7253 9.07712 59.0625 18.7985 59.0625 30ZM31.7214 51.0969C32.3938 45.7173 32.8125 38.258 32.8125 30C32.8125 21.742 32.3938 14.2827 31.7214 8.90308C31.3843 6.2067 30.9878 4.06878 30.5606 2.62325C30.5298 2.51905 30.4992 2.41956 30.4688 2.3247V57.6753C30.4992 57.5804 30.5298 57.481 30.5606 57.3768C30.9878 55.9312 31.3843 53.7933 31.7214 51.0969ZM29.5312 2.3247V57.6753C29.5008 57.5804 29.4702 57.481 29.4394 57.3768C29.0122 55.9312 28.6157 53.7933 28.2786 51.0969C27.6062 45.7173 27.1875 38.258 27.1875 30C27.1875 21.742 27.6062 14.2827 28.2786 8.90308C28.6157 6.2067 29.0122 4.06878 29.4394 2.62325C29.4702 2.51905 29.5008 2.41956 29.5312 2.3247Z" fill="url(#paint0_linear_31_552)"/>
        <defs>
          <linearGradient id="paint0_linear_31_552" x1="17.3437" y1="2.8125" x2="39.8437" y2="61.875" gradientUnits="userSpaceOnUse">
            <stop stop-color="#1DDA0D"/>
            <stop offset="1" stop-color="#14FF00" stop-opacity="0"/>
          </linearGradient>
        </defs>
      </svg>
      </div>

      <div className='absolute  bottom-[100px] md:bottom-[100px] lg:bottom-[200px] right-1 z-0'>
      <svg width="114" height="113" viewBox="0 0 114 113" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[56px] h-[56px] md:w-[94px] md:h-[94px] lg:w-[114px] lg:h-[114px]'>
        <g filter="url(#filter0_d_31_536)">
          <path d="M65.1897 103.915C92.1469 103.915 114 82.0623 114 55.1051C114 28.1479 92.1469 6.2948 65.1897 6.2948C38.2326 6.2948 16.3795 28.1479 16.3795 55.1051C16.3795 82.0623 38.2326 103.915 65.1897 103.915Z" stroke="#1DDA0D" stroke-miterlimit="10"/>
          <path d="M62.3812 101.102C87.7845 101.102 108.378 80.5083 108.378 55.105C108.378 29.7016 87.7845 9.10815 62.3812 9.10815C36.9778 9.10815 16.3843 29.7016 16.3843 55.105C16.3843 80.5083 36.9778 101.102 62.3812 101.102Z" stroke="#1DDA0D" stroke-miterlimit="10"/>
          <path d="M59.3968 98.4741C83.1519 98.4741 102.409 79.2168 102.409 55.4617C102.409 31.7066 83.1519 12.4492 59.3968 12.4492C35.6417 12.4492 16.3843 31.7066 16.3843 55.4617C16.3843 79.2168 35.6417 98.4741 59.3968 98.4741Z" stroke="#1DDA0D" stroke-miterlimit="10"/>
          <path d="M83.8865 83.8865C99.3296 68.4434 99.3296 43.4052 83.8865 27.9622C68.4434 12.5191 43.4053 12.5191 27.9622 27.9621C12.5191 43.4052 12.5191 68.4434 27.9622 83.8865C43.4053 99.3296 68.4435 99.3296 83.8865 83.8865Z" stroke="#1DDA0D" stroke-miterlimit="10"/>
          <path d="M52.4364 91.9677C72.3475 91.9677 88.4885 75.8267 88.4885 55.9156C88.4885 36.0046 72.3475 19.8635 52.4364 19.8635C32.5254 19.8635 16.3843 36.0046 16.3843 55.9156C16.3843 75.8267 32.5254 91.9677 52.4364 91.9677Z" stroke="#1DDA0D" stroke-miterlimit="10"/>
          <path d="M49.286 87.6991C67.4597 87.6991 82.1925 73.1063 82.1925 55.1051C82.1925 37.104 67.4597 22.5112 49.286 22.5112C31.1122 22.5112 16.3795 37.104 16.3795 55.1051C16.3795 73.1063 31.1122 87.6991 49.286 87.6991Z" stroke="#1DDA0D" stroke-miterlimit="10"/>
          <path d="M65.4437 72.1371C74.6911 72.1371 82.1876 64.7106 82.1876 55.5495C82.1876 46.3884 74.6911 38.9619 65.4437 38.9619C56.1963 38.9619 48.6998 46.3884 48.6998 55.5495C48.6998 64.7106 56.1963 72.1371 65.4437 72.1371Z" stroke="#1DDA0D" stroke-miterlimit="10"/>
          <path d="M68.3548 69.2553C75.9971 69.2553 82.1925 63.119 82.1925 55.5495C82.1925 47.98 75.9971 41.8438 68.3548 41.8438C60.7125 41.8438 54.5172 47.98 54.5172 55.5495C54.5172 63.119 60.7125 69.2553 68.3548 69.2553Z" stroke="#1DDA0D" stroke-miterlimit="10"/>
          <path d="M71.2416 65.9484C77.2869 65.9484 82.1876 61.0936 82.1876 55.1049C82.1876 49.1163 77.2869 44.2615 71.2416 44.2615C65.1963 44.2615 60.2955 49.1163 60.2955 55.1049C60.2955 61.0936 65.1963 65.9484 71.2416 65.9484Z" stroke="#1DDA0D" stroke-miterlimit="10"/>
          <path d="M62.4545 75.0968C73.3528 75.0968 82.1876 66.3451 82.1876 55.5493C82.1876 44.7534 73.3528 36.0017 62.4545 36.0017C51.5562 36.0017 42.7213 44.7534 42.7213 55.5493C42.7213 66.3451 51.5562 75.0968 62.4545 75.0968Z" stroke="#1DDA0D" stroke-miterlimit="10"/>
          <path d="M59.8413 77.6857C72.1828 77.6857 82.1876 67.7749 82.1876 55.5494C82.1876 43.3238 72.1828 33.4131 59.8413 33.4131C47.4997 33.4131 37.4949 43.3238 37.4949 55.5494C37.4949 67.7749 47.4997 77.6857 59.8413 77.6857Z" stroke="#1DDA0D" stroke-miterlimit="10"/>
          <path d="M57.1988 80.3039C71.0024 80.3039 82.1925 69.221 82.1925 55.5495C82.1925 41.8781 71.0024 30.7952 57.1988 30.7952C43.3951 30.7952 32.2051 41.8781 32.2051 55.5495C32.2051 69.221 43.3951 80.3039 57.1988 80.3039Z" stroke="#1DDA0D" stroke-miterlimit="10"/>
          <path d="M54.356 83.1222C69.7269 83.1222 82.1876 70.7775 82.1876 55.5495C82.1876 40.3215 69.7269 27.9768 54.356 27.9768C38.985 27.9768 26.5244 40.3215 26.5244 55.5495C26.5244 70.7775 38.985 83.1222 54.356 83.1222Z" stroke="#1DDA0D" stroke-miterlimit="10"/>
          <path d="M51.4742 85.8673C68.4394 85.8673 82.1925 72.2433 82.1925 55.4372C82.1925 38.6311 68.4394 25.0071 51.4742 25.0071C34.5089 25.0071 20.7559 38.6311 20.7559 55.4372C20.7559 72.2433 34.5089 85.8673 51.4742 85.8673Z" stroke="#1DDA0D" stroke-miterlimit="10"/>
        </g>
        <defs>
          <filter id="filter0_d_31_536" x="11.8795" y="5.7948" width="106.621" height="106.62" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_31_536"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_31_536" result="shape"/>
          </filter>
        </defs>
      </svg>
      </div>




        <div className='pl-[30px] md:pl-[200px] lg:pl-[300px] pt-[120px] md:py-[83px] lg:w-[870px] z-20'>
        <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[72px] h-[72px] md:w-[92px] md:h-[92px]'>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M45.9996 91.9992H32.4226C32.3731 91.9995 32.3235 91.9998 32.2739 91.9999L32.1997 92H2.00002H2.21769e-05L0 91.9992V89.9992V45.9996C0 20.5947 20.5947 0 45.9996 0C71.4045 0 91.9992 20.5947 91.9992 45.9996C91.9992 71.4045 71.4045 91.9992 45.9996 91.9992ZM27.5998 38.7982C15.6834 38.7982 5.66867 46.9402 2.81518 57.9645C6.72157 50.8343 14.2961 45.9996 22.9998 45.9996C35.7023 45.9996 45.9996 56.297 45.9996 68.9994C45.9996 77.7005 41.168 85.273 34.0413 89.1805C45.0616 86.3242 53.1996 76.3114 53.1996 64.398C53.1996 50.2596 41.7381 38.7982 27.5998 38.7982ZM2.00002 73.599V89.9977H18.5956C27.5628 89.8929 34.7997 82.5911 34.7997 73.599C34.7997 64.5417 27.4572 57.1992 18.3999 57.1992C9.34248 57.1992 2.00002 64.5417 2.00002 73.599ZM2.53331 64.2763C4.67619 54.9528 13.026 47.9996 22.9998 47.9996C34.5977 47.9996 43.9996 57.4016 43.9996 68.9994C43.9996 78.9738 37.0456 87.3241 27.7214 89.4663C33.154 86.268 36.7997 80.3593 36.7997 73.599C36.7997 63.4371 28.5618 55.1992 18.3999 55.1992C11.6402 55.1992 5.73185 58.8444 2.53331 64.2763ZM71.5994 55.1988C71.5994 70.9995 61.0688 84.3406 46.643 88.5868C57.1737 83.2928 64.3995 72.3904 64.3995 59.8002C64.3995 42.0168 49.9832 27.6005 32.1997 27.6005C19.6059 27.6005 8.70071 34.8306 3.40848 45.3664C7.65115 30.935 20.995 20.3991 36.7997 20.3991C56.019 20.3991 71.5994 35.9794 71.5994 55.1988ZM3.1109 51.6561C7.71442 42.8266 16.9531 36.7982 27.5998 36.7982C42.8427 36.7982 55.1996 49.155 55.1996 64.398C55.1996 75.0494 49.1658 84.2916 40.3298 88.893C53.0598 85.3431 62.3995 73.6624 62.3995 59.8002C62.3995 43.1214 48.8786 29.6005 32.1997 29.6005C18.3427 29.6005 6.6655 38.9333 3.1109 51.6561ZM41.3997 9.19953C24.915 9.19953 10.6807 18.8342 4.02062 32.7797C9.63351 14.9389 26.3055 2 45.9996 2C70.2999 2 89.9992 21.6993 89.9992 45.9996C89.9992 65.6949 77.0587 82.3678 59.2162 87.9797C73.1632 81.3202 82.7993 67.085 82.7993 50.5992C82.7993 27.7348 64.2641 9.19953 41.3997 9.19953ZM3.71387 39.0694C8.64401 22.9349 23.6514 11.1995 41.3997 11.1995C63.1595 11.1995 80.7993 28.8394 80.7993 50.5992C80.7993 68.3486 69.0625 83.3567 52.9265 88.2859C65.1673 82.3085 73.5994 69.7383 73.5994 55.1988C73.5994 34.8749 57.1236 18.3991 36.7997 18.3991C22.2612 18.3991 9.69177 26.83 3.71387 39.0694Z" fill="url(#paint0_linear_31_527)"/>
          <defs>
            <linearGradient id="paint0_linear_31_527" x1="45.9996" y1="0" x2="45.9996" y2="92" gradientUnits="userSpaceOnUse">
              <stop stop-color="#086900"/>
              <stop offset="0.512772" stop-color="#57C700"/>
              <stop offset="1" stop-color="#0B8A00"/>
            </linearGradient>
          </defs>
        </svg>
            <h3 className=' text-[20px] md:text-[24px] font-[500] my-[15px] leading-3 md:leading-4'>Future of trading is here.</h3>
            <h1 className='my-[15px] md:my-[30px] text-[40px] md:text-[96px] font-[500] w-[300px] md:w-[500px] leading-[70px] md:leading-[80px]'>Fixed Time.
                Infinite.
                Possibilities.
            </h1>
            <h3 className='my-[25px] md:my-[50px] text-[20px] md:text-[24px] leading-3'>like never before </h3>
            <button className='mt-[20px] bg-[#D90D8B] rounded-xl md:px-[26px] px-[20px] py-[4px] md:py-[6px] shadow-[0px_20px_90px_-12px] shadow-[#ffffffcc] text-[20px] md:text-[24px]'>Join Now</button>
        </div>

        <div className='mt-[20px] hidden lg:inline'>
          <Image className='h-[800px] w-[400px]' src={clock} alt='' />
        </div>

        <div className='lg:flex lg:justify-center lg:items-center  z-20'>
          <h3 className=' text-[12px] ml-auto lg:ml-0 mt-[-180px] mr-[0px] md:mr-0 md:mt-[-220px]  lg:mt-auto lg:mb-[250px]   md:text-[18px] lg:text-[24px] font-[500] w-[150px] md:w-[220px] lg:w-[320px] '>Elevate your earnings with fixed-time trading transparency</h3>
        </div>

        <div className='absolute bottom-0 z-0'>
          <Image className='w-screen h-[150px]' src={capa} alt='' />
        </div>
    </div>
  )
}

export default Hero