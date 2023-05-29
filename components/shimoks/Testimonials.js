import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])


useEffect(() => {

    const  fetchTestimonials =  async ()=>{
            try{
                const testimonial_pack =  await axios.get(process.env.NEXT_PUBLIC_API_URL + "/shimok-testimonials?populate=*",{
                    headers:{ 
                        Authorization:"bearer " + process.env.NEXT_PUBLIC_SHIMOK_API_TOKEN,

                    }
                })
                
                console.log(testimonial_pack)
                setTestimonials(testimonial_pack.data.data)
               

            }catch(err){
                console.log("error has been found", err)
            }

    }

    fetchTestimonials()

}, [])



  return (
    <div className='font-[Fraunces] mt-[5vw] 2xl:mt-[90px]'>
        
        <h1 className='text-center   leading-[83.9%]  md:text-[7vw] xl:text-[5vw] 2xl:text-[100px] text-[10vw] text-[#4B4B4B] w-full font-bold'> TESTIMONIALS </h1>
        <br/>
        <p className='text-center  text-sm md:text-lg  text-[#4B4B4B] w-[50%] mx-auto md:w-[60%]  xl:tracking-[0.2em] font-bld 2xl:w-[40%]'>Let’s listen to some Testimonies from various customers and consumers of Shimorks.  </p>   
        <br/>
        <div className='flex font-[Montserrat] font-regular  items-center justify-center items-center flex-wrap gap-[1vw]   '>
            {testimonials.map((testimonial, index)=>{
                return  <div key={index}  className="text-center w-[45vw] min-w-[300px] min-h-[350px] md:w-[5vw] xl:w-[10vw] 2xl:w-[70px] bg-secondary flex flex-col justify-between items-center " >
                   <br/>
                  
                         <p className='w-[70%]  md:text-[1em] leading-[3vw] md:leading-[20px]'>{testimonial?.attributes.Testimonial}</p>
                   

                  
                   
                    <br/>
                   
                <img src = {testimonial.attributes?.Picture.data.attributes.url}    alt={"/User-avatar.svg"}   className="w-[90px] h-[90px] rounded-full border-[2px] border-[white] object-cover "/>
                  
                    <p className='italic'>{testimonial?.attributes.Name}</p>
                    <br/>
                     </div>
            })}
        </div>
    </div>
  )
}

export default Testimonials