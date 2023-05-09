import React from 'react'

import Link from 'next/link'

import { faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare, faFacebook } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <div className='bg-[#2D2D2D] font-[Fraunces] flex flex-col items-center   py-[4vw]'>
                <h1 className=' text-white text-[8vw] md:text-[7vw] xl:text-[4vw]  leading-[85%]   font-regular 2xl:text-[70px]'>   OUR</h1>
                <h1 className=' text-white text-[8vw] md:text-[7vw] xl:text-[4vw]  leading-[85%]   font-regular 2xl:text-[70px]'> SOCIALS</h1>
                <br/>
                <br/>
                <div className=' w-full flex-wrap  flex items-center justify-around wrap gap-[2vw] 2xl:w-[70%] '>
                            <Link href={"/"}><span className='flex items-center  border-l-[5px] gap-[10px] px-[1vw]  ' ><FontAwesomeIcon icon={faEnvelope}  size ="1x" /><p className='text-[2vw] md:text-[1vw] '>absnyark@gmail.com </p></span></Link>  

                            <Link href={"/"}><span className='flex items-center border-l-[5px] gap-[10px] px-[2vw]  ' ><FontAwesomeIcon icon={faPhone} size='1x' /><p className='text-[2vw] md:text-[1vw] '>facebok_handle </p></span></Link> 

                            <Link href={"/"}><span className='flex items-center border-l-[5px] gap-[10px] px-[1vw]  ' ><FontAwesomeIcon icon={faFacebook} size='1x' /><p className='text-[2vw] md:text-[1vw] '>facebok_handle </p></span></Link> 

                            <Link href={"/"}><span className='flex items-center border-l-[5px] gap-[10px] px-[2vw]  ' ><FontAwesomeIcon icon={faInstagramSquare} size='1x' /><p className='text-[2vw] md:text-[1vw] '>facebok_handle </p></span></Link> 
                         </div>
    </div>
  )
}

export default Footer