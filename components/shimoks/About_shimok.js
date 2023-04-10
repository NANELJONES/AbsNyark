import React from 'react'
import Image from 'next/Image'
const About_shimok = () => {
  return (
    <div className='px-[2vw] flex flex-col md:flex-row mt-[10vw] 2xl:mt-[120px] '>
        <div className='w-full md:w-1/2 shadow-xl bg-[#DD7C11] font-[Montserrat] px-[5vw] py-[8vw] 2xl:px-[70px] 2xl:py-[80px]'>
            <div className='border-l-[2vw] md:border-l-[1vw] px-[2vw] 2xl:px-[40px] 2xl:border-l-[20px]  '>
                <h1 className=' text-white text-[14vw] md:text-[7vw]  leading-[85%]   font-regular 2xl:text-[130px]'>   ABOUT</h1>
                <h1 className=' text-white text-[14vw] md:text-[7vw]  leading-[85%]   font-regular 2xl:text-[130px]'> US</h1>

            </div>
            <br/>
        
            <h1 className=' text-white text-[4vw]  md:text-[2vw]  font-regular  md:text-left leading-[85%] w-[50%] 2xl:text-[30px]'>A brief history of Shimorks  </h1>

            <p className='w-full   font-thin md:text-left pt-[5vw] md:pt-[2vw] md:w-4/5 text-white text-[2.5vw] md:text-[1.2vw]  2xl:text-[20px]  '>Our mission is to bring the beautiful flavours of Ghana beyond its borders. We love the spices and the sauces unique flavours; we aim to represent the culture of Ghana through the Sauces we create.</p>

           

            <p className=' w-full  font-thin md:text-left pt-[5vw] md:pt-[2vw] md:w-4/5 text-white text-[2.5vw] md:text-[1.2vw] 2xl:text-[20px]   '>Our mission is to bring about a connection between Ghana and the rest of the world.</p>
            <br/>
         
        </div>
        <div className='relative w-full md:w-1/2 md:right-[8vw]  2xl:right-[140px]  '>
            <Image src={"/circle_images.png"} fill unoptimized className='object-contain'/>
            
        </div>

    </div>
  )
}

export default About_shimok