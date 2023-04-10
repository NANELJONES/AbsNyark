import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '../../components/abs-nyark/Nav'
import Contact from '../../components/abs-nyark/Contact.jsx'

const contactUs = () => {
  return (
    <>
    <Nav/>
    <Contact/>
   
    {/* <div className='h-auto px-[2vw]   max-h-[1000px] md:h-auto  flex  md:flex-row-reverse justify-around  '>

    <div className='w-[70%]   mx-auto md:h-[auto] md:w-2/3 mx-auto  md:ml-[4vw] flex flex-col items-baseline  '>
        <h1 className='text-white text-[10vw]  md:text-[4vw]  font-[Serif] font-regular  md:text-left leading-[85%]'>Mission & </h1>
        <h1 className=' text-white text-[14vw] md:text-[7vw]  leading-[85%]  font-[Serif] font-bold'>Vision</h1>
      

        <br/>
              <h1 className='text-white text-[5vw]  md:text-[2vw]  font-[Serif] font-regular'>Mission: </h1>
              <p className='font-[Fraunces]  w-full  md:leading-[2vw] font-thin md:text-left md:w-4/5 text-white text-[2vw] md:text-[1vw] '>ABS NYARK is a company that was birthed from the love of Ghana and its rich
              Abs Nyark to grow beyond the United Kingdom but to be an international
              company that is a representation of Ghana. To reach nations that are not familiar
              with the beautiful culture of Ghana.

              </p>

              <br/>

              <h1 className='text-white text-[10vw]  md:text-[2vw]  font-[Serif] font-regular'>Vision: </h1>
              <p className='font-[Fraunces]  w-full  md:leading-[2vw] font-thin md:text-left md:w-4/5 text-white text-[2vw] md:text-[1vw] '>ABS NYARK is a company that was birthed from the love of Ghana and its rich
              We intend to expand our business into many avenues, which will bring the
              beauty of Ghana to the forefront of many people.
              To also work alongside established businesses in Ghana and creating opportunities
              for the local people through Abs Nyark.

              </p>



      </div>

    <div className='w-[20%] h-[30vw]   md:w-1/3  flex items-center  relative   '>
        <Image src={"/mission.png"}  fill unoptimized className="object-contain mx-auto  my-auto"></Image>

    </div>





</div> */}
</>
  )
}

export default contactUs