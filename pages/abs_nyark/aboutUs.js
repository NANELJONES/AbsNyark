import React from 'react'
import Nav from '../../components/abs-nyark/Nav'
import Link from 'next/link'
import Image from 'next/image'


const aboutUs = () => {
  return (
<>
    <Nav/>
    <div className='bg-nav_bg h-auto  py-[4vw] flex flex-col gap-[4vw]'>
     

      <div className='px-[2vw]  h-[auto]  pt-[4vw] md:h-auto   flex flex-row-reverse md:flex-row justify-around  '>

                  <div className='w-4/5   mx-auto md:h-[auto] md:w-2/3 mx-auto  md:ml-[4vw] flex flex-col items-baseline  '>
                      <h1 className='text-white text-[10vw]  md:text-[4vw]  font-[Serif] font-regular  md:text-left leading-[85%]'>About </h1>
                      <h1 className=' text-white text-[14vw] md:text-[7vw]  leading-[85%]  font-[Serif] font-bold'>Abs Nyark</h1>
                    
            
                      <br/>

                      <p className='font-[Fraunces] w-full  md:leading-[2vw] font-thin md:text-left md:w-4/5 text-white text-[2vw] md:text-[1vw] '>ABS NYARK is a company that was birthed from the love of Ghana and its rich
                        culture, offering an umbrella where all entities can be reached through the eyes of
                        the motherland.
                        The company is based in the United Kingdom, but its essence originates from the
                        country Ghana. We are a conglomerate business, made up of several independent
                        businesses.
                        It is not only a company but an experience.
                        It is also a representation of the love that Abs Nyarko has for her heritage.
                        Our logo has the Adrinka symbol ‘Nsaa’ which represents excellence, quality,
                        workmanship and authenticity. This is attached to name Abs Nyark, who is the
                        creator of the company. We always want to bring the authenticity of Ghana, through
                        food, art, education and opportunities.
                        </p>

                 
                    </div>

                <div className='w-1/5 h-[30vw]   md:w-1/3    relative   '>
                  <Image src={"/aboutus.png"}  fill unoptimized className="object-contain mx-auto  my-auto"></Image>
                  
                </div>
                

      </div>


    <div className='w-full h-[1.5vw] bg-white'>
      
      
    </div>

      <div className='h-auto px-[2vw]    md:h-auto  flex  md:flex-row-reverse justify-around  '>

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


    
    
    
      </div>

      
      
      
      </div>
      </>
  )
}

export default aboutUs